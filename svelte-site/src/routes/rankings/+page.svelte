<script>
	import { site, rankings, isRanked } from '#lib/data/site.js';
	import { reviews, reviewBySlug } from '#lib/data/reviews.js';
	import RankingSlope from '#lib/components/RankingSlope.svelte';
	import '#lib/styles/page-rankings.css';

	const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
	const unplaced = reviews.filter((r) => !isRanked(r.slug));

	const lists = rankings.map(({ diner, order }) => ({
		diner,
		places: order.map((slug) => reviewBySlug(slug))
	}));

	// The one thing we flatly disagree on is the top spot, so call it out.
	const topPicks = rankings.map(({ diner, order }) => ({
		diner,
		pick: reviewBySlug(order[0])
	}));
</script>

<svelte:head>
	<title>Rankings — {site.short}</title>
	<meta name="description" content="How Steven and Lauren each rank the steakhouses so far." />
</svelte:head>

<div class="page-rankings">
	<header class="page head">
		<p class="eyebrow">The scoreboard</p>
		<h1>Rankings</h1>
		<p class="head__lede">
			So far we have visited {reviews.length} steakhouses of the {site.listTotal} on the list.
		</p>
		<p class="head__split">
			{topPicks[0].diner} gives the crown to <strong>{topPicks[0].pick.name}</strong>.
			{topPicks[1].diner} says it&rsquo;s <strong>{topPicks[1].pick.name}</strong>. The debate continues.
		</p>

		{#if unplaced.length}
			<p class="head__pending">
				{formatter.format(unplaced.map((r) => r.name))}
				{unplaced.length === 1 ? 'is' : 'are'} still awaiting a verdict and
				{unplaced.length === 1 ? 'is' : 'are'} not placed yet.
			</p>
		{/if}
	</header>

	<div class="page compare">
		<RankingSlope />
	</div>

	<div class="page boards">
		{#each lists as { diner, places } (diner)}
			<section class="board">
				<header class="board__head">
					<h2>{diner}&rsquo;s Rankings</h2>
					<p class="ornament"><span>◆</span></p>
				</header>

				<ol class="board__list">
					{#each places as place, i (place.slug)}
						<li class:is-first={i === 0}>
							<a href="/reviews/{place.slug}/">
								<span class="rank">{String(i + 1).padStart(2, '0')}</span>
								<span class="entry">
									<span class="entry__name">{place.name}</span>
									<span class="entry__place">{place.city}, {place.state}</span>
								</span>
							</a>
						</li>
					{/each}
				</ol>
			</section>
		{/each}
	</div>
</div>
