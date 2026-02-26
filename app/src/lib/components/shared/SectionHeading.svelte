<script lang="ts">
	import heartSvg from '$lib/assets/heart.svg?raw';

	let { title }: { title: string } = $props();
</script>

<div class="relative ml-8 inline-block md:ml-0 md:mb-5">
	<h2 class="relative font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-gray-100">
		{title}
	</h2>
	<div class="absolute -bottom-6 -left-15 w-[200px] sm:-bottom-10 sm:-left-10 sm:w-[200px] md:-bottom-11 md:-left-26 md:w-[345px]">
		{@html heartSvg}
	</div>
</div>
