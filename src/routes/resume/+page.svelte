<script>
	import { gsap } from 'gsap';
	// import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	// import Rellax from 'rellax';

	import { onMount } from 'svelte';

	onMount(() => {
		// var LAX = new Rellax('.rellax');

		var tl = gsap.timeline({
			delay: 2
		});

		tl.from('.resume-page .card', {
			autoAlpha: 0,
			y: 200,
			rotate: 20,
			scale: 0,
			stagger: 0.09,
			ease: 'back.out(1)'
		});

		// gsap.registerPlugin(ScrollTrigger);
		// let cards = gsap.utils.toArray('.resume-page .card');

		// cards.forEach((card, index) => {
		// 	let resume_tl = gsap.timeline({
		// 		duration: 0.5,
		// 		delay: index / 20,
		// 		start: '-200 +200',
		// 		scrollTrigger: {
		// 			trigger: card
		// 		}
		// 	});
		// 	resume_tl.from(card, {
		// 		autoAlpha: 0,
		// 		y: 200,
		// 		ease: 'back.out(0.4)'
		// 	});
		// });
	});

	const skill_sets = [
		{
			title: 'Languages',
			skills: ['Javascript', 'Python', 'Solidity', 'Mathlab']
		},
		{
			title: 'Frontend',
			skills: ['HTML5', 'CSS3', 'ES6', 'Typescript']
		},
		{
			title: 'Frameworks and Libraries',
			skills: [
				'Vue js',
				'Svelte js',
				'React js',
				'Nuxt js',
				'Sveltekit',
				'Next js',
				'Pug/Jade',
				'SASS/SCSS',
				'Axios',
				'TailwindCSS',
				'Bootstrap CSS',
				'GSAP',
				'AOS',
				'Rellax',
				'ThreeJs'
			]
		},
		{
			title: 'Backend',
			skills: ['Django', 'NodeJs', 'Express']
		},
		{
			title: 'Frameworks and Libraries',
			skills: ['Websockets', 'REST']
		},
		{
			title: 'Others',
			skills: ['Git', 'Figma', 'Adobe XD']
		}
	];
	const contact_infos = [
		{ title: 'Phone', values: ['+234 903 900 6517'], link_prefix: 'tel:' },
		{ title: 'Email', values: ['i.ibrahim.abdulhameed@gmail.com'], link_prefix: 'mailto:' },
		{ title: 'Twitter', values: ['iAmIbdul'], link_prefix: 'https://twitter.com/' },
		{ title: 'GitHub', values: ['ibdul'], link_prefix: 'https://github.com/' }
	];
	const jobs = [
		{
			company: 'Team-X',
			description: `A dynamic team whose main purpose is to collaborate on building solutions to clients' problems. The team brainstorms on the roadmap to be taken to solve the problem, everyone gets to explore and learn in the process.`,
			projects: [
				{
					title: 'FlashFood',
					description: `A fast food store that allows the client manage the menus, prices, inventory etc. The client needed this for local hosting in thier store. The customers of the client could browse the menu, place orders and monitor the process of their order.`
				},
				{
					title: 'MiTwitz',
					description: `A social media aplication, where users could register, find other users, view profiles, send messages, make posts, react to posts and so on.`
				},
				{
					title: 'Assignment portal',
					description: `An extension to a school's website to allow teachers serve, manage and organize assignments better, they could set deadlines, send marks, etc. The students could find and submit assignments within the timeframe, see their scores, apply for reviews etc.`
				},
				{
					title: 'FaasBlog',
					description: `A blogging platform that allows users create blogs using markdown. They could also monitor the activity and interactions on their blogs. Blogs could get blocked or sensored. Readers could follow their favorite writers.`
				}
			]
		},
		{
			company: 'Freelance',
			description: `As mentioned before, the bulk of my works have been freelance based. Most times I had to work remotely with my own tools and many times the clients do not care about the technology to be used, I was left to choose with respect to my knowledge and the project's requirements.`,
			projects: [
				{
					title: 'Portfolio Services',
					description: `Clients would generally require that a portfolio or some sort of informative website be built for them. Schools, Companies, and Individuals are the bulk of the clients for this.`
				},
				{
					title: 'Others',
					description: `There are so many other types of websites clients desire, they reach out and I research on the intricacies, the structures etc of that kind of website. That allows me to learn more, broaden my knowledge and gain more experience. Most of the clients would want something that would eventually make them more profits, get more engagemt, or just satisfy their customers better.`
				}
			]
		}
	];
	const interests = ['Learning', 'Arts', 'Gaming', 'Movies', 'Travelling', 'Boxing'];
	const values = [
		'Honesty',
		'Progress',
		'Patience',
		'Growth',
		'Gratitude',
		'Collaboration',
		'Quality over quantity'
	];
	const certifications = [
		'Google IT Support',
		'Google IT Automation',
		'Jobberman Soft Skills course'
	];
	const languages = ['English', 'Hausa', 'Yoruba', 'Patois'];
</script>

<svelte:head>
	<title>Resume | Ibrahim Abdulhameed</title>
</svelte:head>

<section class="container max-w-5xl print:space-y-8 resume-page">
	<h1 class="text-[0px] font-semibold invisible print:visible print:text-2xl">
		Ibrahim Abdulhameed.
	</h1>
	<div class="grid grid-cols-3 gap-4 print:gap-0">
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
		<div class="gap-4 row-span-3 flex flex-col">
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
			<div class="w-full card invisible space-y-4">
				<h2 class="text-sm font-semibold">Preference</h2>
				<p class="leading-relaxed">
					I love to work in friendly, healthy environments where I can get to learn, teach and
					explore. A place where I can make friends that could help me grow into a better version of
					myself. This applies to both remote and in-office jobs. I would love to work in France
					someday. Seeing the quality of work that comes from there, I would love to learn from that
					as well.
				</p>
			</div>
			<div class="w-full flex-1 card invisible space-y-4" />
		</div>
		<div class="w-full card invisible col-span-2 space-y-4 text-justify">
			<h2 class="text-sm font-semibold">Work History</h2>
			<p>
				Over the years, I have be fortunate enough to work on a few projects many of which were
				freelance. Some of my past jobs are:
			</p>
			<div class="space-y-6">
				{#each jobs as job}
					<div class="space-y-2">
						<h3 class="font-semibold text-primary">{job.company}</h3>
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
			<div class="w-full flex-1 card invisible space-y-4" />
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
			class="w-full col-span-2 card invisible !bg-slate-900 bg-opacity-80 text-slate-100 backdrop-blur-md shadow-xl rounded-md p-6 space-y-2 text-center"
		>
			<h2 class="text-xl text-primary font-semibold">Thank you for your time.</h2>
			<p class="text-sm ">Looking forward to talking to you.</p>
			<div class="hover:opacity-60 print:max-h-0 print:invisible">
				<button class="text-sm border-b border-red-500 inline" on:click={() => window.print()}
					>print my resume</button
				>
			</div>
		</div>
	</div>
</section>
