<script lang="ts">
	import './app.css';
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="flex min-h-screen flex-col">
	<Navbar />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>

