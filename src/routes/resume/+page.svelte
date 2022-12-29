<script lang="ts">
	import { gsap } from 'gsap';
	// import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	// import Rellax from 'rellax';

	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

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
			start_date: new Date('12/1/2018'),
			is_still_here: true,
			end_date: new Date(),
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
			start_date: new Date('10/1/2019'),
			is_still_here: true,
			end_date: new Date(),
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
	const hobbies = ['Learning', 'Arts', 'Gaming', 'Movies', 'Travelling', 'Boxing'];
	const interests = [
		'3D web',
		'Web3 and DAPS',
		'Facinating design',
		'Innovative ideas',
		'Space',
		'Systems design'
	];
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
	const quotes = [
		{
			id: 0,
			text: 'The only place success comes before work is in the dictionary.',
			author: 'Vince Lambardi'
		},
		{
			id: 1,
			text: "Even if you're on the right track, you would get run over if you just sit there.",
			author: 'Will Rogers'
		},
		{
			id: 2,
			text: 'Be like a postage stamp, stick to a thing till you get there.',
			author: 'Josh Billings'
		},
		{
			id: 3,
			text: 'Love is a dividend of sweat, the more you sweat, the luckier you get.',
			author: 'Ray Kroc'
		},
		{
			id: 4,
			text: 'It is better to have one person working with you than three people working for you.',
			author: 'Dwight D. Eisenhower'
		},
		{
			id: 5,
			text: 'People who never do any more than they get paid for, never get paid for any more than they do.',
			author: 'Elbert Hubbard'
		},
		{
			id: 6,
			text: 'If hard work is the key to success, most people would rather pick the lock.',
			author: 'Claude McDonald'
		},
		{
			id: 7,
			text: "The easiest job in the world is to be coroner. Surgery on dead people. What's the worst thing that could happen? If everything went wrong, maybe you'd get a pulse.",
			author: 'Dennis Miller'
		},
		{
			id: 8,
			text: "Everyday I get up and look through the Forbes list of the richest people in America. If I'm not there, I go to work.",
			author: 'Robert Orben'
		},
		{
			id: 9,
			text: 'Delegate your work. Stop spending dollar time on penny jobs.',
			author: 'Mary Kay Ash'
		},
		{
			id: 10,
			text: 'The closest to perfection a person ever comes is when he fills out a job application form.',
			author: 'Stanley J. Randal'
		},
		{
			id: 11,
			text: 'Find a job you like and you add five days to every week.',
			author: 'H. Jackson Brown. Jr'
		},
		{
			id: 12,
			text: 'Sometimes I spend the whole meeting wondering how they got the big meeting table throught the door.',
			author: 'Anonymous'
		},
		{
			id: 13,
			text: 'An expert is a man who has made all the mistakes which can be made in a very narrow field.',
			author: 'Niels Bohr'
		},
		{
			id: 14,
			text: "It's just a job. Grass grows, birds fly, waves pound the sand, I beat people up.",
			author: 'Muhammad Ali'
		},
		{
			id: 15,
			text: 'My boss told me to start evey presentation with a joke. The first slide was my paycheck.',
			author: 'Anonymous'
		},
		{
			id: 16,
			text: "A lot of fellows nowadays have a B.A., M.D., or Ph.D. Unfortunately, they don't have a J.O.B.",
			author: 'Fats Domino'
		},
		{
			id: 17,
			text: "I've got all the money I'll ever need if I die by four o'clock.",
			author: 'Henry Youngman'
		},
		{
			id: 18,
			text: 'When I was 16 I worked in a pet store, and they fired me because ... they had three snakes, and one day I braided them.',
			author: 'Steven Alexander Wright'
		},
		{
			id: 19,
			text: "I used to work at McDonald's making minimum wage. You know what that means? You know what your boss was trying to say? It's like, 'Hey if I could pay you less, I would. But it is against the law'.",
			author: 'Chris Rock'
		},
		{
			id: 20,
			text: "Where people aren't having fun, they seldom produce good work.",
			author: 'David Ogilvy'
		},
		{
			id: 21,
			text: "If you think you're too small to be effective, you have never been in the dark with a mosquito.",
			author: 'Betty Reese'
		},
		{
			id: 22,
			text: 'Oppurtunity is missed by most people because it is dressed in overalls and looks like work.',
			author: 'Thomas Edison'
		},
		{
			id: 23,
			text: "Leaders who don't listen will eventually be surrounded by people who have nothing to say.",
			author: 'Andy Stanley'
		},
		{
			id: 24,
			text: "If a man smiles all the time, he probably sells something that doesn't work.",
			author: 'Woody Allen'
		},
		{
			id: 25,
			text: 'An expert is a man who tells you a simple thing in a confused way in such a fashion as to make you think the confusion is your fault.',
			author: 'William Castle'
		},
		{
			id: 26,
			text: 'A diamond is merely a lump of coal that did well under pressure.',
			author: 'Henry Kissenger'
		},
		{
			id: 27,
			text: "If at first you don't succeed, then skydiving definitely isn't for you.",
			author: 'Steve Wright'
		},
		{
			id: 28,
			text: "Hard work spotlights the character of people. Some turn up their sleeves, some turn up their noses, and some don't turn up at all.",
			author: 'Sam Ewing'
		},
		{
			id: 29,
			text: "I don't want any yes-men around me. I want everyone to tell me the truth even if it costs him his job.",
			author: 'Samuel Goldwyn'
		},
		{
			id: 30,
			text: "Learn from the mistakes of others. You can't live long enough to make them all yourself.",
			author: 'Anonymous'
		},
		{
			id: 31,
			text: "Whenever you are asked if you can do a job, tell 'em 'certailnly, I can!' then get busy and find out how to do it.",
			author: 'Theodore Roosevelte'
		},
		{
			id: 32,
			text: 'The fellow who never makes a mistake takes his orders from one who does.',
			author: 'Anonymous'
		},
		{
			id: 33,
			text: 'God put me on this Earth to accomplish a certain number of things. Right now, I am so far behind I will never die.',
			author: 'Bill Waterson'
		}
	];
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
		<div class="w-full card invisible col-span-2 space-y-4 text-justify">
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
			class="w-full col-span-2 card invisible !bg-slate-900 bg-opacity-80 text-slate-100 backdrop-blur-md shadow-xl rounded-md p-6 space-y-2 text-center"
		>
			<h2 class="text-xl text-primary font-semibold">Thank you for your time.</h2>
			<p class="text-sm ">Looking forward to talking to you.</p>
			<div class="hover:opacity-60 print:max-h-0 print:invisible">
				<button class="text-sm border-b border-primary inline" on:click={() => window.print()}
					>print my resume</button
				>
			</div>
		</div>
	</div>
</section>
