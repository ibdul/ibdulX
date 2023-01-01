<script lang="ts">
	import Rellax from 'rellax';
	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';

	import { onDestroy, onMount } from 'svelte';

	import type { PageData } from './$types';
	export let data: PageData;

	const gsap_context = gsap.context(() => {});

	onMount(() => {
		const RELLAX = new Rellax('.rellax');

		ScrollTrigger.refresh();
		ScrollTrigger.update();

		gsap_context.add(() => {
			gsap.registerPlugin(ScrollTrigger);

			const cards: HTMLHtmlElement[] = gsap.utils.toArray('.card');

			cards.forEach((card, index) => {
				let decoration_tl = gsap.timeline({
					start: 'center bottom',
					delay: index * 0.03,
					ease: 'back.out(0.8)',
					scrollTrigger: {
						trigger: card,
						toggleActions: 'play pause resume reset'
					}
				});
				decoration_tl.from(card, {
					x: gsap.utils.random([-120, -220, 230, 130]),
					y: gsap.utils.random([-120, -220, 230, 130]),
					rotate: gsap.utils.random([-12, -22, 23, 13]),
					autoAlpha: 0
				});
			});
			const projects_tl = gsap.timeline({ scrollTrigger: {} });
		}, '.projects_page');
	});

	onDestroy(() => {
		gsap_context.revert();
	});
</script>

<svelte:head>
	<title>Projects | Ibrahim Abdulhameed</title>
</svelte:head>

<section class="max-w-3xl container text-center space-y-8 projects_page">
	{#each data.projects as project}
		<div class="space-y-4 relative border-primary border-b-2 !border-opacity-10">
			<div class="z-2">
				<div class="grid sm:grid-cols-2 gap-4 items-start">
					<div class="sm:col-span-2 w-full !p-1 card invisible">
						<a
							href={`/images/projects/${project.title.toLowerCase()} ${1}.png`}
							target="_blank"
							rel="noreferrer"
						>
							<img
								src={`/images/projects/${project.title.toLowerCase()} ${1}.png`}
								aria-hidden={true}
								alt={project.title}
							/>
						</a>
					</div>
					{#each [2, 3, 4, 1] as count}
						<div class={`w-full !p-1 card invisible ${count == 1 ? 'max-sm:max-w-0' : ''}`}>
							<a
								href={`/images/projects/${project.title.toLowerCase()} ${count}.png`}
								target="_blank"
								rel="noreferrer"
							>
								<img
									src={`/images/projects/${project.title.toLowerCase()} ${count}.png`}
									aria-hidden={true}
									alt={project.title}
								/>
							</a>
						</div>
					{/each}
				</div>
			</div>

			<div class="absolute -z-1 w-[90%] mt-40">
				<div class="grid grid-cols-4">
					<div class="rellax" data-rellax-speed="4">
						<div class="rotate-45 w-[120px] h-[120px] dark:bg-white/5 bg-slate-800/30" />
					</div>

					<div class="rellax" data-rellax-speed="2">
						<div class="rotate-45 w-[120px] h-[120px] mt-80 dark:bg-white/10 bg-slate-800/20" />
					</div>

					<div class="rellax" data-rellax-speed="6">
						<div class="rotate-45 w-[120px] h-[120px] mt-40 dark:bg-white/5 bg-slate-800/10" />
					</div>
					<div class="rellax" data-rellax-speed="1">
						<div class="rotate-45 w-[120px] h-[120px] mt-90 dark:bg-white/20 bg-slate-800/5" />
					</div>
					<div class="rellax" data-rellax-speed="8">
						<div class="rotate-45 w-[120px] h-[120px] mt-90 dark:bg-white/20 bg-slate-800/5" />
					</div>
				</div>
			</div>

			<div class="space-y-4 p-8">
				<h2 class="font-semibold">{project.title}</h2>
				<p>{project.brief}</p>
				<ul class="flex gap-4 justify-center text-xs">
					{#each project.technologies as technology}
						<li>{technology}</li>
					{/each}
				</ul>
			</div>
			<div class="absolute w-full z-3">
				<div class="grid grid-cols-3 gap-20">
					<div
						class="w-12 h-12 bg-slate-900/10 dark:bg-white/10 blur-md rounded-full rellax"
						data-rellax-speed={3}
					/>
					<div
						class="w-6 h-6 bg-slate-900/20 dark:bg-white/5 blur-md rounded-full rellax"
						data-rellax-speed={1}
					/>
					<div
						class="w-4 h-4 bg-slate-900/30 dark:bg-white/10 blur-md rounded-full rellax"
						data-rellax-speed={6}
					/>
				</div>
			</div>
		</div>
	{/each}
</section>
