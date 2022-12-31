<script lang="ts">
	import Rellax from 'rellax';
	import { onMount } from 'svelte';

	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';

	onMount(() => {
		const RELLAX = new Rellax('.rellax');
		gsap.registerPlugin(ScrollTrigger);

		const home_page_tl = gsap
			.timeline()
			.from('.hero .text', {
				y: 200,
				stagger: 0.3,
				ease: 'back.out(.8)',
				duration: 1
			})
			.from('.hero-image', {
				autoAlpha: 0,
				y: 500,
				rotate: 20
			})
			.from(
				'.hero .hero-skill',
				{
					y: 200,
					stagger: 0.5
				},
				'<'
			)
			.from(
				'.hero .skill-dot',
				{
					scale: 0,
					stagger: 0.5
				},
				'-=.8'
			)
			.to('.hero-skills', {
				gap: 2,
				duration: 0.2
			});

		const intro_texts: HTMLHtmlElement[] = gsap.utils.toArray('.brief-intro > *');
		intro_texts.forEach((intro_text, index) => {
			gsap
				.timeline({
					scrollTrigger: { trigger: '.brief-intro', toggleActions: 'play pause resume reset' }
				})
				.from(intro_text, {
					y: 500,
					ease: 'ease.out(0.8)',
					autoAlpha: 0,
					delay: (index + 1) / 10
				});
		});
		const project_cards: HTMLHtmlElement[] = gsap.utils.toArray('.project_card');
		project_cards.forEach((project_card) => {
			gsap
				.timeline({
					scrollTrigger: {
						trigger: project_card,
						start: 'center bottom',
						toggleActions: 'play pause resume reset'
					}
				})
				.from(project_card, {
					x: 500,
					rotate: -30,
					autoAlpha: 0
				});
		});
		const big_project_cards: HTMLHtmlElement[] = gsap.utils.toArray('.project_card-big');
		big_project_cards.forEach((big_project_cards) => {
			gsap
				.timeline({
					scrollTrigger: { trigger: big_project_cards, toggleActions: 'play pause resume reset' }
				})
				.from(big_project_cards, {
					x: -500,
					rotate: 20,
					delay: 0.3,
					autoAlpha: 0
				});
		});
	});
	const skill_sets = [
		{
			title: 'Languages',
			skills: ['Javascript', 'Python', 'Solidity', 'Mathlab']
		},
		{
			title: 'Frontend',
			skills: ['Vue js', 'Svelte js', 'React js', 'Nuxt js', 'Sveltekit']
		},
		{
			title: 'Backend',
			skills: ['Django', 'NodeJs', 'Express']
		}
	];
	const projects = [
		{
			title: '2go',
			brief: 'websockets powered realtime chat app',
			technologies: ['Python', 'Django', 'Websockets']
		},
		{
			title: 'Exquise montres',
			brief: '3D watch configurator and store',
			technologies: ['ThreeJs', 'Nuxt js']
		},
		{
			title: 'FaasShoes',
			brief: 'Animated shoes store',
			technologies: ['Gsap', 'Vue js']
		},
		{
			title: 'Watchkings',
			brief: 'Luxury watch store',
			technologies: ['Wordpress', 'woocommerce']
		},
		{
			title: 'IGG',
			brief: 'indomitable good grades informational website',
			technologies: ['Pug js', 'TailwindCSS', 'AOS', 'Gulp']
		},
		{
			title: 'The great outdoors',
			brief: 'design implementation of an adventure website',
			technologies: ['next js', 'TailwindCSS']
		},
		{
			title: 'Arounda',
			brief: 'Arounda website clone',
			technologies: ['Sveltekit', 'TailwindCSS', 'AOS']
		},
		{
			title: 'Portfolio',
			brief: 'This website :)',
			technologies: ['Sveltekit', 'TailwindCSS', 'Gsap', 'Rellax js']
		}
	];
</script>

<svelte:head>
	<title>Ibrahim Abdulhameed</title>
</svelte:head>

