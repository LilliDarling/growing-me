<script lang="ts">
	import ImageWithBorder from '$lib/components/shared/ImageWithBorder.svelte';
	import selfie from '$lib/assets/selfie1.jpg';
	import hiking from '$lib/assets/hiking.jpg';
	import bug from '$lib/assets/ladybug.svg'
	import SectionHeading from '$lib/components/shared/SectionHeading.svelte';
</script>

<svelte:head>
	<title>About - Growing Me</title>
	<meta name="description" content="Learn about the person behind Growing Me." />
</svelte:head>

<div class="mx-auto max-w-6xl px-6 py-16">
	<div class="flex justify-center mb-9">
		<SectionHeading title="About Me" />
	</div>

	<div class="grid gap-12 md:grid-cols-2 md:items-start">
		<!-- Photo -->
		<div class="mx-auto max-w-xs md:max-w-sm pl-4 mt-4 pt-4 pr-4 md:mt-8 md:pt-8 md:pr-0">
			<ImageWithBorder src={selfie} alt="About me" />
		</div>

		<!-- Content -->
		<div>
			<div class="mt-8 space-y-6 text-gray-600 leading-relaxed dark:text-gray-400">
				<p>
					Who am I? That is the question that often arises within us at different junctures of our
					lives. It emerges when we contemplate switching careers or when we strive to find our true
					calling. Perhaps we even find ourselves molding our identity based on the influences we
					encounter in our social circles or through pervasive media exposure. Our sense of self can
					also be shaped by our geographical location, age, and personal identification.
				</p>

				<p>
					As for me, I am an eccentric individual who struggles to remain content in a single career
					for an extended period. I have embarked on numerous paths, only to find myself growing
					restless and yearning for fresh and exhilarating experiences.
				</p>

				<h2 class="font-heading text-2xl font-bold text-gray-900 dark:text-gray-100 !mt-10">
					The Host
				</h2>

				<p>
					I'm a software engineer with a passion for sharing knowledge and experiences. Through
					Growing Me, I explore topics like navigating the tech industry, working with ADHD/AuDHD,
					being a woman in STEM, and practical career tips for anyone looking to grow professionally
					and personally.
				</p>
			</div>
		</div>
	</div>

	<div class="grid gap-12 md:grid-cols-2 md:items-start">
		<!-- Content -->
		<div>
			<div class="mt-8 space-y-6 text-gray-600 leading-relaxed dark:text-gray-400">
				<h2 class="font-heading text-2xl font-bold text-gray-900 dark:text-gray-100 !mt-10">
					Why "Growing Me"?
				</h2>
				<p>
					Who am I? That is the question that often arises within us at different junctures of our
					lives. It emerges when we contemplate switching careers or when we strive to find our true
					calling. Perhaps we even find ourselves molding our identity based on the influences we
					encounter in our social circles or through pervasive media exposure. Our sense of self can
					also be shaped by our geographical location, age, and personal identification.
				</p>

				<p>
					As for me, I am an eccentric individual who struggles to remain content in a single career
					for an extended period. I have embarked on numerous paths, only to find myself growing
					restless and yearning for fresh and exhilarating experiences.
				</p>

				<h2 class="font-heading text-2xl font-bold text-gray-900 dark:text-gray-100 !mt-10">
					The Host
				</h2>

				<p>
					I'm a software engineer with a passion for sharing knowledge and experiences. Through
					Growing Me, I explore topics like navigating the tech industry, working with ADHD/AuDHD,
					being a woman in STEM, and practical career tips for anyone looking to grow professionally
					and personally.
				</p>

				<h2 class="font-heading text-2xl font-bold text-gray-900 dark:text-gray-100 !mt-10">
					Why &ldquo;Growing Me&rdquo;?
				</h2>

				<p>
					Because growth is a continuous process. Like a seed, we all start somewhere small. With the
					right nurturing, patience, and determination, we can blossom into something extraordinary.
					This platform is my garden &mdash; and I'm inviting you to grow alongside me.
				</p>
			</div>
		</div>
		
		<div class="mx-auto max-w-xs md:max-w-sm pl-4 mt-4 pt-4 pr-4 md:mt-8 md:pt-8 md:pr-0">
			<ImageWithBorder src={hiking} alt="About me" />
		</div>
	</div>
</div>
<div class="mt-6 py-8 bg-sage-300">
	<div class="relative mx-auto max-w-7xl px-6">
		<img src={bug} alt="" class="absolute -top-22 md:-top-30 w-24 md:w-[175px] md:-left-6 rotate-70">
		<blockquote>
			<p class="font-accent text-center text-3xl leading-relaxed text-gray-800 md:text-5xl">
				"There are far better things ahead than any we leave behind"
			</p>
			<footer class="text-right mr-6">
				<cite class="text-3xl font-accent text-sage-600 md:text-5xl">
					~ C.S. Lewis
				</cite>
			</footer>
		</blockquote>
	</div>
</div>
