<script lang="ts">
	import { gsap } from 'gsap';

	import { onDestroy, onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import type { PageData } from './$types';
	export let data: PageData;

	const resume_gsap_contexts: gsap.Context[] = [];

	onMount(() => {
		const resume_gsap_context = gsap.context(() => {
			var tl = gsap.timeline({
				delay: 2
			});

			tl.from('.card', {
				autoAlpha: 0,
				y: 200,
				rotate: 20,
				scale: 0,
				stagger: 0.09,
				ease: 'back.out(1)'
			});
		}, '.resume-page');

		resume_gsap_contexts.push(resume_gsap_context);
	});

	const skill_sets = data.skill_sets;
	const contact_infos = data.contact_infos;
	const jobs = data.jobs;
	const hobbies = data.hobbies;
	const interests = data.interests;
	const values = data.values;
	const certifications = data.certifications;
	const languages = data.languages;
	const quotes = data.quotes;

	let seen_quotes: { [key: number]: boolean } = {};

	let quote = getQuote();

	function getQuote() {
		if (Object.keys(seen_quotes).length == quotes.length) {
			seen_quotes = {};
		}
		let quote = quotes[Math.floor(quotes.length * Math.random())];

		while (!quote || seen_quotes[quote.id]) {
			quote = quotes[Math.floor(quotes.length * Math.random())];
		}
		seen_quotes[quote.id] = true;
		return quote;
	}
	onDestroy(() => {
		resume_gsap_contexts.forEach((context) => {
			context.revert();
		});
	});
</script>

<svelte:head>
	<title>Resume | Ibrahim Abdulhameed</title>
</svelte:head>

<section class="container max-w-5xl print:space-y-8 resume-page max-xl:px-4">
	<h1 class="text-[0px] font-semibold invisible print:visible print:text-2xl">
		Ibrahim Abdulhameed.
	</h1>
	<div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4 print:gap-0">
		<div class="w-full card invisible space-y-4">
			<h2 class="text-sm font-semibold">Basic Information</h2>
			<p class="leading-relaxed">
				I am <span class="text-primary font-semibold">Ibrahim Abdulhameed</span>, a full stack web
				developer who sees problem solving as <span class="text-primary font-semibold">an art</span>
				that requires creativity, consistency, skill, practice and a wide base of knowledge and experience
				to gain its
				<span class="text-primary font-semibold">mastery.</span>
			</p>
		</div>
		<div class="w-full card invisible space-y-4">
			<h2 class="text-sm font-semibold">Education</h2>
			<div class="space-y-2">
				<p class="font-bold">
					BTech. in <span class="text-primary">Computer Science</span>
				</p>
				<div class="text-sm space-y-1">
					<p>Federal University of Technology,<br /> Minna, Niger State,<br /> Nigeria.</p>
					<p class="italic text-right">2016 - 2022</p>
				</div>
			</div>
		</div>
		<div class="gap-4 max-sm:col-span-1 max-md:col-span-2 md:row-span-3 grid max-md:grid-cols-2">
			<div class="w-full card invisible space-y-4">
				<h2 class="text-sm font-semibold">Skills</h2>
				{#each skill_sets as skill_set}
					<div class="space-y-2">
						<h3 class="font-semibold">{skill_set.title}</h3>
						<ul class="ml-8 list-disc text-sm">
							{#each skill_set.skills as skill}
								<li>{skill}</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
			<div class="grid gap-4">
				<div class="w-full card invisible space-y-4">
					<h2 class="text-sm font-semibold">Preference</h2>
					<p class="leading-relaxed">
						I love to work in friendly, healthy environments where I can get to learn, teach and
						explore. A place where I can make friends that could help me grow into a better version
						of myself. This applies to both remote and in-office jobs. I would love to work in
						France someday. Seeing the quality of work that comes from there, I would love to learn
						from that as well.
					</p>
				</div>
				<div class="w-full flex-1 card invisible space-y-4">
					<h2 class="text-sm font-semibold">Quote</h2>
					{#key quote}
						<div in:fade class="space-y-1">
							<p class="text-sm text-justify">
								{quote.text}
							</p>
							<p class="italic text-right text-xs text-opacity-25">
								- {quote.author}.
							</p>
						</div>
					{/key}
					<button
						class="inline-flex justify-center items-center w-6 h-6 p-2 rounded-full hover:shadow-md"
						on:click={() => (quote = getQuote())}>&#128472;</button
					>
				</div>
			</div>
		</div>
		<div class="w-full card invisible sm:col-span-2 space-y-4 text-justify">
			<h2 class="text-sm font-semibold">Work History</h2>
			<p>
				Over the years, I have be fortunate enough to work on a few projects many of which were
				freelance. Some of my past jobs are:
			</p>
			<div class="space-y-6">
				{#each jobs as job}
					<div class="space-y-2">
						<div class="flex items-center justify-between">
							<h3 class="font-semibold text-primary">{job.company}</h3>
							<p class="italic text-opacity-20 text-sm text-right">
								{job.start_date.getMonth() + 1}/{job.start_date.getFullYear()} - {job.is_still_here
									? 'present'
									: `${job.end_date.getMonth() + 1}/${job.end_date.getFullYear()}`}
							</p>
						</div>
						<p>{job.description}</p>
						<p>Some projects:</p>
						<ul class="ml-8 list-disc space-y-1">
							{#each job.projects as job_project}
								<li>
									<h2 class="font-semibold">{job_project.title}</h2>
									<p>{job_project.description}</p>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</div>
		<div class="row-span-3 gap-4 flex flex-col">
			<div class="w-full card invisible space-y-4">
				<h2 class="text-sm font-semibold">Contact Info and Links</h2>
				{#each contact_infos as contact_info}
					<div class="space-y-2">
						<h3 class="font-semibold">{contact_info.title}</h3>
						<ul class="ml-8 list-disc text-sm">
							{#each contact_info.values as contact_info_value}
								<li>
									<a href={`${contact_info.link_prefix}${contact_info_value}`}
										>{contact_info_value}</a
									>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
			<div class="w-full flex-1 card invisible space-y-4">
				<h2 class="text-sm font-semibold">Hobbies</h2>
				<ul class="ml-8 list-disc text-sm">
					{#each hobbies as hobby}
						<li>{hobby}</li>
					{/each}
				</ul>
			</div>
		</div>
		<div class="w-full card invisible space-y-2">
			<h2 class="text-sm font-semibold">Interests</h2>
			<ul class="ml-8 list-disc text-sm">
				{#each interests as interest}
					<li>{interest}</li>
				{/each}
			</ul>
		</div>
		<div class="w-full card invisible space-y-2">
			<h2 class="text-sm font-semibold">Values</h2>
			<ul class="ml-8 list-disc text-sm">
				{#each values as value}
					<li>{value}</li>
				{/each}
			</ul>
		</div>
		<div class="flex flex-col gap-4">
			<div class="w-full card invisible space-y-2">
				<h2 class="text-sm font-semibold">Certifications</h2>
				<ul class="ml-8 list-disc text-sm">
					{#each certifications as certification}
						<li>{certification}</li>
					{/each}
				</ul>
			</div>
			<div class="w-full card invisible space-y-2">
				<h2 class="text-sm font-semibold">Languages</h2>
				<ul class="ml-8 list-disc text-sm">
					{#each languages as language}
						<li>{language}</li>
					{/each}
				</ul>
			</div>
		</div>
		<div
			class="w-full sm:col-span-2 card invisible !bg-slate-900 bg-opacity-80 text-slate-100 backdrop-blur-md shadow-xl rounded-md p-6 space-y-2 text-center"
		>
			<h2 class="text-xl text-primary font-semibold">Thank you for your time.</h2>
			<p class="text-sm ">Looking forward to talking to you.</p>
			<div class="print:max-h-0 print:invisible">
				<button class="text-sm border-b link" on:click={() => window.print()}
					>print my resume</button
				>
			</div>
		</div>
	</div>
</section>
