<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
</script>

<svelte:head>
	<title>Ibrahim Abdulhameed</title>
</svelte:head>

<main class="bg-gradient-to-br from from-slate-400/20 via-slate-200/20">
	<Header />
	<slot />
</main>
