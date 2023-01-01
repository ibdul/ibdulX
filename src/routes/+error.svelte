<script lang="ts">
	import { page } from '$app/stores';

	import { gsap } from 'gsap';

	import { onDestroy, onMount } from 'svelte';

	let error_gsap_contexts: gsap.Context[] = [];

	onMount(() => {
		const error_gsap_context = gsap.context(() => {
			var errorTL = gsap.timeline();

			errorTL
				.from('.error_texts > *', {
					autoAlpha: 0,
					x: 1000,
					stagger: 0.4,
					ease: 'back.out(0.4)'
				})
				.from('.error_image', {
					autoAlpha: 0,
					y: -50,
					ease: 'back.out(1)'
				})
				.from(
					'.error_cards > *',
					{
						autoAlpha: 0,
						duration: 0.8,
						y: 100,
						stagger: 0.5,
						ease: 'back.out(1)'
					},
					'<0.2'
				);
		}, '.error_page');

		var errorTL2 = gsap.timeline({ repeat: -1, yoyo: true });
		errorTL2.to('.image_container', {
			y: 10,
			duration: 1.2,
			ease: 'ease-in-out'
		});
		errorTL2.to(
			'.error_cards',
			{
				y: '-4px',
				duration: 1,
				ease: 'ease-in-out'
			},
			'<'
		);

		error_gsap_contexts.push(error_gsap_context);
	});

	onDestroy(() => {
		error_gsap_contexts.forEach((context) => {
			context.revert();
		});
	});

	const error_images = ['error robot', 'homesick', 'spacesuit float', 'burnt out'];
</script>

<svelte:head>
	<title>{$page.status} | Ibdul</title>
</svelte:head>

<section class="error_page max-w-4xl container flex-1 grid grid-cols-2 items-center">
	<div class="w-[300px] relative">
		<div class="image_container">
			<img
				src={`/images/bitmoji/${error_images[Math.floor(Math.random() * error_images.length)]}.png`}
				alt="something went wrong"
				class="invisible error_image"
			/>
		</div>
		<div class="px-4 error_cards">
			<div
				class="invisible absolute bottom-3 right-0 !w-max card"
				style:opacity={`${80 + Math.floor(Math.random() * 50)}%`}
			>
				Error
			</div>
			<div
				class="invisible absolute bottom-5 !w-max card"
				style:opacity={`${80 + Math.floor(Math.random() * 50)}%`}
			>
				{$page.status}
			</div>
		</div>
	</div>
	<div class="flex flex-col gap-4 error_texts">
		<h1 class="invisible text-3xl font-semibold">
			Oops... <span class="text-red-500">We got a {$page.status}.</span>
		</h1>
		<div class="invisible text-sm">
			<p>Something went wrong ({$page.error?.message})</p>
			{#if $page.status == 404}
				<p>The page you seek does not exist.</p>
			{/if}
		</div>
		<p class="invisible">Return to <a href="/" class="font-semibold link">the homepage.</a></p>
	</div>
</section>
