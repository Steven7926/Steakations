<script>
	import { site } from '#lib/data/site.js';
	import { reviews } from '#lib/data/reviews.js';
	import ReviewCard from '#lib/components/ReviewCard.svelte';
	import '#lib/styles/page-home.css';

	const visited = reviews.length;
	const remaining = site.listTotal - visited;
	const cities = new Set(reviews.map((r) => `${r.city}, ${r.state}`)).size;
	const pct = Math.round((visited / site.listTotal) * 100);

	const pad = (n) => String(n).padStart(2, '0');
</script>

<svelte:head>
	<title>{site.title}</title>
	<meta name="description" content={site.tagline} />
</svelte:head>

<div class="page-home">
	<section class="hero">
		<div class="hero__media" aria-hidden="true">
			<img src="/images/image5-1.jpg" alt="" fetchpriority="high" decoding="async" />
		</div>

		<div class="page hero__inner">
			<p class="eyebrow">Steven &amp; Lauren&rsquo;s</p>
			<h1>Welcome to<br /><em>Steak Haven</em></h1>
			<p class="hero__lede">{site.tagline}</p>

			<div class="hero__meta">
				<span class="doneness">Medium Rare</span>
				<span class="hero__count">{visited} and counting</span>
			</div>
		</div>
	</section>

	<section class="page tally">
		<ol class="tally__stats">
			<li>
				<span class="tally__figure">{pad(visited)}</span>
				<span class="tally__label">Steakhouses</span>
			</li>
			<li>
				<span class="tally__figure">{pad(cities)}</span>
				<span class="tally__label">Cities</span>
			</li>
			<li>
				<span class="tally__figure">{pad(remaining)}</span>
				<span class="tally__label">Still to go</span>
			</li>
		</ol>

		<div class="tally__bar">
			<div class="tally__bar-head">
				<span>The top {site.listTotal}</span>
				<span>{pct}% conquered</span>
			</div>
			<div class="tally__track">
				<div class="tally__fill" style="width: {pct}%"></div>
			</div>
		</div>
	</section>

	<section class="page collection">
		<header class="collection__head">
			<p class="ornament"><span>◆</span></p>
			<h2>Restaurants we&rsquo;ve tried so far and our thoughts</h2>
		</header>

		<div class="collection__grid">
			{#each reviews as review, i (review.slug)}
				<ReviewCard {review} index={i} loading={i < 2 ? 'eager' : 'lazy'} />
			{/each}
		</div>

		<p class="collection__cta">
			<a href="/rankings/">See how we ranked them</a>
		</p>
	</section>
</div>
