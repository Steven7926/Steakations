<script>
	import '#lib/styles/order-menu.css';
	let { sections = [], cost = null } = $props();
</script>

<div class="menu">
	<div class="menu__head">
		<p class="eyebrow">What we ordered</p>
		<span class="doneness">Medium Rare</span>
	</div>

	<dl class="menu__list">
		{#each sections as section (section.label)}
			<div class="menu__row">
				<dt>{section.label}</dt>
				<dd>
					{#each section.items as item (item)}
						<p>{item}</p>
					{/each}
				</dd>
			</div>
		{/each}
	</dl>

	{#if cost}
		<p class="menu__total">
			<span>Total damage</span>
			<span class="menu__leader" aria-hidden="true"></span>
			<strong>{cost}</strong>
		</p>
	{/if}
</div>

