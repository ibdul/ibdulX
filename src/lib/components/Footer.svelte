<script>
	import { page } from '$app/stores';
	import { gsap } from 'gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';

	import { onMount } from 'svelte';

	gsap.registerPlugin(ScrollTrigger);

	onMount(() => {
		var footerTL = gsap.timeline({
			scrollTrigger: {
				start: -23
			}
		});

		footerTL
			.from('.footer_links_bg', {
				autoAlpha: 0
			})
			.from('.footer-link', {
				duration: 0.8,
				autoAlpha: 0,
				y: 60,
				stagger: 0.05,
				ease: 'back.out(1)'
			})
			.from('.footer-copy > *', {
				autoAlpha: 0,
				y: 10,
				stagger: 0.4,
				ease: 'back.out(0.4)'
			});
	});

	const page_links = [
		{ title: 'Home', href: '/' },
		{ title: 'Resume', href: '/resume' },
		{ title: 'Projects', href: '/projects' },
		{ title: 'Contact Me', href: '/contact-me' }
	];
</script>

<footer class="container max-w-5xl">
	<nav class="flex flex-col justify-between items-center gap-4 py-4">
		<ul
			class="footer_links_bg invisible flex items-center justify-center bg-slate-900 text-slate-100 w-full"
		>
			{#each page_links as link}
				<li class="footer-link invisible">
					<a
						href="#"
						class={`inline-block p-2 font-semibold text-sm transition-all ${
							$page.url.pathname == link.href ? 'text-red-500' : 'hover:text-red-700 hover:pb-4'
						}`}
					>
						{link.title}
					</a>
				</li>
			{/each}
		</ul>
		<div class="footer-copy group text-center">
			<div class="overflow-hidden invisible">
				<div
					class="text-sm font-bold group-hover:-translate-y-[20px] transition-all ease-in-out h-[20px]"
				>
					<h1>Ibrahim Abdulhameed.</h1>
					<h1 class="text-red-500">Ibdul.</h1>
				</div>
			</div>
			<p class="page-title text-xs lowercase font-semibold opacity-50 invisible">
				&copy; ibdul {new Date().getFullYear()}
			</p>
		</div>
	</nav>
</footer>
