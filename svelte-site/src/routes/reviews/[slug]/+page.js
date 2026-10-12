import { error } from '@sveltejs/kit';
import { reviews, reviewBySlug } from '#lib/data/reviews.js';

export const entries = () => reviews.map((review) => ({ slug: review.slug }));

export function load({ params }) {
	const review = reviewBySlug(params.slug);
	if (!review) error(404, 'We have not eaten there yet.');

	const index = reviews.indexOf(review);

	return {
		review,
		index,
		prev: reviews[index - 1] ?? null,
		next: reviews[index + 1] ?? null
	};
}
