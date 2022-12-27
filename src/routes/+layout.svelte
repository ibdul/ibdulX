<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Ibrahim Abdulhameed</title>
</svelte:head>

<main
	class="bg-gradient-to-br from from-slate-400/20 via-slate-200/20 min-h-screen flex flex-col justify-between "
>
	<Header />
	<slot />
	<Footer />
</main>
