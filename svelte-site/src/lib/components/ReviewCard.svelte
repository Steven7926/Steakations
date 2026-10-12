<script>
	import { PLACEHOLDER } from '#lib/data/reviews.js';
	import '#lib/styles/review-card.css';

	/**
	 * @type {{
	 *   review: import('#lib/data/reviews.js').Review,
	 *   index?: number,
	 *   loading?: 'eager' | 'lazy'
	 * }}
	 */
	let { review, index = 0, loading = 'lazy' } = $props();

	const number = $derived(String(index + 1).padStart(2, '0'));
	const hasArt = $derived(review.hero !== PLACEHOLDER);
</script>

<article class="card">
	<a class="card__link" href="/reviews/{review.slug}/">
		<div class="card__frame" class:is-empty={!hasArt}>
			{#if hasArt}
				<img src={review.hero} alt="" {loading} decoding="async" />
			{:else}
				<span class="card__empty" aria-hidden="true">
					<span class="card__diamond">◆</span>
					<span>Photo to come</span>
				</span>
			{/if}
			<span class="card__no">No. {number}</span>
			{#if review.pending}
				<span class="card__flag">Write-up to come</span>
			{/if}
		</div>

		<div class="card__body">
			<p class="card__place">
				{review.city}, {review.state}
				{#if review.established}
					<span class="card__dot" aria-hidden="true">◆</span> Est. {review.established}
				{/if}
			</p>

			<h3 class="card__name">{review.name}</h3>
			<p class="card__tagline" class:is-pending={review.pending}>
				{review.tagline ?? 'Been. Eaten. Write-up still cooking.'}
			</p>

			<p class="card__more">
				<span>{review.pending ? 'Coming soon' : 'Read the review'}</span>
				<span class="card__arrow" aria-hidden="true">→</span>
			</p>
		</div>
	</a>
</article>

