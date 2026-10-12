<script>
	import { site, rankings } from '#lib/data/site.js';
	import { PLACEHOLDER } from '#lib/data/reviews.js';
	import Plate from '#lib/components/Plate.svelte';
	import Reel from '#lib/components/Reel.svelte';
	import OrderMenu from '#lib/components/OrderMenu.svelte';
	import '#lib/styles/page-review.css';

	/** @type {{ data: ReturnType<typeof import('./+page.js').load> }} */
	let { data } = $props();

	const review = $derived(data.review);
	const number = $derived(String(data.index + 1).padStart(2, '0'));

	const places = $derived(
		rankings
			.map(({ diner, order }) => ({ diner, place: order.indexOf(review.slug) + 1 }))
			.filter(({ place }) => place > 0)
	);

	const hasFacts = $derived(Boolean(review.established) || Boolean(review.listRank) || places.length > 0);
	const hasArt = $derived(review.hero !== PLACEHOLDER);

	/** @param {number} n */
	const ordinal = (n) => {
		const suffix = n % 10 === 1 && n !== 11 ? 'st' : n % 10 === 2 && n !== 12 ? 'nd' : n % 10 === 3 && n !== 13 ? 'rd' : 'th';
		return `${n}${suffix}`;
	};
</script>

<svelte:head>
	<title>{review.name} — {site.short}</title>
	<meta
		name="description"
		content={review.tagline ??
			`${review.name} in ${review.city}, ${review.state} — photos and write-up to come.`}
	/>
</svelte:head>

<article class="page-review">
	<header class="masthead" class:is-pending={!hasArt}>
		<div class="masthead__media" aria-hidden="true">
			{#if hasArt}
				<img src={review.hero} alt="" fetchpriority="high" decoding="async" />
			{/if}
		</div>

		<div class="page masthead__inner">
			<p class="eyebrow">No. {number} &nbsp;◆&nbsp; {review.city}, {review.state}</p>
			<h1>{review.name}</h1>
			{#if review.tagline}
				<p class="masthead__tagline">{review.tagline}</p>
			{/if}

			{#if hasFacts}
				<ul class="facts">
					{#if review.established}
						<li><span>Established</span><strong>{review.established}</strong></li>
					{/if}
					{#if review.listRank}
						<li><span>On the list</span><strong>#{review.listRank}</strong></li>
					{/if}
					{#each places as { diner, place } (diner)}
						<li><span>{diner}&rsquo;s rank</span><strong>{ordinal(place)}</strong></li>
					{/each}
					{#if places.length === 0}
						<li><span>Verdict</span><strong>Pending</strong></li>
					{/if}
				</ul>
			{/if}
		</div>
	</header>

	<div class="page body">
		{#if review.copy.length}
			<section class="prose intro">
				{#each review.copy as paragraph (paragraph)}
					<p>{paragraph}</p>
				{/each}
			</section>
		{:else}
			<section class="prose intro awaiting">
				<p>
					{review.name} is on the board.
					{#if hasArt}
						The write-up is still to come
					{:else}
						The photos and the write-up are still to come
					{/if}
					&mdash;
					{#if places.length}
						though we have both already made up our minds about where it places.
					{:else}
						and it stays out of the rankings until we&rsquo;ve both made up our minds.
					{/if}
				</p>
			</section>
		{/if}

		<section class="plates">
			{#each review.plates as plate, i (plate.src + i)}
				{#if plate.video}
					<Reel
						src={plate.src}
						poster={plate.poster}
						caption={plate.caption}
						w={plate.w}
						h={plate.h}
					/>
				{:else}
					<Plate src={plate.src} caption={plate.caption} w={plate.w} h={plate.h} />
				{/if}
			{/each}
		</section>

		{#if review.order.length}
			<section class="order">
				<OrderMenu sections={review.order} cost={review.cost} />
			</section>
		{/if}

		{#if review.thoughts.length}
			<section class="thoughts">
				<header class="thoughts__head">
					<p class="ornament"><span>◆</span></p>
					<h2>Final Thoughts</h2>
				</header>
				<div class="prose">
					{#each review.thoughts as paragraph (paragraph)}
						<p>{paragraph}</p>
					{/each}
				</div>
			</section>
		{/if}

		<nav class="pager" aria-label="Other reviews">
			{#if data.prev}
				<a class="pager__link pager__link--prev" href="/reviews/{data.prev.slug}/">
					<span class="pager__dir">Previous</span>
					<span class="pager__name">{data.prev.name}</span>
				</a>
			{:else}
				<span></span>
			{/if}

			{#if data.next}
				<a class="pager__link pager__link--next" href="/reviews/{data.next.slug}/">
					<span class="pager__dir">Next</span>
					<span class="pager__name">{data.next.name}</span>
				</a>
			{/if}
		</nav>
	</div>
</article>

