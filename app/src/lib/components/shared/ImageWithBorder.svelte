<script lang="ts">
	let {
		src,
		alt
	}: {
		src: string;
		alt: string;
	} = $props();
</script>

<div class="relative">
	<div
		class="absolute left-3 -top-3 h-full w-full rounded-lg bg-sage-300 blur-xs dark:bg-sage-700"
	></div>
	<img
		{src}
		{alt}
		loading="lazy"
		decoding="async"
		class="relative z-10 rounded-lg object-cover"
	/>
</div>
