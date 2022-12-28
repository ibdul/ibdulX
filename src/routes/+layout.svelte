<script lang="ts">
	import '../app.css';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import PageTransition from '$lib/components/PageTransition.svelte';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';

	export let data: PageData;

	import { dark_mode } from '../stores.js';
</script>

<div class:dark={$dark_mode}>
	<div
		class="bg-gradient-to-br from from-slate-400/20 via-slate-200/20 dark:from-[#16131F] dark:to-[#100E18] transition-all duration-300 ease-in-out"
	>
		<PageTransition key={data.pathname} duration={500}>
			<main class="min-h-screen flex flex-col justify-between text-defaults svg-defaults">
				<Header />
				<div class="flex-1 flex">
					<slot />
				</div>
				<Footer />
			</main>
		</PageTransition>
	</div>
</div>
