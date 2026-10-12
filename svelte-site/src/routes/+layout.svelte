<script>
	import '../app.css';
	import SiteHeader from '#lib/components/SiteHeader.svelte';
	import SiteFooter from '#lib/components/SiteFooter.svelte';
	import '#lib/styles/app-shell.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/images/image3-2.png" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Jost:wght@300;400;500&display=swap"
	/>
	<meta name="theme-color" content="#0b0908" />
</svelte:head>

<a class="skip" href="#main">Skip to content</a>

<SiteHeader />

<main id="main">
	{@render children()}
</main>

<SiteFooter />

