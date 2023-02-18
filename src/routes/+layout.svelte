<script lang="ts">
	import '../app.css';

	import NProgress from 'nprogress';
	import { navigating } from '$app/stores';

	import '$lib/nprogress.css';
	NProgress.configure({
		parent: '.site_container',
		minimum: 0.16
	});
	$: {
		if ($navigating) {
			NProgress.start();
		}
		if (!$navigating) {
			NProgress.done();
		}
	}

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="site_container">
	<div
		class="bg-gradient-to-br from from-slate-400/20 via-slate-200/20 dark:from-[#16131F] dark:to-[#100E18] transition-all duration-300 ease-in-out overflow-clip"
	>
		<main class="min-h-screen flex flex-col justify-between text-defaults svg-defaults">
			{#key data.pathname}
				<Header />
				<div class="flex-1 flex">
					<slot />
				</div>
				<Footer />
			{/key}
		</main>
	</div>
</div>
