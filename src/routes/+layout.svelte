<script lang="ts">
	import '../app.css';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import PageTransition from '$lib/components/PageTransition.svelte';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';

	export let data: PageData;

	let dark_mode = false;

	onMount(() => {
		dark_mode = localStorage.getItem('dark_mode') == 'true';
	});

	function toggleDarkMode() {
		dark_mode = !dark_mode;
		localStorage.setItem('dark_mode', String(dark_mode));
	}
</script>

<div class:dark={dark_mode}>
	<div
		class="bg-gradient-to-br from from-slate-400/20 via-slate-200/20 dark:from-[#16131F] dark:to-[#100E18] transition-all duration-300"
	>
		<PageTransition key={data.pathname} duration={500}>
			<main class="min-h-screen flex flex-col justify-between text-defaults">
				<Header />
				<div class="flex-1 flex">
					<slot />
				</div>
				<Footer />
				<p on:click={toggleDarkMode}>toggle dark mode</p>
			</main>
		</PageTransition>
	</div>
</div>
