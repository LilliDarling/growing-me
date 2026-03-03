<script lang="ts">
	import ImageWithBorder from '../shared/ImageWithBorder.svelte';
	import Button from '../shared/Button.svelte';
	import profile from '$lib/assets/profile.png';
</script>

<section class="bg-surface-light-alt py-20 dark:bg-surface-dark">
	<div class="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
		<!-- Photo -->
		<div class="mx-auto w-full max-w-sm pl-4 pt-4">
			<ImageWithBorder src={profile} alt="About me" />
		</div>

		<!-- Text -->
		<div>
			<h2 class="font-heading text-3xl font-bold text-gray-900 md:text-4xl dark:text-gray-100">
				About Me
			</h2>
			<p class="mt-6 leading-relaxed text-gray-600 dark:text-gray-400">
				Welcome to <strong>Growing Me</strong>, a sanctuary for the wild vines of career and 
				personal development. I'm a software engineer who embraced my inner "weirdo" to find 
				success beyond the traditional ladder. Here, we celebrate the non-linear paths, the 
				neurodivergent minds, and the quiet courage it takes to truly be yourself in a world 
				that often asks you to fit in.
			</p>
			<p class="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
				Whether you're navigating STEM, pivoting careers, or finding belonging wherever you 
				land, this garden is for you. We explore practical tips for professional growth without 
				losing your soul, alongside the personal work needed to thrive. Let's cultivate your 
				potential together and prove that you can blossom wherever you're planted.
			</p>
			<div class="mt-8">
				<Button href="/about" variant="primary">Read More</Button>
			</div>
		</div>
	</div>
</section>
