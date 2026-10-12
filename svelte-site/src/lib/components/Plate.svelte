<script>
	import '#lib/styles/plate.css';
	let { src, caption = '', w, h, loading = 'lazy' } = $props();

	const ratio = $derived(w && h ? w / h : null);
	const shape = $derived(
		!ratio || ratio >= 1.6
			? 'wide' 
			: ratio >= 1.1
				? 'landscape'
				: ratio > 0.9
					? 'square'
					: 'tall'
	);
</script>

<figure class="plate plate--{shape}" style={ratio ? `--ratio: ${w} / ${h}` : undefined}>
	<div class="plate__frame">
		<img {src} alt={caption} width={w} height={h} {loading} decoding="async" />
	</div>
	{#if caption}
		<figcaption>{caption}</figcaption>
	{/if}
</figure>

