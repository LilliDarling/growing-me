<script lang="ts">
	import SectionHeading from "../shared/SectionHeading.svelte";

	const cards = [
		{
			quote: "It’s no use going back to yesterday, because I was a different person then.",
			author: 'Lewis Carroll',
			icon: 'mushroom',
			rotation: '-rotate-2'
		},
		{
			quote: "Life is not easy for any of us. But what of that? We must have perseverance and above all confidence in ourselves. We must believe that we are gifted for something and that this thing must be attained.",
			author: 'Marie Curie',
			icon: 'key',
			rotation: 'rotate-1'
		},
		{
			quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.",
			author: 'Steve Jobs',
			icon: 'teacup',
			rotation: '-rotate-1'
		},
		{
			quote: "What lies behind you and what lies in front of you, pales in comparison to what lies inside of you.",
			author: 'Ralph Waldo Emerson',
			icon: 'door',
			rotation: 'rotate-2'
		}
	];
</script>

<section class="relative overflow-hidden py-20">
	<!-- Swirling vine lines -->
	<svg class="absolute inset-0 h-full w-full opacity-10 dark:opacity-[0.08]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 800 400">
		<path d="M0 200 Q100 100 200 200 T400 200 T600 200 T800 200" fill="none" stroke="currentColor" stroke-width="2" class="text-brand"/>
		<path d="M0 220 Q150 120 300 220 T600 220 T800 220" fill="none" stroke="currentColor" stroke-width="1.5" class="text-sage-500"/>
	</svg>

	<!-- Scattered leaves -->
	<svg class="absolute top-8 left-6 h-12 w-12 text-sage-300 dark:text-sage-700 -rotate-45 opacity-40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
		<path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/>
	</svg>
	<svg class="absolute top-16 right-12 h-10 w-10 text-brand/20 dark:text-sage-600/30 rotate-12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
		<path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/>
	</svg>
	<svg class="absolute bottom-12 left-1/4 h-8 w-8 text-sage-300/50 dark:text-sage-700/40 rotate-[70deg]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
		<path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/>
	</svg>
	<svg class="absolute bottom-6 right-1/5 h-14 w-14 text-sage-200 dark:text-sage-700 -rotate-[30deg] opacity-30" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
		<path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/>
	</svg>
	<svg class="absolute top-1/3 left-12 h-9 w-9 text-brand/15 dark:text-sage-600/25 rotate-[110deg]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
		<path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/>
	</svg>
	<svg class="absolute top-2/3 right-8 h-11 w-11 text-sage-300/40 dark:text-sage-600/30 -rotate-[60deg]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
		<path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/>
	</svg>
	<svg class="absolute bottom-20 left-1/2 h-7 w-7 text-sage-400/30 dark:text-sage-700/35 rotate-[150deg]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
		<path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/>
	</svg>

	<div class="relative mx-auto max-w-5xl px-6">
		<div class="flex justify-center pb-2">
			<SectionHeading title="Down the Rabbit Hole" />
		</div>
		<p class="mx-auto mb-14 pl-30 pt-2 md:pl-50 max-w-lg text-center font-accent text-3xl text-sage-600 dark:text-sage-400">
			Wisdom for the growing soul
		</p>

		<div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
			{#each cards as card, i}
				<div
					class="group relative {card.rotation} transition-transform duration-300 hover:rotate-0"
				>
					<!-- Card -->
					<div class="relative overflow-hidden rounded-xl border border-sage-200 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md dark:border-sage-700 dark:bg-surface-dark-alt">
						<!-- Decorative corner flourish -->
						<svg class="absolute -right-2 -top-2 h-16 w-16 text-sage-200 dark:text-sage-700" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M64 0 Q48 16 48 32 Q48 48 32 48 Q16 48 0 64" stroke="currentColor" stroke-width="1.5" fill="none"/>
							<path d="M64 16 Q52 28 52 36 Q52 44 44 48" stroke="currentColor" stroke-width="1" fill="none" opacity="0.5"/>
						</svg>

						<!-- Icon -->
						<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sage-50 text-brand dark:bg-sage-800 dark:text-sage-300">
							{#if card.icon === 'mushroom'}
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
									<path d="M4 13c0-5.5 3.5-10 8-10s8 4.5 8 10"/>
									<path d="M4 13h16"/>
									<path d="M10 13v7a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-7"/>
									<circle cx="9" cy="8" r="1.5" fill="currentColor" opacity="0.3"/>
									<circle cx="14" cy="6" r="1" fill="currentColor" opacity="0.3"/>
								</svg>
							{:else if card.icon === 'key'}
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
									<circle cx="8" cy="15" r="4"/>
									<path d="M11.3 11.7 20 3"/>
									<path d="M17 6l3-3"/>
									<path d="M15 8l2-2"/>
								</svg>
							{:else if card.icon === 'teacup'}
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
									<path d="M17 8h1a4 4 0 1 1 0 8h-1"/>
									<path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/>
									<line x1="6" y1="2" x2="6" y2="4"/>
									<line x1="10" y1="2" x2="10" y2="4"/>
									<line x1="14" y1="2" x2="14" y2="4"/>
								</svg>
							{:else if card.icon === 'door'}
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
									<path d="M13 4h3a2 2 0 0 1 2 2v14"/>
									<path d="M2 20h3"/>
									<path d="M13 20h9"/>
									<path d="M10 12v.01"/>
									<path d="M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z"/>
								</svg>
							{/if}
						</div>

						<!-- Quote -->
						<blockquote class="relative">
							<p class="font-serif font-semibold text-base leading-relaxed text-gray-800 dark:text-gray-300">
								"{card.quote}"
							</p>
							<footer class="mt-3">
								<cite class="font-accent text-lg text-sage-700 not-italic dark:text-sage-400">
									~ {card.author}
								</cite>
							</footer>
						</blockquote>

						<!-- Bottom flourish line -->
						<div class="mt-4 h-px w-12 bg-gradient-to-r from-brand/40 to-transparent dark:from-sage-500/40"></div>
					</div>
				</div>
			{/each}
		</div>

	</div>
</section>
