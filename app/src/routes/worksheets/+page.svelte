<script lang="ts">
	import SEO from '$lib/components/shared/SEO.svelte';

	const worksheets = [
		{
			slug: 'cognitive-load-tiers',
			title: 'Cognitive Load Tier Worksheet',
			blurb:
				'Sort every task in your head by how much mental energy it actually needs — Autopilot, Semi-Active, or Full Focus. Interactive on-screen version plus an optional printable PDF.',
			companionArticle: {
				href: '/articles/seasons-of-silence',
				label: 'Seasons of Silence'
			}
		}
	];
</script>

<SEO
	title="Worksheets"
	description="Free worksheets and tools from Growing Me for matching your work to your real capacity."
/>

<div class="mx-auto max-w-4xl px-6 py-16">
	<header class="mb-10">
		<h1 class="font-heading text-4xl font-bold text-gray-900 md:text-5xl dark:text-gray-100">
			Worksheets
		</h1>
		<p class="mt-4 text-gray-600 dark:text-gray-400">
			Free tools for working with your actual capacity — not an idealized version of it. Use them
			on-screen, or grab a printable copy to fill in by hand.
		</p>
	</header>

	<ul class="flex flex-col gap-4">
		{#each worksheets as sheet (sheet.slug)}
			<li
				class="rounded-3xl border border-sage-200 bg-white p-6 transition-colors hover:border-brand/50 sm:p-8 dark:border-sage-700 dark:bg-sage-900/40 dark:hover:border-sage-500"
			>
				<a href="/worksheets/{sheet.slug}" class="block">
					<h2
						class="font-heading text-2xl font-semibold text-gray-900 group-hover:text-brand sm:text-3xl dark:text-gray-100"
					>
						{sheet.title}
					</h2>
					<p class="mt-3 text-sm text-gray-600 dark:text-gray-400">{sheet.blurb}</p>
					<span
						class="mt-4 inline-block text-sm font-medium text-brand dark:text-sage-300"
					>
						Open the worksheet &rarr;
					</span>
				</a>
				{#if sheet.companionArticle}
					<p class="mt-3 text-xs text-gray-500 dark:text-gray-500">
						Based on the article:
						<a
							href={sheet.companionArticle.href}
							class="font-medium text-brand hover:underline dark:text-sage-300"
						>
							{sheet.companionArticle.label}
						</a>
					</p>
				{/if}
			</li>
		{/each}
	</ul>
</div>
