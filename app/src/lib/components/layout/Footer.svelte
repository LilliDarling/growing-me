<script lang="ts">
	import SocialLinks from '../shared/SocialLinks.svelte';
	import EmailSubscribe from '$lib/components/shared/EmailSubscribe.svelte';
	import logoLeaf from '$lib/assets/logo-leaf.png';
</script>

<footer class="bg-surface-light dark:bg-surface-dark">
	<div class="mx-auto max-w-7xl px-6 py-12">
		<!-- Top section: Logo -->
		<div class="flex justify-center">
			<!-- Logo -->
			<a href="/" class="flex gap-2 items-center">
				<img src={logoLeaf} alt="Growing Me logo" class="h-15 w-15" />
				<span class="font-heading text-xl font-semibold text-gray-900 dark:text-gray-100"
					>Growing Me</span
				>
			</a>
		</div>

		<!-- Green divider -->
		<div class="mx-auto flex max-w-8xl px-6 my-4 h-[2px] bg-brand"></div>

		<!-- Nav links -->
		<div class="flex justify-center py-2">
			<nav>
				<ul class="flex items-center gap-5">
					<li>
						<a
							href="/"
							class="text-sm text-gray-600 transition-colors hover:text-brand dark:text-gray-400 dark:hover:text-sage-300"
							>Home</a
						>
					</li>
					<li>
						<a
							href="/articles"
							class="text-sm text-gray-600 transition-colors hover:text-brand dark:text-gray-400 dark:hover:text-sage-300"
							>Articles</a
						>
					</li>
					<li>
						<a
							href="/about"
							class="text-sm text-gray-600 transition-colors hover:text-brand dark:text-gray-400 dark:hover:text-sage-300"
							>About</a
						>
					</li>
					<li>
						<a
							href="/contact"
							class="text-sm text-gray-600 transition-colors hover:text-brand dark:text-gray-400 dark:hover:text-sage-300"
							>Contact</a
						>
					</li>
				</ul>
			</nav>
		</div>

		<!-- Subscribe section -->
		<div class="flex justify-center pt-8">
			<EmailSubscribe />
		</div>

		<!-- Bottom: Social + Copyright -->
		<div
			class="mt-8 flex flex-col items-center gap-4 pt-4 dark:border-sage-700"
		>
			<SocialLinks size={18} />
			<p class="text-xs text-gray-500 dark:text-gray-500 py-3">
				&copy; {new Date().getFullYear()} Growing Me. All rights reserved.
			</p>
		</div>
	</div>
</footer>
