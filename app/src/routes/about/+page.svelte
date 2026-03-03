<script lang="ts">
	import ImageWithBorder from '$lib/components/shared/ImageWithBorder.svelte';
	import selfie from '$lib/assets/selfie1.jpg';
	import hiking from '$lib/assets/hiking.jpg';
	import bug from '$lib/assets/ladybug.svg'
	import SectionHeading from '$lib/components/shared/SectionHeading.svelte';
	import SEO from '$lib/components/shared/SEO.svelte';
</script>

<SEO
	title="About"
	description="Meet the person behind Growing Me — a software engineer sharing stories about navigating the tech industry, ADHD, being a woman in STEM, and career growth."
/>

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
					Who am I? That is the question that often arises at different junctures of our
					lives. It emerges when we contemplate switching careers, when we strive to find our true
					calling, or when we realize the mold we were given doesn't quite fit. Perhaps we find ourselves 
					molding our identity based on influences in our social circles, media, or even the geographical 
					soil we grow in.
				</p>

				<p>
					As for me, I am a self-proclaimed "weirdo" who struggles to remain content in a single lane
					for too long. I have embarked on numerous paths—culinary arts, software engineering, sales, business—
					only to find myself growing restless and yearning for fresh, exhilarating experiences. 
					I used to see this as a shortcoming. Now, I see it as my ecosystem.
				</p>

				<p>
					Think of my career path less like a ladder and more like a wild vine—twisting, turning, 
					and occasionally tangling before finding the light. Those detours through sales, kitchens, 
					and boardrooms weren't mistakes; they were the nutrients I needed to eventually root myself 
					in technology. It was a messy process, but it brought me exactly where I needed to be.
				</p>
			</div>
		</div>
	</div>

	<div class="grid gap-12 md:grid-cols-2 md:items-start">
		<!-- Content -->
		<div>
			<div class="mt-8 space-y-6 text-gray-600 leading-relaxed dark:text-gray-400">
				<h2 class="font-heading text-2xl font-bold text-gray-900 dark:text-gray-100 !mt-10">
					The Host
				</h2>

				<p>
						I'm a software engineer with a past life in sales and kitchens. Through
						<strong>Growing Me</strong>, I explore the intersection of navigating the tech industry, 
						thriving with ADHD/AuDHD, and being a woman in STEM. But this isn't just about career 
						ladders; it's about personal evolution. I write for non-linear thinkers and career-pivoters 
						who want to grow professionally and personally without sacrificing their authenticity. 
						Whether you're in tech or somewhere entirely different, I'm here to help you truly be 
						yourself in your career and find belonging wherever you land.
				</p>
				
				<p class="italic">
    			(Full disclosure: My four cats serve as impromptu code reviewers and blog editors. They are surprisingly harsh critics.)
				</p>

				<h2 class="font-heading text-2xl font-bold text-gray-900 dark:text-gray-100 !mt-10">
					Why "Growing Me"?
				</h2>
				<p>
					Because growth is rarely a straight line; it's a garden. Like a seed, we all start somewhere small. 
					Sometimes the soil is poor, sometimes the weather is harsh, and sometimes you realize you were 
					planted in the wrong pot entirely.
				</p>

				<p>
					With the right nurturing, patience, and determination, we can blossom into something extraordinary.
					I learned to sell myself before I learned to code, and I've realized that your worth isn't defined 
					by a degree, but by your willingness to cultivate your own potential. This platform is my garden 
					&mdash; and I'm inviting you to grow alongside me.
				</p>

				<p>
					One piece of advice I offer to anyone willing to listen: Never give up on what you want in life. 
					Often, the only thing standing in your way is the belief that you don't belong there. 
					You do. Now, let's get to work.
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
