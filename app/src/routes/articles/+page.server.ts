import type { PageServerLoad } from './$types';
import { getAllPosts, getCategories } from '$lib/utils/posts';

export const load: PageServerLoad = async ({ url }) => {
	const categoryFilter = url.searchParams.get('category') ?? '';
	const searchQuery = url.searchParams.get('q') ?? '';
	const allPosts = getAllPosts();
	const categories = getCategories();

	let filteredPosts = categoryFilter
		? allPosts.filter((p) => p.category === categoryFilter)
		: allPosts;

	if (searchQuery) {
		const q = searchQuery.toLowerCase();
		filteredPosts = filteredPosts.filter(
			(p) =>
				p.title.toLowerCase().includes(q) ||
				p.description.toLowerCase().includes(q) ||
				p.category.toLowerCase().includes(q)
		);
	}

	const featured = searchQuery ? null : (filteredPosts.find((p) => p.featured) ?? filteredPosts[0]);
	const remaining = featured ? filteredPosts.filter((p) => p !== featured) : filteredPosts;

	return {
		posts: remaining,
		featured: featured ?? null,
		categories,
		activeCategory: categoryFilter,
		searchQuery
	};
};
