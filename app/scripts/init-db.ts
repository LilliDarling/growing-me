import { createClient } from '@libsql/client';
import 'dotenv/config';

const db = createClient({
	url: process.env.COMMENTS_TURSO_DATABASE_URL!,
	authToken: process.env.COMMENTS_TURSO_AUTH_TOKEN!
});

async function init() {
	await db.execute(`
		CREATE TABLE IF NOT EXISTS comments (
			id         TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
			article    TEXT NOT NULL,
			name       TEXT NOT NULL,
			body       TEXT NOT NULL,
			created_at TEXT DEFAULT (datetime('now')),
			flagged    BOOLEAN DEFAULT 0
		)
	`);

	await db.execute(`
		CREATE INDEX IF NOT EXISTS idx_comments_article ON comments(article)
	`);

	console.log('Database initialized successfully.');
}

init().catch(console.error);
