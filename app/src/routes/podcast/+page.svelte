<script lang="ts">
	import PodcastCard from '$lib/components/podcast/PodcastCard.svelte';
	import { Mic } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Podcast - Growing Me</title>
	<meta name="description" content="Listen to the Growing Me podcast." />
</svelte:head>

<div class="mx-auto max-w-4xl px-6 py-16">
	<div class="text-center">
		<div
			class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-sage-100 dark:bg-sage-800"
		>
			<Mic size={28} class="text-brand dark:text-sage-300" />
		</div>
		<h1 class="font-heading text-4xl font-bold text-gray-900 dark:text-gray-100">Podcast</h1>
		<p class="mx-auto mt-4 max-w-xl text-gray-600 dark:text-gray-400">
			Conversations about growth, career, and everything in between.
		</p>
	</div>

	<div class="mt-12 space-y-6">
		<PodcastCard
			title="Episode 1: Starting the Journey"
			description="In the first episode, we explore what it means to start over and embrace change in your career."
			date="Coming Soon"
		/>
		<PodcastCard
			title="Episode 2: Women in Tech"
			description="A candid conversation about the challenges and triumphs of being a woman in the tech industry."
			date="Coming Soon"
		/>
		<PodcastCard
			title="Episode 3: ADHD as a Superpower"
			description="How understanding and embracing ADHD can transform your career and creativity."
			date="Coming Soon"
		/>
	</div>

	<div class="mt-12 text-center">
		<p class="text-sm text-gray-500 dark:text-gray-500">
			Stay tuned and subscribe for the latest!
		</p>
	</div>
</div>
