import type { RequestHandler } from './$types';
import { getAllPosts } from '$lib/utils/posts';

const siteUrl = 'https://growingme.co';

export const GET: RequestHandler = async () => {
	const posts = getAllPosts();

	const staticPages = ['', '/articles', '/about', '/podcast', '/wildbloom'];

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages
	.map(
		(path) => `  <url>
    <loc>${siteUrl}${path}</loc>
    <changefreq>${path === '' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${path === '' ? '1.0' : '0.8'}</priority>
  </url>`
	)
	.join('\n')}
${posts
	.map(
		(post) => `  <url>
    <loc>${siteUrl}/articles/${post.slug}</loc>
    <lastmod>${new Date(post.date).toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600'
		}
	});
};
