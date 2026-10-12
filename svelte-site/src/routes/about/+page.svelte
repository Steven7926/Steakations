<script>
	import { site, about } from '#lib/data/site.js';
	import { reviews } from '#lib/data/reviews.js';
	import Plate from '#lib/components/Plate.svelte';
	import '#lib/styles/page-about.css';
</script>

<svelte:head>
	<title>About — {site.short}</title>
	<meta name="description" content="Why we are eating our way through the top 50 steakhouses in America." />
</svelte:head>

<div class="page-about">
	<header class="page head">
		<p class="eyebrow">The house rules</p>
		<h1>About</h1>
	</header>

	<div class="page feature">
		<Plate
			src="/images/20210924_203232.jpg"
			caption="Moments before demolishing the giant steak, at Keens"
			w={4032}
			h={1960}
			loading="eager"
		/>
	</div>

	<div class="page layout">
		<div class="story prose">
			<p class="story__lede">{about.story[0]}</p>

			<div class="doneness-note">
				<span class="doneness">Medium Rare</span>
				<p>{about.doneness}</p>
			</div>

			<p>{about.story[1]}</p>

			<p class="source">
				The article in question:
				<a href={site.listUrl} target="_blank" rel="noreferrer">
					The Daily Meal&rsquo;s best steakhouses in America
				</a>
			</p>
		</div>

		<aside class="scoreboard">
			<p class="eyebrow eyebrow--muted">Progress</p>
			<p class="scoreboard__figure">
				{reviews.length}<span>/{site.listTotal}</span>
			</p>
			<p class="scoreboard__label">Steakhouses eaten</p>
			<p class="scoreboard__note">
				{site.listTotal - reviews.length} left on the list. We are in no particular hurry.
			</p>
		</aside>
	</div>

	<figure class="page quote">
		<blockquote>
			{#each about.quote.lines as line, i (line)}
				<p class:is-answer={i > 0}>{line}</p>
			{/each}
		</blockquote>
		<figcaption>&mdash; {about.quote.attribution}</figcaption>
	</figure>
</div>
