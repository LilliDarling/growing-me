import type { RequestHandler } from './$types';
import { getAllPosts } from '$lib/utils/posts';

const siteUrl = 'https://growingme.co';
const siteName = 'Growing Me';
const siteDescription =
	'Articles about software engineering, women in STEM, ADHD, and career growth — cultivating the existence I only ever dreamed of having in my career.';

function imageMimeType(path: string): string {
	const ext = path.split('.').pop()?.toLowerCase() ?? '';
	if (ext === 'png') return 'image/png';
	if (ext === 'gif') return 'image/gif';
	if (ext === 'webp') return 'image/webp';
	if (ext === 'svg') return 'image/svg+xml';
	return 'image/jpeg';
}

function escapeXml(s: string): string {
	return s
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

export const GET: RequestHandler = async () => {
	const posts = getAllPosts();
	const lastBuildDate = new Date().toUTCString();
	const latestPubDate = posts[0] ? new Date(posts[0].date).toUTCString() : lastBuildDate;

	const items = posts
		.map((post) => {
			const url = `${siteUrl}/articles/${post.slug}`;
			const pubDate = new Date(post.date).toUTCString();
			const imageTag = post.image
				? `    <enclosure url="${escapeXml(post.image.startsWith('http') ? post.image : `${siteUrl}${post.image}`)}" type="${imageMimeType(post.image)}" />`
				: '';
			const categoryTag = post.category
				? `    <category>${escapeXml(post.category)}</category>`
				: '';

			return `  <item>
    <title>${escapeXml(post.title)}</title>
    <link>${url}</link>
    <guid isPermaLink="true">${url}</guid>
    <pubDate>${pubDate}</pubDate>
    <dc:creator>${escapeXml(post.author)}</dc:creator>
    <description>${escapeXml(post.description)}</description>
${[categoryTag, imageTag].filter(Boolean).join('\n')}
  </item>`;
		})
		.join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>${escapeXml(siteName)}</title>
  <link>${siteUrl}</link>
  <description>${escapeXml(siteDescription)}</description>
  <language>en-us</language>
  <lastBuildDate>${lastBuildDate}</lastBuildDate>
  <pubDate>${latestPubDate}</pubDate>
  <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
${items}
</channel>
</rss>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/rss+xml; charset=utf-8',
			'Cache-Control': 'max-age=3600'
		}
	});
};
