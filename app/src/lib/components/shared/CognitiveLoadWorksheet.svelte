<script lang="ts">
	import { onMount } from 'svelte';

	type TierKey = 'unassigned' | 'tier1' | 'tier2' | 'tier3';

	interface Task {
		id: string;
		text: string;
		tier: TierKey;
	}

	const STORAGE_KEY = 'cognitive-load-worksheet-v1';

	const tiers: Array<{
		key: Exclude<TierKey, 'unassigned'>;
		label: string;
		description: string;
	}> = [
		{
			key: 'tier1',
			label: 'Tier 1 — Autopilot',
			description:
				'Muscle-memory tasks. Cleaning, laundry, errands, familiar routines. Your body, not your full mind.'
		},
		{
			key: 'tier2',
			label: 'Tier 2 — Semi-Active',
			description:
				'Some thought, not deep focus. Organizing, light research, non-urgent messages, rough sketches.'
		},
		{
			key: 'tier3',
			label: 'Tier 3 — Full Focus',
			description:
				'Writing, coding, deep creative work, complex problem solving. Protect this tier until capacity returns.'
		}
	];

	let tasks = $state<Task[]>([]);
	let draft = $state('');
	let hydrated = $state(false);

	const unassigned = $derived(tasks.filter((t) => t.tier === 'unassigned'));
	const byTier = $derived(
		Object.fromEntries(
			tiers.map((t) => [t.key, tasks.filter((x) => x.tier === t.key)])
		) as Record<Exclude<TierKey, 'unassigned'>, Task[]>
	);

	onMount(() => {
		try {
			const raw = localStorage.getItem(STORAGE_KEY);
			if (raw) {
				const parsed = JSON.parse(raw);
				if (Array.isArray(parsed)) tasks = parsed;
			}
		} catch {
			// ignore corrupt storage
		}
		hydrated = true;
	});

	$effect(() => {
		if (!hydrated) return;
		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
		} catch {
			// ignore quota / private mode
		}
	});

	function makeId(): string {
		return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
	}

	function addTask(e: Event) {
		e.preventDefault();
		const text = draft.trim();
		if (!text) return;
		tasks = [...tasks, { id: makeId(), text, tier: 'unassigned' }];
		draft = '';
	}

	function moveTo(id: string, tier: TierKey) {
		tasks = tasks.map((t) => (t.id === id ? { ...t, tier } : t));
	}

	function removeTask(id: string) {
		tasks = tasks.filter((t) => t.id !== id);
	}

	function clearAll() {
		if (tasks.length === 0) return;
		const ok = confirm('Clear every task from the worksheet?');
		if (ok) tasks = [];
	}
</script>

<section
	class="not-prose my-12 rounded-3xl border border-sage-200 bg-sage-50 p-6 shadow-sm sm:p-8 dark:border-sage-700 dark:bg-sage-900/40"
	aria-labelledby="clw-heading"
