<script lang="ts">
	import ImageWithBorder from '$lib/components/shared/ImageWithBorder.svelte';
</script>

<svelte:head>
	<title>About - Growing Me</title>
	<meta name="description" content="Learn about the person behind Growing Me." />
</svelte:head>

<div class="mx-auto max-w-6xl px-6 py-16">
	<div class="grid gap-12 md:grid-cols-2 md:items-start">
		<!-- Photo -->
		<div class="mx-auto w-full max-w-md pl-4 pt-4">
			<ImageWithBorder src="/images/about-photo.jpg" alt="About me" />
		</div>

		<!-- Content -->
		<div>
			<h1 class="font-heading text-4xl font-bold text-gray-900 dark:text-gray-100">About Me</h1>

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
	</div>
</div>
