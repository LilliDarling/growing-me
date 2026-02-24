<script lang="ts">
	import EmailSubscribe from '../shared/EmailSubscribe.svelte';
	import { BookOpen } from 'lucide-svelte';
</script>

<section class="bg-white py-20 dark:bg-surface-dark">
	<div class="mx-auto max-w-4xl px-6 text-center">
		<div class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-sage-100 dark:bg-sage-800">
			<BookOpen size={28} class="text-brand dark:text-sage-300" />
		</div>
		<h2 class="font-heading text-3xl font-bold text-gray-900 dark:text-gray-100">
			Journaling Prompts
		</h2>
		<p class="mx-auto mt-4 max-w-xl text-gray-600 dark:text-gray-400">
			Sign up for weekly journaling prompts to help you reflect, grow, and cultivate the life you
			dream of.
		</p>
		<div class="mt-8 flex justify-center">
			<EmailSubscribe />
		</div>
	</div>
</section>
