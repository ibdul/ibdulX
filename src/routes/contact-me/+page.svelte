<script lang="ts">
	import { gsap } from 'gsap';
	// import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	// import Rellax from 'rellax';

	import { onMount } from 'svelte';

	const contact_infos = [
		{ title: 'Phone', values: ['+234 903 900 6517'], link_prefix: 'tel:' },
		{ title: 'Email', values: ['i.ibrahim.abdulhameed@gmail.com'], link_prefix: 'mailto:' },
		{ title: 'Twitter', values: ['iAmIbdul'], link_prefix: 'https://twitter.com/' },
		{ title: 'GitHub', values: ['ibdul'], link_prefix: 'https://github.com/' }
	];

	var tl = gsap.timeline({
		delay: 2
	});
	onMount(() => {
		tl.from('.contact-page .page_copy ', {
			autoAlpha: 0,
			y: 200,
			rotate: 30,
			ease: 'back.out(0.8)'
		}).from('.contact-page .card', {
			autoAlpha: 0,
			x: 200,
			scale: 0,
			stagger: 0.09,
			rotate: 30,
			ease: 'back.out(0.8)'
		});
	});
</script>

<svelte:head>
	<title>Contact | Ibrahim Abdulhameed</title>
</svelte:head>
<div class="container max-w-5xl flex justify-center items-center contact-page">
	<div class="grid grid-cols-3 gap-4">
		<div class="page_copy">
			<h1 class="text-2xl text-primary">Contact Me</h1>
			<p class="text-sm text-justify">
				Why still thinking about it?
				<br />
				Reach out to me using any of the provided contact information. I would love to hear from you
				<span class="text-primary">:)</span>
			</p>
		</div>
		<div class="col-span-2 grid grid-cols-2 gap-2">
			{#each contact_infos as contact_info}
				<div class="text-sm w-full card space-y-4">
					<h2 class="font-semibold">{contact_info.title}</h2>
					<div class="space-y-2">
						<ul>
							{#each contact_info.values as contact_info_value}
								<li>
									<a href={`${contact_info.link_prefix}${contact_info_value}`}
										>{contact_info_value}</a
									>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
