<script>
	import '#lib/styles/error-panel.css';
	let {
		status = 404,
		heading = 'Nothing on the menu here',
		message = 'We have not eaten there yet.'
	} = $props();
</script>

<section class="page panel">
	<p class="eyebrow">Error {status}</p>
	<h1>{heading}</h1>
	<p class="panel__message">{message}</p>
	<p class="ornament"><span>◆</span></p>
	<p class="panel__actions">
		<a href="/">Back to the dining room</a>
	</p>
</section>

