<script lang="ts">
	import leaf from '$lib/assets/logo-leaf.png';

	let email = $state('');
	let submitted = $state(false);
	let loading = $state(false);
	let error = $state('');

	async function handleSubmit(e: Event) {
		e.preventDefault();
		if (!email || loading) return;

		loading = true;
		error = '';

		try {
			const res = await fetch('/api/subscribe', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, source: 'newsletter' })
			});

			if (!res.ok) {
				const data = await res.json().catch(() => ({}));
				error = data.error || 'Something went wrong. Please try again.';
				return;
			}

			submitted = true;
			email = '';
		} catch {
			error = 'Something went wrong. Please try again.';
		} finally {
			loading = false;
		}
	}
</script>

<form onsubmit={handleSubmit} class="relative">
	{#if submitted}
		<p class="text-sm text-brand dark:text-sage-300">Thanks for subscribing!</p>
	{:else}
		<div class="relative flex items-center">
			<input
				type="email"
				bind:value={email}
				placeholder="Enter your email"
				required
				disabled={loading}
				class="z-10 w-full rounded-full border border-blue-600 bg-blue-200/30 py-2 pl-4 pr-28 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand focus:outline-none disabled:opacity-50 dark:border-sage-600 dark:bg-surface-dark-alt dark:text-gray-100 dark:placeholder:text-gray-500"
			/>
			<button
				type="submit"
				disabled={loading}
				class="absolute right-1 z-20 rounded-full bg-blue-600 px-4 py-1.25 text-sm font-medium text-white transition-colors hover:bg-brand-light disabled:opacity-50"
			>
				{loading ? 'Sending...' : 'Subscribe'}
			</button>
			<img src={leaf} alt="" class="pointer-events-none absolute -right-10 -bottom-18 w-[150px] md:-right-12 md:-bottom-18 md:w-[150px] z-0" />
		</div>
		{#if error}
			<p class="mt-2 text-xs text-red-500">{error}</p>
		{/if}
	{/if}
</form>
