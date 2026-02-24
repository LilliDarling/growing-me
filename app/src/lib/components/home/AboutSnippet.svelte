<script lang="ts">
	import ImageWithBorder from '../shared/ImageWithBorder.svelte';
	import Button from '../shared/Button.svelte';
	import selfie from '$lib/assets/selfie1.jpg';
</script>

<section class="bg-surface-light-alt py-20 dark:bg-surface-dark">
	<div class="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
		<!-- Photo -->
		<div class="mx-auto w-full max-w-sm pl-4 pt-4">
			<ImageWithBorder src={selfie} alt="About me" />
		</div>

		<!-- Text -->
		<div>
			<h2 class="font-heading text-3xl font-bold text-gray-900 md:text-4xl dark:text-gray-100">
				About Me
			</h2>
			<p class="mt-6 leading-relaxed text-gray-600 dark:text-gray-400">
				Who am I? That is the question that often arises within us at different junctures of our
				lives. It emerges when we contemplate switching careers or when we strive to find our true
				calling. Perhaps we even find ourselves molding our identity based on the influences we
				encounter in our social circles or through pervasive media exposure.
			</p>
			<p class="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
				As for me, I am an eccentric individual who struggles to remain content in a single career
				for an extended period. I have embarked on numerous paths, only to find myself growing
				restless and yearning for fresh and exhilarating experiences.
			</p>
			<div class="mt-8">
				<Button href="/about" variant="primary">Read More</Button>
			</div>
		</div>
	</div>
</section>