>
	<header class="mb-6">
		<h2
			id="clw-heading"
			class="font-heading text-2xl font-bold text-gray-900 sm:text-3xl dark:text-gray-100"
		>
			Cognitive Load Tier Worksheet
		</h2>
		<p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
			Dump every task in your head, then sort each one into the tier that matches its real
			cognitive cost — not its priority.
		</p>
		<p class="mt-2 text-xs text-gray-500 dark:text-gray-500">
			Your list stays on your device. Nothing is sent to our servers — it's kept only in your
			browser's local storage, and clearing your browser data will clear it. Heads up: anyone
			who uses this browser on this device can see it.
		</p>
	</header>

	<form onsubmit={addTask} class="flex flex-col gap-2 sm:flex-row">
		<label for="clw-input" class="sr-only">Add a task</label>
		<input
			id="clw-input"
			type="text"
			bind:value={draft}
			placeholder="e.g. Reply to Mara's email"
			class="flex-1 rounded-full border border-sage-300 bg-white px-4 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30 dark:border-sage-600 dark:bg-sage-950 dark:text-gray-100 dark:placeholder:text-gray-500"
			maxlength="200"
			autocomplete="off"
		/>
		<button
			type="submit"
			class="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-light disabled:cursor-not-allowed disabled:opacity-50"
			disabled={draft.trim().length === 0}
		>
			Add task
		</button>
	</form>

	<!-- Unassigned -->
	<div class="mt-8">
		<div class="mb-3 flex items-baseline justify-between gap-4">
			<h3 class="font-heading text-lg font-semibold text-gray-900 dark:text-gray-100">
				Unassigned
				<span class="ml-1 text-sm font-normal text-gray-500 dark:text-gray-400">
					({unassigned.length})
				</span>
			</h3>
			{#if tasks.length > 0}
				<button
					type="button"
					onclick={clearAll}
					class="text-xs font-medium text-gray-500 underline-offset-2 hover:text-brand hover:underline dark:text-gray-400 dark:hover:text-sage-300"
				>
					Clear all
				</button>
			{/if}
		</div>

		{#if unassigned.length === 0}
			<p class="rounded-2xl border border-dashed border-sage-300 px-4 py-6 text-center text-sm text-gray-500 dark:border-sage-700 dark:text-gray-400">
				No unassigned tasks. Add one above to start sorting.
			</p>
		{:else}
			<ul class="flex flex-col gap-2">
				{#each unassigned as task (task.id)}
					<li
						class="flex flex-col gap-3 rounded-2xl border border-sage-200 bg-white p-3 sm:flex-row sm:items-center sm:justify-between dark:border-sage-700 dark:bg-sage-950/50"
					>
						<p class="text-sm text-gray-900 break-words dark:text-gray-100">{task.text}</p>
						<div class="flex flex-wrap gap-2">
							{#each tiers as tier (tier.key)}
								<button
									type="button"
									onclick={() => moveTo(task.id, tier.key)}
									class="rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-xs font-medium text-brand transition-colors hover:bg-brand hover:text-white dark:border-sage-500 dark:bg-sage-800/60 dark:text-sage-200 dark:hover:bg-sage-600 dark:hover:text-white"
									aria-label="Move to {tier.label}"
								>
									{tier.key === 'tier1' ? 'Tier 1' : tier.key === 'tier2' ? 'Tier 2' : 'Tier 3'}
								</button>
							{/each}
							<button
								type="button"
								onclick={() => removeTask(task.id)}
								class="rounded-full px-3 py-1 text-xs font-medium text-gray-500 transition-colors hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400"
								aria-label="Delete task"
							>
								Delete
							</button>
						</div>
					</li>
				{/each}
			</ul>
		{/if}
	</div>

	<!-- Tiers -->
	<div class="mt-8 grid gap-4 lg:grid-cols-3">
		{#each tiers as tier (tier.key)}
			{@const items = byTier[tier.key]}
			<div
				class="flex flex-col rounded-2xl border border-sage-200 bg-white p-4 dark:border-sage-700 dark:bg-sage-950/40"
			>
				<h3 class="font-heading text-base font-semibold text-gray-900 dark:text-gray-100">
					{tier.label}
					<span class="ml-1 text-xs font-normal text-gray-500 dark:text-gray-400">
						({items.length})
					</span>
				</h3>
				<p class="mt-1 text-xs text-gray-600 dark:text-gray-400">{tier.description}</p>

				{#if items.length === 0}
					<p class="mt-4 rounded-xl border border-dashed border-sage-300 px-3 py-4 text-center text-xs text-gray-500 dark:border-sage-700 dark:text-gray-400">
						Nothing here yet.
					</p>
				{:else}
					<ul class="mt-4 flex flex-col gap-2">
						{#each items as task (task.id)}
							<li class="rounded-xl bg-sage-100 p-3 dark:bg-sage-800/50">
								<p class="text-sm text-gray-900 break-words dark:text-gray-100">{task.text}</p>
								<div class="mt-2 flex flex-wrap gap-2">
									<button
										type="button"
										onclick={() => moveTo(task.id, 'unassigned')}
										class="text-xs font-medium text-brand underline-offset-2 hover:underline dark:text-sage-300"
									>
										Unassign
									</button>
									<span class="text-xs text-gray-400" aria-hidden="true">·</span>
									<button
										type="button"
										onclick={() => removeTask(task.id)}
										class="text-xs font-medium text-gray-500 underline-offset-2 hover:text-red-600 hover:underline dark:text-gray-400 dark:hover:text-red-400"
									>
										Delete
									</button>
								</div>
							</li>
						{/each}
					</ul>
				{/if}
			</div>
		{/each}
	</div>
</section>
