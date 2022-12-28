<script lang="ts">
	import '../app.css';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import PageTransition from '$lib/components/PageTransition.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="bg-gradient-to-br from from-slate-400/20 via-slate-200/20 ">
	<PageTransition key={data.pathname} duration={500}>
		<main class="min-h-screen flex flex-col justify-between text-defaults">
			<Header />
			<div class="flex-1">
				<slot />
			</div>
			<Footer />
		</main>
	</PageTransition>
</div>
