import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import type { RequestHandler } from './$types';

const EMAIL_RE = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

// Simple in-memory rate limiter: max 5 requests per IP per minute
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60_000;

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

export const POST: RequestHandler = async ({ request, getClientAddress }) => {
	const ip = getClientAddress();
	if (isRateLimited(ip)) {
		return json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
	}

	const { email } = await request.json();

	if (!email || typeof email !== 'string') {
		return json({ error: 'Email is required' }, { status: 400 });
	}

	if (email.length > 254 || !EMAIL_RE.test(email)) {
		return json({ error: 'Please enter a valid email address' }, { status: 400 });
	}

	const res = await fetch('https://connect.mailerlite.com/api/subscribers', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${env.MAILERLITE_API_KEY}`
		},
		body: JSON.stringify({ email })
	});

	if (!res.ok) {
		const data = await res.json().catch(() => ({}));
		return json(
			{ error: data.message || 'Failed to subscribe' },
			{ status: res.status }
		);
	}

	return json({ success: true }, { status: 201 });
};
