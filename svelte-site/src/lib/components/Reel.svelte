<script>
	import '#lib/styles/reel.css';
	/** @type {{ src: string, poster?: string, caption?: string, w?: number, h?: number }} */
	let { src, poster, caption = '', w, h } = $props();

	/** @type {HTMLVideoElement | null} */
	let el = $state(null);
	let reduced = $state(false);

	$effect(() => {
		const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
		const sync = () => {
			reduced = mq.matches;
			if (mq.matches) el?.pause();
		};
		sync();
		mq.addEventListener('change', sync);
		return () => mq.removeEventListener('change', sync);
	});
</script>

<figure class="plate reel" style={w && h ? `--ratio: ${w} / ${h}` : undefined}>
	<div class="plate__frame">
		<!-- svelte-ignore a11y_media_has_caption -->
		<video
			bind:this={el}
			{poster}
			width={w}
			height={h}
			autoplay
			muted
			loop
			playsinline
			preload="metadata"
			controls={reduced}
			aria-label={caption}
		>
			<source {src} type="video/mp4" />
		</video>
	</div>
	{#if caption}
		<figcaption>{caption}</figcaption>
	{/if}
</figure>

