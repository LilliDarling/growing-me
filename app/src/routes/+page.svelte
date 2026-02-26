<script lang="ts">
	import Hero from '$lib/components/home/Hero.svelte';
	import AboutSnippet from '$lib/components/home/AboutSnippet.svelte';
	import FeaturedPosts from '$lib/components/home/FeaturedPosts.svelte';
	import QuoteSection from '$lib/components/home/QuoteSection.svelte';
	import GallerySection from '$lib/components/home/GallerySection.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Growing Me - Embrace The Journey</title>
	<meta
		name="description"
		content="Cultivating the existence I only ever dreamed of having in my career. Articles about software engineering, women in STEM, ADHD, and career growth."
	/>
</svelte:head>

<Hero />
<FeaturedPosts posts={data.featuredPosts} />
<QuoteSection />
<AboutSnippet />
<GallerySection />
