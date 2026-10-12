<script>
	import { page } from '$app/state';
	import ErrorPanel from '#lib/components/ErrorPanel.svelte';
</script>

<svelte:head>
	<title>{page.status} — Steakations</title>
</svelte:head>

<ErrorPanel
	status={page.status}
	heading={page.status === 404 ? 'Nothing on the menu here' : 'Something went wrong'}
	message={page.error?.message ?? 'We have not eaten there yet.'}
/>
