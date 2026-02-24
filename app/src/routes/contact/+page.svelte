<script lang="ts">
	import { Mail, MapPin } from 'lucide-svelte';
	import SocialLinks from '$lib/components/shared/SocialLinks.svelte';
</script>

<svelte:head>
	<title>Contact - Growing Me</title>
	<meta name="description" content="Get in touch with Growing Me." />
</svelte:head>

<div class="mx-auto max-w-4xl px-6 py-16">
	<div class="text-center">
		<h1 class="font-heading text-4xl font-bold text-gray-900 dark:text-gray-100">Get in Touch</h1>
		<p class="mx-auto mt-4 max-w-xl text-gray-600 dark:text-gray-400">
			Have a question, collaboration idea, or just want to say hello? I'd love to hear from you.
		</p>
	</div>

	<div class="mt-12 grid gap-8 md:grid-cols-2">
		<!-- Contact info -->
		<div class="space-y-6">
			<div class="flex items-start gap-4">
				<div
					class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage-100 dark:bg-sage-800"
				>
					<Mail size={18} class="text-brand dark:text-sage-300" />
				</div>
				<div>
					<h3 class="font-medium text-gray-900 dark:text-gray-100">Email</h3>
					<p class="mt-1 text-sm text-gray-600 dark:text-gray-400">hello@growingme.com</p>
				</div>
			</div>

			<div class="flex items-start gap-4">
				<div
					class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage-100 dark:bg-sage-800"
				>
					<MapPin size={18} class="text-brand dark:text-sage-300" />
				</div>
				<div>
					<h3 class="font-medium text-gray-900 dark:text-gray-100">Location</h3>
					<p class="mt-1 text-sm text-gray-600 dark:text-gray-400">Remote / Everywhere</p>
				</div>
			</div>

			<div class="pt-4">
				<h3 class="mb-3 font-medium text-gray-900 dark:text-gray-100">Follow Along</h3>
				<SocialLinks size={22} />
			</div>
		</div>

		<!-- Contact form -->
		<form class="space-y-4">
			<div>
				<label
					for="name"
					class="block text-sm font-medium text-gray-700 dark:text-gray-300"
				>
					Name
				</label>
				<input
					id="name"
					type="text"
					class="mt-1 w-full rounded-lg border border-sage-300 bg-white px-4 py-2.5 text-sm text-gray-900 focus:border-brand focus:outline-none dark:border-sage-600 dark:bg-surface-dark-alt dark:text-gray-100"
				/>
			</div>
			<div>
				<label
					for="email"
					class="block text-sm font-medium text-gray-700 dark:text-gray-300"
				>
					Email
				</label>
				<input
					id="email"
					type="email"
					class="mt-1 w-full rounded-lg border border-sage-300 bg-white px-4 py-2.5 text-sm text-gray-900 focus:border-brand focus:outline-none dark:border-sage-600 dark:bg-surface-dark-alt dark:text-gray-100"
				/>
			</div>
			<div>
				<label
					for="message"
					class="block text-sm font-medium text-gray-700 dark:text-gray-300"
				>
					Message
				</label>
				<textarea
					id="message"
					rows="4"
					class="mt-1 w-full rounded-lg border border-sage-300 bg-white px-4 py-2.5 text-sm text-gray-900 focus:border-brand focus:outline-none dark:border-sage-600 dark:bg-surface-dark-alt dark:text-gray-100"
				></textarea>
			</div>
			<button
				type="submit"
				class="w-full rounded-lg bg-brand px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-light"
			>
				Send Message
			</button>
		</form>
	</div>
</div>
