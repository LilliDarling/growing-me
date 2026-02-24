import matter from 'gray-matter';
import { marked } from 'marked';
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

export interface PostMeta {
	title: string;
	date: string;
	author: string;
	image: string;
	category: string;
	featured: boolean;
	slug: string;
}

export interface Post extends PostMeta {
	content: string;
}

const ARTICLES_DIR = join(process.cwd(), 'src/content/articles');

export function getAllPosts(): PostMeta[] {
	const files = readdirSync(ARTICLES_DIR).filter((f) => f.endsWith('.md'));

	const posts = files.map((filename) => {
		const slug = filename.replace('.md', '');
		const filepath = join(ARTICLES_DIR, filename);
		const raw = readFileSync(filepath, 'utf-8');
		const { data } = matter(raw);

		return {
			title: data.title ?? '',
			date: data.date ?? '',
			author: data.author ?? 'Lilli',
			image: data.image ?? '',
			category: data.category ?? '',
			featured: data.featured ?? false,
			slug
		} satisfies PostMeta;
	});

	return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | null {
	const filepath = join(ARTICLES_DIR, `${slug}.md`);

	try {
		const raw = readFileSync(filepath, 'utf-8');
		const { data, content } = matter(raw);

		return {
			title: data.title ?? '',
			date: data.date ?? '',
			author: data.author ?? 'Lilli',
			image: data.image ?? '',
			category: data.category ?? '',
			featured: data.featured ?? false,
			slug,
			content: marked(content) as string
		};
	} catch {
		return null;
	}
}

export function getFeaturedPosts(): PostMeta[] {
	return getAllPosts().filter((p) => p.featured);
}

export function getCategories(): string[] {
	const posts = getAllPosts();
	const categories = [...new Set(posts.map((p) => p.category).filter(Boolean))];
	return categories.sort();
}
