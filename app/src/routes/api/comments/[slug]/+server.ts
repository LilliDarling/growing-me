import { json } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import sanitizeHtml from 'sanitize-html';
import type { RequestHandler } from './$types';

const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 3_600_000; // 1 hour
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

const MAX_NAME_LENGTH = 80;
const MAX_BODY_LENGTH = 2000;

// Patterns that indicate genuinely threatening content
const THREAT_PATTERNS = [
	/\b(kill|murder|shoot|stab|bomb)\s+(you|them|her|him|everyone)\b/i,
	/\b(death\s+threat)\b/i,
	/\bi\s+will\s+(hurt|harm|destroy)\s+(you|them)\b/i
];

function isRateLimited(ip: string): boolean {
	const now = Date.now();
	const entry = rateLimitMap.get(ip);

	if (!entry || now > entry.resetAt) {
		rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
		return false;
	}

	entry.count++;
	return entry.count > RATE_LIMIT;
}

function isThreatening(text: string): boolean {
	return THREAT_PATTERNS.some((pattern) => pattern.test(text));
}

function sanitizeInput(text: string): string {
	return sanitizeHtml(text, { allowedTags: [], allowedAttributes: {} }).trim();
}

export const GET: RequestHandler = async ({ params }) => {
	const { slug } = params;

	const result = await db.execute({
		sql: 'SELECT id, name, body, created_at FROM comments WHERE article = ? AND flagged = 0 ORDER BY created_at DESC',
		args: [slug]
	});

	return json(result.rows);
};

export const POST: RequestHandler = async ({ params, request, getClientAddress }) => {
	const ip = getClientAddress();
	if (isRateLimited(ip)) {
		return json(
			{ error: 'You can post up to 3 comments per hour. Please come back shortly.' },
			{ status: 429 }
		);
	}

	const { slug } = params;
	const body = await request.json();

	const name = sanitizeInput(body.name || '');
	const comment = sanitizeInput(body.body || '');

	// Honeypot check — if this hidden field has a value, it's a bot
	if (body.website) {
		// Silently accept but don't store — bots think they succeeded
		return json({ success: true }, { status: 201 });
	}

	if (!name || name.length > MAX_NAME_LENGTH) {
		return json(
			{ error: `Name is required and must be under ${MAX_NAME_LENGTH} characters.` },
			{ status: 400 }
		);
	}

	if (!comment || comment.length > MAX_BODY_LENGTH) {
		return json(
			{ error: `Comment is required and must be under ${MAX_BODY_LENGTH} characters.` },
			{ status: 400 }
		);
	}

	const flagged = isThreatening(comment) || isThreatening(name);

	await db.execute({
		sql: 'INSERT INTO comments (article, name, body, flagged) VALUES (?, ?, ?, ?)',
		args: [slug, name, comment, flagged ? 1 : 0]
	});

	if (flagged) {
		// Comment is stored but not shown — you can review it later
		return json({ success: true, message: 'Your comment is being reviewed.' }, { status: 201 });
	}

	return json({ success: true }, { status: 201 });
};
