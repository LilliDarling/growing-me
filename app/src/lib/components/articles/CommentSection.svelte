<script lang="ts">
	interface Comment {
		id: string;
		name: string;
		body: string;
		created_at: string;
	}

	let { slug }: { slug: string } = $props();

	let comments = $state<Comment[]>([]);
	let name = $state('');
	let body = $state('');
	let website = $state(''); // honeypot
	let loading = $state(false);
	let submitting = $state(false);
	let error = $state('');
	let success = $state('');

	async function loadComments() {
		loading = true;
		try {
			const res = await fetch(`/api/comments/${slug}`);
			if (res.ok) {
				comments = await res.json();
			}
		} catch {
			// silently fail — comments are not critical
		} finally {
			loading = false;
		}
	}

	async function handleSubmit(e: Event) {
		e.preventDefault();
		if (submitting) return;

		submitting = true;
		error = '';
		success = '';

		try {
			const res = await fetch(`/api/comments/${slug}`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name, body, website })
			});

			const data = await res.json();

			if (!res.ok) {
				error = data.error || 'Something went wrong. Please try again.';
				return;
			}

			success = data.message || 'Comment posted!';
			name = '';
			body = '';
			await loadComments();
		} catch {
			error = 'Something went wrong. Please try again.';
		} finally {
			submitting = false;
		}
	}

	function formatCommentDate(dateStr: string): string {
		return new Date(dateStr + 'Z').toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}

	$effect(() => {
		loadComments();
	});
</script>

<section class="mt-12 border-t border-sage-200 pt-8 dark:border-sage-700">
	<h2 class="font-heading text-2xl font-bold text-gray-900 dark:text-gray-100">Comments</h2>

	<!-- Comment form -->
	<form onsubmit={handleSubmit} class="mt-6 space-y-4">
		<div>
			<label for="comment-name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
				Name
			</label>
			<input
				id="comment-name"
				type="text"
				bind:value={name}
				required
				maxlength={80}
				disabled={submitting}
				class="mt-1 w-full rounded-lg border border-sage-300 bg-white px-4 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand focus:outline-none disabled:opacity-50 dark:border-sage-600 dark:bg-surface-dark-alt dark:text-gray-100 dark:placeholder:text-gray-500"
				placeholder="Your name"
			/>
		</div>

		<div>
			<label for="comment-body" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
				Comment
			</label>
			<textarea
				id="comment-body"
				bind:value={body}
				required
				maxlength={2000}
				rows={4}
				disabled={submitting}
				class="mt-1 w-full rounded-lg border border-sage-300 bg-white px-4 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand focus:outline-none disabled:opacity-50 dark:border-sage-600 dark:bg-surface-dark-alt dark:text-gray-100 dark:placeholder:text-gray-500"
				placeholder="Share your thoughts..."
			></textarea>
			<p class="mt-1 text-xs text-gray-400">{body.length}/2000</p>
		</div>

		<!-- Honeypot — invisible to real users -->
		<div class="absolute -left-[9999px]" aria-hidden="true">
			<input type="text" bind:value={website} tabindex={-1} autocomplete="off" />
		</div>

		{#if error}
			<p class="text-sm text-red-500">{error}</p>
		{/if}

		{#if success}
			<p class="text-sm text-brand dark:text-sage-300">{success}</p>
		{/if}

		<button
			type="submit"
			disabled={submitting}
			class="rounded-full bg-brand px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-light disabled:opacity-50"
		>
			{submitting ? 'Posting...' : 'Post Comment'}
		</button>
	</form>

	<!-- Comments list -->
	<div class="mt-10 space-y-6">
		{#if loading}
			<p class="text-sm text-gray-400">Loading comments...</p>
		{:else if comments.length === 0}
			<p class="text-sm text-gray-400">No comments yet. Be the first to share your thoughts!</p>
		{:else}
			{#each comments as comment (comment.id)}
				<div class="rounded-lg border border-sage-200 p-4 dark:border-sage-700">
					<div class="flex items-baseline justify-between">
						<span class="font-medium text-gray-900 dark:text-gray-100">{comment.name}</span>
						<span class="text-xs text-gray-400">{formatCommentDate(comment.created_at)}</span>
					</div>
					<p class="mt-2 text-sm text-gray-700 whitespace-pre-line dark:text-gray-300">
						{comment.body}
					</p>
				</div>
			{/each}
		{/if}
	</div>
</section>
