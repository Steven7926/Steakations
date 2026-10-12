<script>
	import { rankings } from '#lib/data/site.js';
	import { reviewBySlug } from '#lib/data/reviews.js';
	import '#lib/styles/ranking-slope.css';

	const [left, right] = rankings;

	const rows = left.order.map((slug) => {
		const a = left.order.indexOf(slug) + 1;
		const b = right.order.indexOf(slug) + 1;
		return {
			slug,
			name: reviewBySlug(slug)?.name ?? slug,
			a,
			b,
			delta: a - b,
			dir: a === b ? 'even' : b < a ? 'up' : 'down'
		};
	});

	const agreed = rows.filter((r) => r.dir === 'even').length;
	const moved = rows.length - agreed;
	const biggest = Math.max(...rows.map((r) => Math.abs(r.delta)));

	const W = 760;
	const rowH = 46;
	const topPad = 58;
	const H = topPad + rows.length * rowH + 18;
	const xA = 215;
	const xB = 545;
	const r = 12.5;
	const gap = r + 4;

	/** @param {number} rank */
	const y = (rank) => topPad + (rank - 0.5) * rowH;
	/** @param {number} n */
	const pad2 = (n) => String(n).padStart(2, '0');

	const summary = `${left.diner} and ${right.diner} agree outright on ${agreed} of ${rows.length}${
		biggest === 1 ? ', and never differ by more than a single place' : ''
	}.`;
</script>

<figure class="slope">
	<figcaption class="slope__head">
		<h3 class="slope__title">Where we disagree</h3>
		<p class="slope__summary">
			Every steakhouse, {left.diner}&rsquo;s placing on the left and {right.diner}&rsquo;s on
			the right. A level line is a dead heat; a sloped one is an argument. {summary}
		</p>
	</figcaption>

	<ul class="slope__stats">
		<li>
			<span class="slope__figure">{pad2(agreed)}</span>
			<span class="slope__label">Dead heats</span>
		</li>
		<li>
			<span class="slope__figure">{pad2(moved)}</span>
			<span class="slope__label">Placed differently</span>
		</li>
		<li>
			<span class="slope__figure">{pad2(biggest)}</span>
			<span class="slope__label">Biggest gap, in places</span>
		</li>
	</ul>

	<ul class="slope__legend">
		<li><span class="slope__swatch" style="--swatch: var(--slope-up)"></span>{right.diner} rates it higher</li>
		<li><span class="slope__swatch" style="--swatch: var(--slope-down)"></span>{left.diner} rates it higher</li>
		<li><span class="slope__swatch" style="--swatch: var(--slope-even)"></span>Dead heat</li>
	</ul>

	<svg
		class="slope__chart"
		viewBox="0 0 {W} {H}"
		role="presentation"
		aria-hidden="true"
		preserveAspectRatio="xMidYMid meet"
	>
		<text class="slope__col-head" x={xA} y="26" text-anchor="middle">{left.diner}</text>
		<text class="slope__col-head" x={xB} y="26" text-anchor="middle">{right.diner}</text>

		{#each rows as row (row.slug)}
			<g class="slope__row slope__row--{row.dir}">
				<line
					class="slope__line"
					x1={xA + gap}
					y1={y(row.a)}
					x2={xB - gap}
					y2={y(row.b)}
				/>

				<circle class="slope__node" cx={xA} cy={y(row.a)} {r} />
				<text class="slope__rank" x={xA} y={y(row.a) + 3.6} text-anchor="middle">
					{pad2(row.a)}
				</text>
				<text class="slope__name" x={xA - r - 12} y={y(row.a) + 4.5} text-anchor="end">
					{row.name}
				</text>

				<circle class="slope__node" cx={xB} cy={y(row.b)} {r} />
				<text class="slope__rank" x={xB} y={y(row.b) + 3.6} text-anchor="middle">
					{pad2(row.b)}
				</text>
				<text class="slope__name" x={xB + r + 12} y={y(row.b) + 4.5}>{row.name}</text>
			</g>
		{/each}
	</svg>

	<ol class="slope__list">
		{#each rows as row (row.slug)}
			<li class="slope__item slope__item--{row.dir}">
				<span class="slope__item-name">{row.name}</span>
				<span class="slope__item-move">
					<span class="slope__pill">{row.a}</span>
					{left.diner}
					&nbsp;·&nbsp;
					<span class="slope__pill">{row.b}</span>
					{right.diner}
				</span>
			</li>
		{/each}
	</ol>
</figure>
