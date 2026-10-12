<script>
	import { page } from '$app/state';
	import { site } from '#lib/data/site.js';
	import '#lib/styles/site-header.css';

	let open = $state(false);

	/** @param {string} href */
	const isCurrent = (href) =>
		href === '/' ? page.url.pathname === '/' : page.url.pathname.startsWith(href);
</script>

<header class="site-masthead">
	<div class="page site-masthead__inner">
		<a class="brand" href="/" onclick={() => (open = false)}>
			<span class="brand__mark">
				<img src="/images/image3-2.png" alt="" width="800" height="800" />
			</span>
			<span class="brand__words">
				<span class="brand__name">Steakations</span>
				<span class="brand__sub">Steven &amp; Lauren</span>
			</span>
		</a>

		<button
			class="burger"
			type="button"
			aria-expanded={open}
			aria-controls="site-nav"
			onclick={() => (open = !open)}
		>
			<span class="burger__bars" class:is-open={open} aria-hidden="true"></span>
			<span class="burger__label">{open ? 'Close' : 'Menu'}</span>
		</button>

		<nav id="site-nav" class="nav" class:is-open={open} aria-label="Primary">
			<ul>
				{#each site.nav as item (item.href)}
					<li>
						<a
							href={item.href}
							aria-current={isCurrent(item.href) ? 'page' : undefined}
							onclick={() => (open = false)}
						>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
	<div class="site-masthead__edge" aria-hidden="true"></div>
</header>

