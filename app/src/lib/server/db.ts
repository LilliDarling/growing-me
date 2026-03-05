import { createClient } from '@libsql/client';
import { env } from '$env/dynamic/private';

export const db = createClient({
	url: env.COMMENTS_TURSO_DATABASE_URL!,
	authToken: env.COMMENTS_TURSO_AUTH_TOKEN!
});
