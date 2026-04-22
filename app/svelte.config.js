import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter(),
		csp: {
			mode: 'auto',
			directives: {
				'default-src': ["'self'"],
				'script-src': ["'self'"],
				'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
				'font-src': ["'self'", 'https://fonts.gstatic.com'],
				'img-src': ["'self'", 'data:'],
				'connect-src': ["'self'"],
				'base-uri': ["'self'"],
				'form-action': ["'self'"],
				'object-src': ["'none'"]
			}
		}
	},
	preprocess: [mdsvex()],
	extensions: ['.svelte', '.svx']
};

export default config;
