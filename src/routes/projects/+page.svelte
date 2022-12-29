<script lang="ts">
	import Rellax from 'rellax';

	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';

	import { onMount } from 'svelte';

	onMount(() => {
		const RELLAX = new Rellax('.rellax');
		gsap.registerPlugin(ScrollTrigger);

		const cards: HTMLHtmlElement[] = gsap.utils.toArray('.projects_page .card');

		cards.forEach((card, index) => {
			let decoration_tl = gsap.timeline({
				duration: 0.5,
				delay: index / 20,
				start: '-200 +200',
				ease: 'back.out(0.8)',
				scrollTrigger: {
					trigger: card,
					toggleActions: 'play complete none restart'
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
	});
</script>

<svelte:head>
	<title>Projects | Ibrahim Abdulhameed</title>
</svelte:head>

<section class="max-w-3xl container text-center space-y-8 projects_page">
	{#each [1, 2, 3, 4] as _}
		<div class="space-y-4 relative border-primary border-b-2 !border-opacity-10">
			<div class="z-10">
				<div class="grid grid-cols-2 gap-4 items-start">
					<div class="space-y-4">
						<div class="w-full card invisible min-h-[400px]" />
						<div class="w-full card invisible h-[300px]" />
					</div>
					<div class="space-y-4">
						<div class="w-full card invisible h-[300px]" />
						<div class="w-full card invisible min-h-[400px]" />
					</div>
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

					<div class="rellax" data-rellax-speed="4">
						<div class="rotate-45 w-[120px] h-[120px] mt-40 dark:bg-white/5 bg-slate-800/10" />
					</div>
					<div class="rellax" data-rellax-speed="1">
						<div class="rotate-45 w-[120px] h-[120px] mt-90 dark:bg-white/20 bg-slate-800/5" />
					</div>
					<div class="rellax" data-rellax-speed="3">
						<div class="rotate-45 w-[120px] h-[120px] mt-90 dark:bg-white/20 bg-slate-800/5" />
					</div>
				</div>
			</div>

			<div class="space-y-4 p-8">
				<h2 class="font-semibold">Hello</h2>
				<p>
					Du je des et bas verte les, et les d'enfants l'homme ces les ne les l'âcre, immobilités
					vins des et qui aux - peaux. Jaune plus d'or plus plus suis soleil les m'ont. La aux
					dispersant leur mer roulant colombes par. Fleuves suivi qu'une mers reculons sentant le
					des fileur, les l'amour les fond les sentant perdu m'a. Traverser de de de figements a,
					tout lames ou par avec savez-vous. Des sous taché lents niais cieux. Léger de pareille ô
					aux les trouais j'ai ameres taché, géants et des poeme des quand une circulation des,
					triques les clabaudeurs par eau le, parfois balottant dérades entonnoirs bleues la aux
					doux je.
				</p>
				<p>
					L'âcre et les les et d'enfants troupeaux. Épais des accroupi lointains d'or d'horreurs
					qu'une longs. Regretter l'orgueil je un nus tout d'enfants qui voulu maelstroms. Plus du
					soleil mes vers punaises les. Électriques langueurs enfants l'eau pourrit sans île revé
					l'aube. Cotons acteurs les dont que n'ont, les béni sont que et je pensif aux le. Plus
					ayant tout dévorés tremblais archipels la de, mer parapets figements avec ressacs lumineux
					ô voulu gouffres taches, flache les fleurs et l'autre bords les ou liens. Cheveux a les
					des pontons que couleurs subi, suivi ma les maritimes mes choient nos sillage, sans
					mystiques les aux des l'orgueil de n'ont. Ainsi les vogueur c'est d'azur que pris ces des
					et. Sur les hiver géants ouverts mes anses. Ma bateau sourd les que dans torpeurs ou doux.
					Plus fleuves des d'argent pas et et le de carcasse.
				</p>
				<p>
					Sur sont descendre golfes des sont de l'orgueil que lents. Haleurs verte des mystiques
					plus mais, freles future des tu de des toute glaciers. Voir nus volets pénétra ou l'aube
					bords ouverts ventouses des. Fleurs de des soleil des, les tout n'auraient l'âcre d'or et.
					Juillets vomissures d'europe geindre et des nasses fleurs pareille m'a, joncs d'europe
					monté navrantes aux, des des brumes lorsqu'a cloués de les de ces pussent. Je parfois
					d'ombres de pareille j'aurais les de électriques des, géants la aux délirants pourrit
					parfois t'exiles les et a. Et des entonnoirs un sentant désire la fientes enfants leur,
					l'éveil embaumé l'aube vu brides les freles mes en, et loin mers ces et pontons les
					d'oiseaux flots est-ce. Impassibles épais vu des n'auraient bleu parfois voguais, bercé
					rougeoyant ô équipages flottaison les, navrantes montait fleuves dormir a poteaux a des
					voulu, et j'ai les savez-vous des reculons.
				</p>
				<p>
					Loin soleil les triques trouais quille sais colombes joncs. Nus - les les d'eau porteur
					fileur cieux les dans, dérades des sous de aux taché plus et par hippocampes, rut ces
					éclairs ô fleuves lents des béni sous mer, et aux leur reculons pontons. Lenteurs oiseau
					bateau appelle de choient suivi ainsi. Des vos ultramarins blonds de l'assaut le, tout
					tremblais par mer pareille frele soleil qu'un avec rougeoyant, et ne entonnoirs des
					voulais ô vers sais poissons bons. Moi d'horreurs les m'a florides éternels. La horribles
					de et du l'horizon marais bleu. Blés taché monté et.
				</p>
			</div>
			<div
				class="hidden absolute inset-x bottom-0 bg-gradient-to-b from-transparent via-white to-white shadow-md w-full -mt-2 p-8"
			>
				<p class="text-center font-semibold">expand</p>
			</div>

			<div class="absolute w-full z-30">
				<div class="grid grid-cols-3 gap-20">
					<div
						class="w-12 h-12 bg-slate-900/10 dark:bg-white/10 blur-md rounded-full rellax"
						data-rellax-speed={2}
					/>
					<div
						class="w-6 h-6 bg-slate-900/20 dark:bg-white/5 blur-md rounded-full rellax"
						data-rellax-speed={1}
					/>
					<div
						class="w-4 h-4 bg-slate-900/30 dark:bg-white/10 blur-md rounded-full rellax"
						data-rellax-speed={4}
					/>
				</div>
			</div>
		</div>
	{/each}
</section>
