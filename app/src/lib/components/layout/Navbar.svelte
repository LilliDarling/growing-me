<script lang="ts">
	import { page } from '$app/state';
	import { Search, Menu, X } from 'lucide-svelte';
	import SocialLinks from '$lib/components/shared/SocialLinks.svelte';
	import ThemeToggle from '$lib/components/shared/ThemeToggle.svelte';
	import leaf from '$lib/assets/logo-leaf.png'

	let scrolled = $state(false);
	let mobileOpen = $state(false);
	let searchOpen = $state(false);
	let searchQuery = $state('');

	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/articles', label: 'Articles' },
		{ href: '/about', label: 'About' },
		{ href: '/contact', label: 'Contact' }
	];

	function isActive(href: string, pathname: string): boolean {
		if (href === '/') return pathname === '/';
		return pathname.startsWith(href);
	}

	$effect(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 20;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<header
	class="sticky top-0 z-50 transition-all duration-300 {scrolled
		? 'bg-white/75 shadow-sm backdrop-blur-sm dark:bg-surface-dark/60'
		: 'bg-white/80 backdrop-blur-sm dark:bg-surface-dark/60'}"
>
	<!-- Top row: Logo + Social -->
	<div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
		<a href="/" class="flex items-center gap-3">
			<img src="{leaf}" alt="Growing Me logo" class="h-10 w-10 rounded-full" />
			<span class="font-heading text-xl font-semibold"
				>Growing Me</span
			>
		</a>

		<div class="flex items-center gap-4">
			<div class="hidden md:block">
				<SocialLinks size={18} />
			</div>
			<ThemeToggle />
			<!-- Mobile hamburger -->
			<button
				class="rounded-lg p-2 md:hidden"
				onclick={() => (mobileOpen = !mobileOpen)}
				aria-label="Toggle menu"
			>
				{#if mobileOpen}
					<X size={22} />
				{:else}
					<Menu size={22} />
				{/if}
			</button>
		</div>
	</div>

	<!-- Green divider -->
	<div class="mx-auto flex max-w-7xl px-6 h-[2px] bg-brand"></div>

	<!-- Bottom row: Nav links + Search (desktop) -->
	<nav class="hidden md:block">
		<div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
			<ul class="flex items-center gap-8">
				{#each navLinks as link}
					<li>
						<a
							href={link.href}
							class="text-sm font-medium transition-colors {isActive(
								link.href,
								page.url.pathname
							)
								? 'text-brand dark:text-sage-300'
								: 'hover:text-brand dark:hover:text-sage-300'}"
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>

			<div class="relative">
				<Search
					size={16}
					class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
				/>
				<input
					type="text"
					placeholder="Search"
					bind:value={searchQuery}
					class="w-48 rounded-full border border-sage-300 bg-transparent py-1.5 pl-9 pr-4 text-sm text-gray-700 placeholder:text-gray-400 focus:border-brand focus:outline-none dark:border-sage-600 dark:text-gray-300 dark:placeholder:text-gray-500"
				/>
			</div>
		</div>
	</nav>

	<!-- Mobile menu drawer -->
	{#if mobileOpen}
		<nav
			class="border-t border-sage-200 bg-white px-6 py-4 md:hidden dark:border-sage-700 dark:bg-surface-dark"
		>
			<ul class="flex flex-col gap-3">
				{#each navLinks as link}
					<li>
						<a
							href={link.href}
							onclick={() => (mobileOpen = false)}
							class="block rounded-lg px-3 py-2 text-sm font-medium transition-colors {isActive(
								link.href,
								page.url.pathname
							)
								? 'bg-sage-50 text-brand dark:bg-sage-900 dark:text-sage-300'
								: 'text-gray-600 hover:bg-sage-50 dark:text-gray-400 dark:hover:bg-sage-900'}"
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>

			<div class="mt-4 flex items-center gap-4 border-t border-sage-200 pt-4 dark:border-sage-700">
				<SocialLinks size={18} />
			</div>

			<!-- Mobile search -->
			<div class="relative mt-4">
				<Search
					size={16}
					class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
				/>
				<input
					type="text"
					placeholder="Search"
					bind:value={searchQuery}
					class="w-full rounded-full border border-sage-300 bg-transparent py-2 pl-9 pr-4 text-sm text-gray-700 placeholder:text-gray-400 focus:border-brand focus:outline-none dark:border-sage-600 dark:text-gray-300 dark:placeholder:text-gray-500"
				/>
			</div>
		</nav>
	{/if}
</header>
