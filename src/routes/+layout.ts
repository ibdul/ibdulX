export const prerender = true;

import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = ({url})=>{
    return {
        pathname:url.pathname,

        // profile
        certifications:[
            'Google IT Support',
            'Google IT Automation',
            'Jobberman Soft Skills course'
        ],
        contact_infos:[
            { title: 'Phone', values: ['+234 903 900 6517'], link_prefix: 'tel:' },
            { title: 'Email', values: ['i.ibrahim.abdulhameed@gmail.com'], link_prefix: 'mailto:' },
            { title: 'Twitter', values: ['iAmIbdul'], link_prefix: 'https://twitter.com/' },
            { title: 'GitHub', values: ['ibdul'], link_prefix: 'https://github.com/' }
        ],
        hobbies:['Learning', 'Arts', 'Movies', 'Travelling', 'Boxing', 'Skating'],
        interests: [
            '3D web',
            'Web3 and DAPS',
            'Facinating design',
            'Innovative ideas',
            "Ego crushing challenges :)",
            'Space',
            'Systems design',
            "..."
        ],
        jobs:[
            {
                company: 'Liberty Assured',
                start_date: new Date('10/10/2023'),
                is_still_here: true,
                end_date: new Date(),
                description: `Liberty Assured is a Licensed Financial Institution that is led by Individuals led by passion to bridge the divide in every economic spheres. We seek to bring Financial Liberty and Freedom by filling the void within the business sector ranging from Nano-Micro businesses to SME and personal finances. Customer growth and Satisfaction is our Success Story.`,
                projects: [
                    {
                        title: 'GetLinked AI',
                        description: `An AI powered appliacation that allows employers find and filter talents seamslessly. The application has many features and modules, including a Job Pipeline, Assessment and Interviews module, etc.`
                    },
                    {
                        title: 'Ajo Loans',
                        description: `This is a dashboard-style app that allows users of different classes manage loans. These user classes include borrowers, loan officers, loan agents, loan managers ...`
                    },
                ]
            },
            {
                company: 'MacGroups Tech',
                start_date: new Date('12/22/2023'),
                is_still_here: true,
                end_date: new Date(),
                description: `A full fledged agency that handles everything needed to turn an idea into a solution`,
                projects: [
                    {
                        title: 'Paul Bowles',
                        description: `A biographic-style website for American expatriate composer, author and translator, Paul Bowles.`
                    },
                    {
                        title: 'ADOLV',
                        description: `African Diaspora of Las Vagas portal website that allows members list businesses and engage with the community.`
                    },
                    {
                        title: 'Alexy Polska Tech',
                        description: `A gadget e-commerce website that allows users buy and earn from commissions.`
                    },
                ]
            },
            {
                company: 'Team-X',
                start_date: new Date('12/1/2018'),
                is_still_here: false,
                end_date: new Date('12/11/2023'),
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
        ],
        languages:['English', 'Hausa', 'Yoruba', 'Patois'],
        projects:[
            {
                title: 'ADOLV',
                brief: 'African Diaspora of Las Vagas portal website',
                technologies: ['Sveltekit', 'Tailwindcss', "ShadUI"],
            },
            {
                title: 'Cendam',
                brief: 'Logistics and business management Startup',
                technologies: ['Sveltekit', "GSAP", 'Tailwindcss', "ShadUI"],
            },
            {
                title: 'Tell',
                brief: 'Anonymous messages application. I built this to test my hands on a lot of FE and BE tech.',
                technologies: ['Sveltekit', "VueJS", "React", "AstroJS", "...", "Django", "Firebase", "Strapi", 'Tailwindcss', "ShadUI"],
            },
            {
                title: 'Shikkan AI',
                brief: 'Prize Winning AI Powered MRI scan analyzer. This was built as a solution for a Hackaton and it came in at second place',
                technologies: ['NextJS', 'Bootsrap CSS', "Autogon AI"],
            },
            {
                title: 'Paul Bowles',
                brief: 'A biographic-style website for American expatriate composer, author and translator, Paul Bowles.',
                technologies: ['VueJS', 'Tailwindcss', "GSAP"],
            },
            {
                title: 'Alexy Polska Tech',
                brief: 'E-commerce store for tech gadgets',
                technologies: ['VueJS', 'Tailwindcss'],
            },
            {
                title: 'GetLinked AI',
                brief: 'AI powered Talent hunting solutions.',
                technologies: ['NextJS', 'Tailwindcss', 'ShadUI', "ChatGPT"],
            },
            {
                title: 'Tawq Tools',
                brief: 'AI powered content managements solution.',
                technologies: ['Sveltekit', 'Tailwindcss', 'Parralax.js'],
            },
            {
                title: 'Exquise montres',
                brief: '3D watch configurator and store',
                technologies: ['ThreeJs', 'Nuxt js']
            },
            {
                title: 'Watchkings',
                brief: 'Luxury watch e-store',
                technologies: ['Wordpress', 'woocommerce']
            },
            {
                title: 'IGG',
                brief: 'Indomitable good grades informational website',
                technologies: ['Pug js', 'TailwindCSS', 'AOS', 'Gulp']
            },
            {
                title: '2go',
                brief: 'Websockets powered realtime chat app. This was an exploratory project to test, learn and build websocket powered apps.',
                technologies: ['Python', 'Django', 'Websockets']
            },
            {
                title: 'FaasShoes',
                brief: 'Animated shoes e-store',
                technologies: ['Gsap', 'Vue js']
            },
            {
                title: 'The great outdoors',
                brief: 'Design implementation of an adventure website. Just a random build of some dribbble design.',
                technologies: ['next js', 'TailwindCSS']
            },
            {
                title: 'Arounda',
                brief: 'Arounda website clone built just for the fun of it.',
                technologies: ['Sveltekit', 'TailwindCSS', 'AOS']
            },
            {
                title: 'Portfolio',
                brief: 'This website :)',
                technologies: ['Sveltekit', 'TailwindCSS', 'Gsap', 'Rellax js']
            }
        ],
        quotes:[
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
        ],
        skill_sets: [
            {
                title: 'Languages',
                skills: ['Javascript', 'Python', 'Rust', 'Solidity', 'Mathlab']
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
                    'Astro js',
                    'Pug/Jade',
                    'SASS/SCSS',
                    'TailwindCSS',
                    'Bootstrap CSS',
                    'GSAP',
                    'AOS',
                    'RellaxJs',
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
                skills: ['Git', "Github", 'Figma', 'Adobe XD']
            }
        ],
        values:[
            "Honor",
            'Honesty',
            'Progress',
            'Patience',
            'Growth',
            'Gratitude',
            'Collaboration',
            'Quality over quantity'
        ],
    }
}

export const trailingSlash = "always"
