<script lang="ts">
	import SEO from '$lib/components/shared/SEO.svelte';
	import clockIcon from '$lib/assets/clock.png';
</script>

<SEO
	title="Wildbloom"
	description="Wildbloom — energy-first daily planning tool. Organize your day around your energy levels, not rigid time blocks."
/>

<div class="wildbloom">
	<!-- Hero -->
	<section class="px-6 pt-24 pb-6 text-center">
		<div class="mx-auto max-w-3xl">
			<div class="mb-6 flex flex-col items-center gap-4">
				<img src={clockIcon} alt="Wildbloom icon" class="h-24 w-24 rounded-full md:h-32 md:w-32" />
				<h1 class="font-heading text-5xl font-bold text-sage-100 md:text-6xl">Wildbloom</h1>
			</div>
			<p class="font-heading text-xl text-sage-400 italic md:text-2xl">
				Energy-first days for curious minds
			</p>
		</div>
	</section>

	<!-- What it does -->
	<section class="px-6 py-12">
		<div class="mx-auto max-w-3xl">
			<p class="text-lg leading-relaxed text-sage-300">
				Wildbloom is an energy-first daily planning tool. Instead of rigid time-blocking, it
				helps you organize your day around your energy levels. Create different types of time
				blocks — <span class="font-medium" style="color: #5b9ea6">Push</span>,
				<span class="font-medium" style="color: #7abfc9">Flow</span>,
				<span class="font-medium" style="color: #d4a574">Steady</span>,
				<span class="font-medium" style="color: #a78bda">Growth</span>,
				<span class="font-medium" style="color: #d49aab">Drift</span>,
				<span class="font-medium" style="color: #7a9e7a">Rest</span>, and
				<span class="font-medium text-sage-200">Buffer</span> — that match different energy
				states, so you can do the right work at the right time.
			</p>
		</div>
	</section>

	<!-- Features -->
	<section class="px-6 py-12">
		<div class="mx-auto max-w-4xl">
			<h2 class="font-heading mb-10 text-center text-3xl font-semibold text-sage-100">
				Features
			</h2>
			<div class="grid gap-6 sm:grid-cols-2">
				<div class="wb-card">
					<div class="wb-icon">
						<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path d="M13 10V3L4 14h7v7l9-11h-7z" />
						</svg>
					</div>
					<h3 class="text-sage-100 font-medium">Energy-based time blocking</h3>
					<p class="mt-1 text-sm text-sage-400">
						Plan your day around how you actually feel, not arbitrary hour slots.
					</p>
				</div>
				<div class="wb-card">
					<div class="wb-icon">
						<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
						</svg>
					</div>
					<h3 class="text-sage-100 font-medium">Smart reorder suggestions</h3>
					<p class="mt-1 text-sm text-sage-400">
						When your energy doesn't match your next block, Wildbloom suggests a better
						order.
					</p>
				</div>
				<div class="wb-card">
					<div class="wb-icon">
						<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<circle cx="12" cy="12" r="10" />
							<path d="M12 6v6l4 2" />
						</svg>
					</div>
					<h3 class="text-sage-100 font-medium">Pomodoro timer</h3>
					<p class="mt-1 text-sm text-sage-400">
						Built-in focus timer to keep you in the zone without leaving the app.
					</p>
				</div>
				<div class="wb-card">
					<div class="wb-icon">
						<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<rect x="3" y="4" width="18" height="18" rx="2" />
							<path d="M16 2v4M8 2v4M3 10h18" />
						</svg>
					</div>
					<h3 class="text-sage-100 font-medium">Google Calendar sync</h3>
					<p class="mt-1 text-sm text-sage-400">
						Connect your calendar so your plans and events stay in sync.
					</p>
				</div>
				<div class="wb-card">
					<div class="wb-icon">
						<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
						</svg>
					</div>
					<h3 class="text-sage-100 font-medium">Daily reminders</h3>
					<p class="mt-1 text-sm text-sage-400">
						Gentle nudges to plan your day and check in with your energy.
					</p>
				</div>
				<div class="wb-card">
					<div class="wb-icon">
						<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
						</svg>
					</div>
					<h3 class="text-sage-100 font-medium">Energy tracking &amp; analytics</h3>
					<p class="mt-1 text-sm text-sage-400">
						See patterns in your energy over time and learn when you do your best work.
					</p>
				</div>
				<div class="wb-card">
					<div class="wb-icon">
						<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
						</svg>
					</div>
					<h3 class="text-sage-100 font-medium">Works offline as a PWA</h3>
					<p class="mt-1 text-sm text-sage-400">
						Install on your phone or desktop. Works without internet, syncs when you're
						back online.
					</p>
				</div>
				<div class="wb-card">
					<div class="wb-icon">
						<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
						</svg>
					</div>
					<h3 class="text-sage-100 font-medium">Cross-device sync</h3>
					<p class="mt-1 text-sm text-sage-400">
						Your data stays in sync across all your devices automatically.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Privacy -->
	<section class="px-6 py-12">
		<div class="mx-auto max-w-3xl">
			<h2 class="font-heading mb-8 text-center text-3xl font-semibold text-sage-100">
				Your data, your business
			</h2>
			<div class="space-y-4">
				<div class="flex items-start gap-3">
					<svg class="mt-1 h-5 w-5 shrink-0 text-brand-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
					</svg>
					<p class="text-sage-300">
						Data is encrypted and protected by row-level security — only you can see your
						data.
					</p>
				</div>
				<div class="flex items-start gap-3">
					<svg class="mt-1 h-5 w-5 shrink-0 text-brand-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
					</svg>
					<p class="text-sage-300">
						No tracking cookies or analytics scripts.
					</p>
				</div>
				<div class="flex items-start gap-3">
					<svg class="mt-1 h-5 w-5 shrink-0 text-brand-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
					</svg>
					<p class="text-sage-300">
						No advertising. No data selling. Ever.
					</p>
				</div>
				<div class="flex items-start gap-3">
					<svg class="mt-1 h-5 w-5 shrink-0 text-brand-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
					</svg>
					<p class="text-sage-300">
						Automatic data cleanup — old items are removed after 7–30 days depending on
						type.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- CTA -->
	<section class="px-6 pt-16 pb-10 text-center">
		<div class="mx-auto max-w-2xl">
			<a
				href="https://app.growingme.co"
				class="inline-block rounded-lg bg-brand px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-brand-light"
			>
				Open Wildbloom
			</a>
		</div>
	</section>

	<!-- Legal links -->
	<div class="px-6 pb-12 text-center text-xs text-sage-600">
		<div class="mx-auto max-w-2xl flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
			<a href="https://app.growingme.co/#privacy" class="hover:text-sage-400 transition-colors">Privacy Policy</a>
			<span class="text-sage-800">&middot;</span>
			<a href="https://app.growingme.co/#tos" class="hover:text-sage-400 transition-colors">Terms of Service</a>
			<span class="text-sage-800">&middot;</span>
			<a href="mailto:lillith@valkyrieremedy.com" class="hover:text-sage-400 transition-colors">lillith@valkyrieremedy.com</a>
			<span class="text-sage-800">&middot;</span>
			<span>Valkyrie Remedy LLC</span>
		</div>
	</div>
</div>

<style>
	.wildbloom {
		background-color: #1a1f17;
		margin: -1px 0;
	}

	:global(body:has(.wildbloom)) {
		background-color: #1a1f17;
	}

	.wb-card {
		border: 1px solid #343b2f;
		border-radius: 0.75rem;
		padding: 1.25rem;
		transition: border-color 0.2s;
	}

	.wb-card:hover {
		border-color: #4a5440;
	}

	.wb-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2rem;
		height: 2rem;
		border-radius: 0.5rem;
		background-color: rgba(30, 128, 64, 0.15);
		color: #1e8040;
		margin-bottom: 0.5rem;
	}
</style>
