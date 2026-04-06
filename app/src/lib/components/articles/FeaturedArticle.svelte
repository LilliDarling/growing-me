<script lang="ts">
	import type { PostMeta } from '../../utils/posts';
	import { formatDate } from '../../utils/format-date';
	import bug from '$lib/assets/ladybug.svg';

	let { post }: { post: PostMeta } = $props();
</script>

<div class="relative w-full">
	<svg
		viewBox="0 0 500 200"
		preserveAspectRatio="none"
		class="absolute inset-0 w-full h-full z-0"
	>
		<path
			d="M0,50 C150,140 350,-50 500,60 L500,170 C350,40 150,250 0,160 Z"
			class="fill-sage-300"
		></path>
	</svg>

	<a href="/articles/{post.slug}" class="relative z-10 block mx-auto max-w-6xl px-6 py-10 md:px-12 md:py-14">
		<img
			src={bug}
			alt=""
			class="absolute top-4 right-8 z-20 w-18 rotate-180 md:right-48 md:top-12 md:w-32"
		/>

		<!-- Featured content with overlapping card -->
		<div class="relative z-10 mx-auto max-w-4xl">
			<!-- Image with stacked photo effect -->
			<div class="relative mx-auto w-full max-w-md md:max-w-lg md:mr-auto md:ml-0">
				<div class="relative z-10">
					{#if post.image}
						<img
							src={post.image}
							alt={post.title}
							decoding="async"
							class="aspect-[3/2] w-full rounded-xl object-cover shadow-lg"
						/>
					{:else}
						<div
							class="flex aspect-[3/2] w-full items-center justify-center rounded-xl bg-sage-100 text-sage-400 shadow-lg dark:bg-sage-800"
						>
							Featured
						</div>
					{/if}
				</div>
			</div>

			<!-- Content card overlapping bottom-right of image -->
			<div
				class="relative z-20 md:-mt-72 -mt-32 ml-auto w-full max-w-sm rounded-xl bg-blue-300/80 inset-shadow-sm inset-shadow-indigo-500/50 p-6 shadow-md backdrop-blur-sm md:max-w-lg md:p-8"
			>
				<span
					class="text-xs font-semibold uppercase tracking-widest text-brand dark:text-brand-light"
				>
					Featured Post
				</span>

				<h2
					class="mt-3 font-heading text-2xl font-bold text-gray-900 md:text-3xl dark:text-black"
				>
					{post.title}
				</h2>

				<p class="mt-2 text-sm text-gray-600 dark:text-black">
					{formatDate(post.date)}
					{#if post.category}
						&bull; {post.category}
					{/if}
				</p>

				{#if post.description}
					<p class="mt-4 line-clamp-4 leading-relaxed text-gray-700 dark:text-black">
						{post.description}
					</p>
				{/if}
			</div>
		</div>
	</a>
</div>
