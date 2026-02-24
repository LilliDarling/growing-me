import { getFeaturedPosts } from '$lib/utils/posts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	return {
		featuredPosts: getFeaturedPosts()
	};
};
