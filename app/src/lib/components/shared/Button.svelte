<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		href = '',
		variant = 'primary',
		size = 'default',
		children
	}: {
		href?: string;
		variant?: 'primary' | 'secondary';
		size?: 'default' | 'lg';
		children: Snippet;
	} = $props();

	const baseClasses =
		'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200';

	const sizeClasses = {
		default: 'px-4 py-1 text-sm',
		lg: 'px-8 py-3 text-lg'
	};

	const variantClasses = {
		primary:
			'border-2 border-blue-800 bg-blue-300 hover:bg-blue-800 hover:text-white dark:text-black',
		secondary:
			'bg-blue-800 text-white hover:bg-blue-300 hover:text-black dark:text-black'
	};
</script>

{#if href}
	<a {href} class="{baseClasses} {sizeClasses[size]} {variantClasses[variant]}">
		{@render children()}
	</a>
{:else}
	<button class="{baseClasses} {sizeClasses[size]} {variantClasses[variant]}">
		{@render children()}
	</button>
{/if}
