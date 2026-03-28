<script lang="ts">
	import SocialLinks from '../shared/SocialLinks.svelte';
	import EmailSubscribe from '$lib/components/shared/EmailSubscribe.svelte';
	import bug from '$lib/assets/ladybug.svg';
</script>

<footer class="bg-surface-light shadow-2xl shadow-sage-600 dark:bg-surface-dark dark:shadow-sage-200">
	<div class="mx-auto max-w-7xl px-6 py-4">
		<!-- Top section: Logo -->
		<div class="flex justify-between px-6 pb-2">
			<!-- Logo -->
			<a href="/" class="flex items-end">
				<img src={bug} alt="Growing Me logo" class="h-10 w-15" />
				<span class="font-heading text-xl font-semibold text-gray-900 dark:text-gray-100"
					>Growing Me</span
				>
			</a>
			<!-- Nav links -->
			<div class="flex items-end">
				<nav>
					<ul class="flex gap-5">
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
					</ul>
				</nav>
			</div>
		</div>

		<!-- Green divider -->
		<div class="mx-auto flex max-w-8xl px-6 my-2 mb-4 h-[2px] bg-brand"></div>

		<!-- Subscribe section -->
		<div class="flex justify-center pt-5">
			<EmailSubscribe />
		</div>

		<!-- Bottom: Social + Copyright -->
		<div
			class="mt-8 flex flex-col items-center gap-4 pt-2 dark:border-sage-700"
		>
			<SocialLinks size={18} />
			<div class="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-500 py-3">
				<p>&copy; {new Date().getFullYear()} Growing Me. All rights reserved.</p>
				<span class="text-gray-300 dark:text-sage-700">|</span>
				<a
					href="/wildbloom"
					class="text-gray-600 underline transition-colors hover:text-brand dark:text-gray-400 dark:hover:text-sage-300"
				>Wildbloom</a>
			</div>
		</div>
	</div>
</footer>
