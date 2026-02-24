<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		href = '',
		variant = 'primary',
		children
	}: {
		href?: string;
		variant?: 'primary' | 'secondary';
		children: Snippet;
	} = $props();

	const baseClasses =
		'inline-flex items-center justify-center rounded-full px-4 py-1 text-sm font-semibold transition-all duration-200';

	const variantClasses = {
		primary:
			'border-2 border-blue-800 bg-blue-300 hover:bg-blue-800 hover:text-white',
		secondary:
			'bg-blue-800 text-white hover:bg-blue-300 hover:text-black'
	};
</script>

{#if href}
	<a {href} class="{baseClasses} {variantClasses[variant]}">
		{@render children()}
	</a>
{:else}
	<button class="{baseClasses} {variantClasses[variant]}">
		{@render children()}
	</button>
{/if}
