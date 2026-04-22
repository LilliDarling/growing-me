<script lang="ts">
	let {
		source,
		heading = 'Want a printable PDF?',
		blurb = "Pop your email in and we'll send a clean printable version to your inbox."
	}: {
		source: string;
		heading?: string;
		blurb?: string;
	} = $props();

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
				body: JSON.stringify({ email, source })
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

<section
	class="rounded-3xl border border-brand/30 bg-white p-6 shadow-sm sm:p-8 dark:border-sage-600 dark:bg-sage-900/60"
>
	<h2 class="font-heading text-2xl font-semibold text-gray-900 sm:text-3xl dark:text-gray-100">
		{heading}
	</h2>
	<p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{blurb}</p>

	{#if submitted}
		<p class="mt-5 rounded-2xl bg-brand/10 px-4 py-3 text-sm text-brand dark:bg-sage-800/60 dark:text-sage-200">
			Thanks — check your inbox shortly for your printable worksheet.
		</p>
	{:else}
		<form onsubmit={handleSubmit} class="mt-5 flex flex-col gap-2 sm:flex-row">
			<label for="wps-email" class="sr-only">Email address</label>
			<input
				id="wps-email"
				type="email"
				bind:value={email}
				placeholder="you@example.com"
				required
				disabled={loading}
				maxlength="254"
				class="flex-1 rounded-full border border-sage-300 bg-white px-4 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30 disabled:opacity-50 dark:border-sage-600 dark:bg-sage-950 dark:text-gray-100 dark:placeholder:text-gray-500"
			/>
			<button
				type="submit"
				disabled={loading}
				class="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-light disabled:cursor-not-allowed disabled:opacity-50"
			>
				{loading ? 'Sending…' : 'Send me the PDF'}
			</button>
		</form>
		{#if error}
			<p class="mt-2 text-xs text-red-500">{error}</p>
		{/if}
		<p class="mt-3 text-xs text-gray-500 dark:text-gray-500">
			One email, no spam. You can unsubscribe anytime.
		</p>
	{/if}
</section>
