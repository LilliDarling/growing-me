import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const { email } = await request.json();

	if (!email || typeof email !== 'string') {
		return json({ error: 'Email is required' }, { status: 400 });
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
