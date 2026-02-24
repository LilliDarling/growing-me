<script lang="ts">
	import { Play } from 'lucide-svelte';

	let {
		title,
		description,
		date
	}: {
		title: string;
		description: string;
		date: string;
	} = $props();
</script>

<div
	class="flex gap-5 rounded-xl bg-white p-5 shadow-sm transition-all hover:shadow-md dark:bg-surface-dark-alt"
>
	<!-- Play button icon -->
	<div
		class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-sage-100 dark:bg-sage-800"
	>
		<Play size={20} class="text-brand dark:text-sage-300" />
	</div>

	<!-- Content -->
	<div>
		<h3 class="font-heading text-lg font-semibold text-gray-900 dark:text-gray-100">
			{title}
		</h3>
		<p class="mt-1 text-sm text-gray-500 dark:text-gray-500">{date}</p>
		<p class="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
			{description}
		</p>
	</div>
</div>
