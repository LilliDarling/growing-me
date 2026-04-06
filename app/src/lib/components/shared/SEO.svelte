<script lang="ts">
	import { page } from '$app/state';

	let {
		title,
		description,
		image = '/selfie1.jpg',
		type = 'website',
		article
	}: {
		title: string;
		description: string;
		image?: string;
		type?: 'website' | 'article';
		article?: { author: string; date: string; category: string };
	} = $props();

	const siteName = 'Growing Me';
	const siteUrl = 'https://growingme.co';

	let fullTitle = $derived(title === siteName ? title : `${title} - ${siteName}`);
	let canonicalUrl = $derived(`${siteUrl}${page.url.pathname}`);
	let ogImage = $derived(image.startsWith('http') ? image : `${siteUrl}${image}`);

	let breadcrumbLd = $derived(
		article
			? JSON.stringify({
					'@context': 'https://schema.org',
					'@type': 'BreadcrumbList',
					itemListElement: [
						{
							'@type': 'ListItem',
							position: 1,
							name: 'Home',
							item: siteUrl
						},
						{
							'@type': 'ListItem',
							position: 2,
							name: 'Articles',
							item: `${siteUrl}/articles`
						},
						{
							'@type': 'ListItem',
							position: 3,
							name: title
						}
					]
				})
			: null
	);

	let jsonLd = $derived(
		article
			? JSON.stringify({
					'@context': 'https://schema.org',
					'@type': 'BlogPosting',
					headline: title,
					description,
					image: ogImage,
					url: canonicalUrl,
					datePublished: article.date,
					author: {
						'@type': 'Person',
						name: article.author
					},
					publisher: {
						'@type': 'Organization',
						name: siteName,
						url: siteUrl
					},
					articleSection: article.category
				})
			: JSON.stringify({
					'@context': 'https://schema.org',
					'@type': 'WebSite',
					name: siteName,
					url: siteUrl,
					description
				})
	);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonicalUrl} />

	<!-- Open Graph -->
	<meta property="og:type" content={type} />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:image" content={ogImage} />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />

	{#if article}
		<meta property="article:author" content={article.author} />
		<meta property="article:published_time" content={article.date} />
		<meta property="article:section" content={article.category} />
	{/if}

	<!-- Structured Data -->
	{@html `<script type="application/ld+json">${jsonLd}</script>`}
	{#if breadcrumbLd}
		{@html `<script type="application/ld+json">${breadcrumbLd}</script>`}
	{/if}
</svelte:head>
