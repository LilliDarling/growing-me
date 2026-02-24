<section class="bg-surface-light-alt py-20 dark:bg-surface-dark-alt">
	<div class="mx-auto max-w-6xl px-6">
		<h2 class="text-center font-heading text-3xl font-bold text-gray-900 dark:text-gray-100">
			Gallery
		</h2>

		<div class="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
			{#each Array(8) as _, i}
				<div
					class="aspect-square overflow-hidden rounded-lg bg-sage-100 dark:bg-sage-800"
				>
					<div
						class="flex h-full w-full items-center justify-center text-sm text-sage-400 dark:text-sage-600"
					>
						Photo {i + 1}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
