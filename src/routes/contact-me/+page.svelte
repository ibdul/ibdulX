<script lang="ts">
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	import type { PageData } from './$types';
	export let data: PageData;

	const contact_infos = data.contact_infos;

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
		<div class="page_copy invisible">
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
				<div class="invisible text-sm w-full card space-y-4">
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
