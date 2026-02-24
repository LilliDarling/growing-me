<script lang="ts">
	import { ShoppingBag } from 'lucide-svelte';
</script>

<section class="bg-surface-light-alt py-20 dark:bg-surface-dark-alt">
	<div class="mx-auto max-w-4xl px-6 text-center">
		<div class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-sage-100 dark:bg-sage-800">
			<ShoppingBag size={28} class="text-brand dark:text-sage-300" />
		</div>
		<h2 class="font-heading text-3xl font-bold text-gray-900 dark:text-gray-100">
			Coming Soon: The Store
		</h2>
		<p class="mx-auto mt-4 max-w-xl text-gray-600 dark:text-gray-400">
			Curated resources, workbooks, and tools to help you on your journey. Stay tuned for
			something special.
		</p>
	</div>
</section>
