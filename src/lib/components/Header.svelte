<script>
	import { page } from '$app/stores';
	import { gsap } from 'gsap';

	import { onMount } from 'svelte';

	onMount(() => {
		var headerTL = gsap.timeline();

		headerTL
			.from('.header-copy > *', {
				autoAlpha: 0,
				x: -1000,
				stagger: 0.4,
				ease: 'back.out(0.4)'
			})
			.from('.header-link', {
				autoAlpha: 0,
				duration: 0.8,
				y: -600,
				stagger: 0.05,
				ease: 'back.out(1)'
			});
	});

	const page_links = [
		{ title: 'Home', href: '/', text: 'about me' },
		{ title: 'Resume', href: '/resume', text: 'my resume' },
		{ title: 'Projects', href: '/projects', text: 'my projects' },
		{ title: 'Contact Me', href: '/contact-me', text: 'lets talk' }
	];
</script>

<header class="container max-w-5xl">
	<nav class="flex justify-between items-center py-5">
		<div class="header-copy group">
			<div class="overflow-hidden invisible">
				<div
					class="text-xl font-bold group-hover:-translate-y-[26px] transition-all ease-in-out h-[26px]"
				>
					<h1 class="text-primary">Ibdul.</h1>
					<h1>Ibrahim Abdulhameed.</h1>
				</div>
			</div>
			<p class="page-title text-xs lowercase font-semibold opacity-50 invisible">
				{page_links.find((item) => item.href == $page.url.pathname)?.text}
			</p>
		</div>
		<ul class="inline-flex items-center justify-center">
			{#each page_links as link}
				<li class="header-link invisible">
					<a
						href={link.href}
						class={`inline-block p-8 font-semibold text-sm transition-all ${
							$page.url.pathname == link.href ? 'text-primary' : 'hover:pb-4'
						}`}
					>
						{link.title}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>
