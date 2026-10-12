<script>
	import { site } from '#lib/data/site.js';
	import { reviews } from '#lib/data/reviews.js';
	import '#lib/styles/site-footer.css';

	const remaining = site.listTotal - reviews.length;
</script>

<footer class="footer">
	<div class="page footer__inner">
		<p class="ornament"><span>◆</span></p>

		<p class="footer__line">{site.title}</p>
		<p class="footer__note">
			{reviews.length} down, {remaining} to go. All medium rare, no exceptions.
		</p>

		<nav class="footer__nav" aria-label="Footer">
			{#each site.nav as item (item.href)}
				<a href={item.href}>{item.label}</a>
			{/each}
		</nav>
	</div>
</footer>

