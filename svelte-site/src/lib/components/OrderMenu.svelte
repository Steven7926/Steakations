<script>
	import '#lib/styles/order-menu.css';

	let { sections = [], cost = null } = $props();
	const NAME_MAX = 58;

	/** @param {string} text */
	function parse(text) {
		const m = text.match(/^(.*?)\s[–—]\s(.*)$/s);
		if (m) return { name: m[1], note: m[2] };
		return text.length <= NAME_MAX ? { name: text, note: '' } : { name: '', note: text };
	}
</script>

<figure class="menu">
	<header class="menu__head">
		<p class="menu__flourish" aria-hidden="true">&#9670;&nbsp;&#9670;&nbsp;&#9670;</p>
		<p class="eyebrow menu__label">The Menu</p>
	</header>

	<div class="menu__courses">
		{#each sections as section (section.label)}
			<section class="course">
				<h3 class="course__name">{section.label}</h3>
				<ul class="course__items">
					{#each section.items as item (item)}
						{@const line = parse(item)}
						<li class="dish">
							{#if line.name}
								<p class="dish__name">{line.name}</p>
							{/if}
							{#if line.note}
								<p class="dish__note">{line.note}</p>
							{/if}
						</li>
					{/each}
				</ul>
			</section>
		{/each}
	</div>

	{#if cost}
		<figcaption class="menu__bill">
			<span class="menu__bill-label">Total damage</span>
			<span class="menu__leader" aria-hidden="true"></span>
			<strong class="menu__bill-figure">{cost}</strong>
		</figcaption>
	{/if}
</figure>
