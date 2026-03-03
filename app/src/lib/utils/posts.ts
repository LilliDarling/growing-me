import matter from 'gray-matter';
import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';

export interface PostMeta {
	title: string;
	date: string;
	author: string;
	description: string;
	image: string;
	category: string;
	featured: boolean;
	slug: string;
}

export interface Post extends PostMeta {
	content: string;
}

// Import all .md files at build time via Vite's import.meta.glob
const articleFiles = import.meta.glob('/src/content/articles/*.md', {
	eager: true,
	query: '?raw',
	import: 'default'
}) as Record<string, string>;

function parsePostMeta(slug: string, raw: string): PostMeta {
	const { data } = matter(raw);
	return {
		title: data.title ?? '',
		date: data.date ?? '',
		author: data.author ?? 'Lilli',
		description: data.description ?? '',
		image: data.image ?? '',
		category: data.category ?? '',
		featured: data.featured ?? false,
		slug
	};
}

export function getAllPosts(): PostMeta[] {
	const posts = Object.entries(articleFiles).map(([path, raw]) => {
		const slug = path.split('/').pop()!.replace('.md', '');
		return parsePostMeta(slug, raw);
	});

	return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | null {
	const entry = Object.entries(articleFiles).find(([path]) =>
		path.endsWith(`/${slug}.md`)
	);

	if (!entry) return null;

	const [, raw] = entry;
	const { data, content } = matter(raw);

	return {
		title: data.title ?? '',
		date: data.date ?? '',
		author: data.author ?? 'Lilli',
		description: data.description ?? '',
		image: data.image ?? '',
		category: data.category ?? '',
		featured: data.featured ?? false,
		slug,
		content: sanitizeHtml(marked(content) as string, {
			allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'h1', 'h2', 'div']),
			allowedAttributes: {
				...sanitizeHtml.defaults.allowedAttributes,
				img: ['src', 'alt', 'title', 'width', 'height', 'loading', 'style'],
				div: ['style']
			}
		})
	};
}

export function getFeaturedPosts(): PostMeta[] {
	return getAllPosts().filter((p) => p.featured);
}

export function getCategories(): string[] {
	const posts = getAllPosts();
	const categories = [...new Set(posts.map((p) => p.category).filter(Boolean))];
	return categories.sort();
}
