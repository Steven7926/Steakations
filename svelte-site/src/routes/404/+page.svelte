<script>
	import ErrorPanel from '#lib/components/ErrorPanel.svelte';
</script>

<svelte:head>
	<title>Not found — Steakations</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<ErrorPanel
	status={404}
	heading="Nothing on the menu here"
	message="That page is off the menu. The steaks, thankfully, are still on it."
/>
