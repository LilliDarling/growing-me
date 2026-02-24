<script lang="ts">
	import heartSvg from '$lib/assets/heart.svg?raw';

	let { title }: { title: string } = $props();
</script>

<div class="relative mb-5 inline-block">
	<h2 class="relative font-heading text-4xl font-semibold text-gray-900 dark:text-gray-100">
		{title}
	</h2>
	<div class="absolute -bottom-11 -left-26" style="width: 345px;">
		{@html heartSvg}
	</div>
</div>
