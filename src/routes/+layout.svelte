<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<main
	class="bg-gradient-to-br from from-slate-400/20 via-slate-200/20 min-h-screen flex flex-col justify-between text-defaults"
>
	<Header />
	<div class="flex-1">
		<slot />
	</div>
	<Footer />
</main>
