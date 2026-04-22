import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);

	response.headers.set('X-Frame-Options', 'DENY');
	response.headers.set('X-Content-Type-Options', 'nosniff');
	response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
	response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

	// frame-ancestors can only be set via HTTP header (ignored in meta).
	// Append it to whatever CSP SvelteKit's kit.csp config already set, so we
	// don't clobber the nonce-based script-src.
	const existingCsp = response.headers.get('Content-Security-Policy');
	const frameAncestors = "frame-ancestors 'none'";
	response.headers.set(
		'Content-Security-Policy',
		existingCsp ? `${existingCsp}; ${frameAncestors}` : frameAncestors
	);

	return response;
};