<div class="home_page flex-1">
	<section class="relative">
		<div class="container max-w-5xl hero min-h-[70vh] flex justify-center items-center text-center">
			<div class="flex flex-col justify-center">
				<div class="drop-shadow-lg">
					<div class="overflow-hidden">
						<h3 class="text text-lg">Hello there, I am</h3>
					</div>
					<div class="overflow-hidden">
						<h1 class="text text-6xl">Ibrahim</h1>
					</div>
					<div class="overflow-hidden">
						<h1 class="text text-6xl opacity-80 dark:opacity-70">Abdulhameed</h1>
					</div>
				</div>
				<div class="flex gap-4 items-center overflow-hidden hero-skills">
					<p class="font-semibold hero-skill">A developer</p>
					<p class="text-6xl skill-dot">&middot;</p>
					<p class="font-semibold hero-skill">A creative</p>
					<p class="text-6xl skill-dot">&middot;</p>
					<p class="font-semibold hero-skill">A problem solver</p>
					<p class="text-6xl skill-dot">&middot;</p>
					<p class="font-semibold hero-skill">A team player</p>
				</div>
			</div>
		</div>
	</section>
	<img
		src="/images/bitmoji/hi.png"
		alt="hi"
		class="hero-image ml-auto mr-12 w-[20%] rellax -mt-30"
		data-rellax-speed={4}
	/>
	<section>
		<div class="py-20 max-w-5xl container">
			<div class="grid grid-cols-3 brief-intro gap-4">
				<div class="card-inverted">
					<h3 class="text-xl font-semibold">Motivation</h3>
					<p>
						I enjoy doing what I do. Having oppurtunities to learn is also something I have found
						rewarding and learnt to love. There's a lot to lose if I don't go on. This is why I live
						to do this, everyday!
					</p>
				</div>
				<div class="card-inverted">
					<h3 class="text-xl font-semibold">Work choices</h3>
					<p>
						New challengs, solving problems, progressive work, ego crushing challenges :),
						innovative ideas, creativity, interesting perspectives and artistry are amongst the
						things I look for in projects I join in.
					</p>
				</div>
				<div class="card-inverted">
					<h3 class="text-xl font-semibold">Values</h3>
					<p>Honor, Honesty, Respect,</p>
				</div>
			</div>
		</div>
		<div class="rellax" data-rellax-speed={4}>
			<!-- <img
				src="/images/bitmoji/perseverance.png"
				alt="pushing a boulder up a hill"
				class="shadow-md w-[20%] mx-auto opacity-10 hover:opacity-100"
			/> -->
		</div>
	</section>
	<div class="max-w-4xl container space-y-20">
		<div class="py-20">
			<div class="grid grid-cols-2 gap-8">
				<div class="p-4 sticky top-0 h-max text-right">
					<h2 class="text-3xl font-semibold">Some of my skills</h2>
					<p>Let's see a nonExhaustive list of skills I have gathered over the years</p>
					<a href="/projects/" class="border-b pb-1 hover:pb-0 text-sm transition-all lowercase">
						See others
					</a>
				</div>
				<div class="relative">
					<div
						class="bg-[url('/images/bitmoji/halo.png')] bg-contain bg-center absolute inset-0 opacity-70"
					/>
					<ul class="relative grid grid-cols-5 text-center gap-4">
						{#each skill_sets as skill_set}
							{#each skill_set.skills as skill}
								<div class="">
									<div
										class="!w-max card rellax"
										data-rellax-speed={Math.random() * 6}
										data-rellax-percentage={Math.random() * 0.6}
										style:opacity={`${50 + Math.floor(Math.random() * 50)}%`}
										style:margin-left={`${Math.floor(Math.random() * 5)}px`}
										style:margin-top={`${Math.floor(Math.random() * 38)}px`}
										style:margin-bottom={`${Math.floor(Math.random() * 30)}px`}
									>
										<li>- {skill}</li>
									</div>
								</div>
							{/each}
						{/each}
					</ul>
				</div>
			</div>
		</div>
		<div class="py-20">
			<div class="">
				<div class="p-4 mb-20 text-right">
					<h2 class="text-3xl font-semibold">Some of my projects</h2>
					<p>Enjoy.</p>
					<a href="/projects/" class="border-b pb-1 hover:pb-0 text-sm transition-all lowercase">
						See others
					</a>
				</div>
				<div class="mt-20">
					<ul class="grid grid-cols-3 text-center gap-2">
						<li
							class="rellax  space-y-10 col-span-2 opacity-90 hover:opacity-100 transition-all"
							data-rellax-speed={1}
						>
							{#each projects as project}
								<div class="!p-1 card project_card-big">
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
							{/each}
						</li>
						<li
							class="rellax space-y-6 opacity-90 hover:opacity-100 transition-all"
							data-rellax-percentage={0.3}
							data-rellax-speed={6}
						>
							{#each projects as project}
								<div class="space-y-2">
									{#each [2, 3] as count}
										<div class="!p-1 card project_card">
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
							{/each}
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
