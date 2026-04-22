<script lang="ts">
	import SEO from '$lib/components/shared/SEO.svelte';
	import CognitiveLoadWorksheet from '$lib/components/shared/CognitiveLoadWorksheet.svelte';
	import WorksheetPdfSignup from '$lib/components/shared/WorksheetPdfSignup.svelte';
</script>

<SEO
	title="Cognitive Load Tier Worksheet"
	description="Sort every task in your head by the cognitive load it actually requires — Autopilot, Semi-Active, or Full Focus. A free interactive worksheet from Growing Me."
/>

<div class="mx-auto max-w-4xl px-6 py-16">
	<header class="mb-8">
		<a
			href="/articles/seasons-of-silence"
			class="text-sm font-medium text-brand transition-colors hover:text-brand-light dark:text-sage-300 dark:hover:text-sage-200"
		>
			&larr; Read the article
		</a>
		<h1
			class="mt-4 font-heading text-4xl font-bold text-gray-900 md:text-5xl dark:text-gray-100"
		>
			Cognitive Load Tier Worksheet
		</h1>
		<p class="mt-4 text-gray-600 dark:text-gray-400">
			A brain-dump tool for slow seasons. Write down everything sitting in your head, then sort
			each item by how much mental energy it actually needs — not by how urgent it feels.
		</p>
		<p class="mt-3 text-sm text-gray-500 dark:text-gray-500">
			Private by design: your list stays on your device. Nothing you type is sent to our servers
			— it's stored only in your browser's local storage. Heads up: anyone who uses this browser
			on this device can see it.
		</p>
	</header>

	<WorksheetPdfSignup
		source="cognitive-load-worksheet"
		heading="Want the printable version?"
		blurb="Drop your email and we'll send you a clean, printable PDF of the worksheet — with tier columns and room to write by hand."
	/>

	<div class="mt-12">
		<CognitiveLoadWorksheet />
	</div>
</div>
