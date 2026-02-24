<script lang="ts">
	import leaf from '$lib/assets/logo-leaf.png'
	let email = $state('');
	let submitted = $state(false);

	function handleSubmit(e: Event) {
		e.preventDefault();
		if (email) {
			submitted = true;
			email = '';
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
				class="z-10 w-full rounded-full border border-blue-600 bg-blue-200/30 py-2 pl-4 pr-28 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand focus:outline-none dark:border-sage-600 dark:bg-surface-dark-alt dark:text-gray-100 dark:placeholder:text-gray-500"
			/>
			<button
				type="submit"
				class="absolute right-1 z-20 rounded-full bg-blue-600 px-4 py-1.25 text-sm font-medium text-white transition-colors hover:bg-brand-light"
			>
				Subscribe
			</button>
			<img src={leaf} alt="" class="absolute -right-19 -bottom-28 z-0" style="width: 200px">
		</div>
	{/if}
</form>
