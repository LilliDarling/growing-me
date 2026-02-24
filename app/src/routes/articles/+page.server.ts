import type { PageServerLoad } from './$types';
import { getAllPosts, getCategories } from '$lib/utils/posts';

export const load: PageServerLoad = async ({ url }) => {
	const categoryFilter = url.searchParams.get('category') ?? '';
	const allPosts = getAllPosts();
	const categories = getCategories();

	const filteredPosts = categoryFilter
		? allPosts.filter((p) => p.category === categoryFilter)
		: allPosts;

	const featured = filteredPosts.find((p) => p.featured) ?? filteredPosts[0];
	const remaining = filteredPosts.filter((p) => p !== featured);

	return {
		posts: remaining,
		featured: featured ?? null,
		categories,
		activeCategory: categoryFilter
	};
};
