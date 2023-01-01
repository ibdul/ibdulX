<script lang="ts">
	import { page } from '$app/stores';

	const error_images = ['error robot', 'homesick', 'spacesuit float', 'burnt out'];
</script>

<svelte:head>
	<title>{$page.status} | Ibdul</title>
</svelte:head>

<section class="error_page max-w-4xl container flex-1 grid grid-cols-2 items-center">
	<div class="w-[300px] relative">
		<img
			src={`/images/bitmoji/${error_images[Math.floor(Math.random() * error_images.length)]}.png`}
			alt="something went wrong"
		/>
		<div class="px-4">
			<div
				class="absolute bottom-3 right-0 !w-max card"
				style:opacity={`${50 + Math.floor(Math.random() * 50)}%`}
			>
				Error
			</div>
			<div
				class="absolute bottom-5 !w-max card"
				style:opacity={`${50 + Math.floor(Math.random() * 50)}%`}
			>
				{$page.status}
			</div>
		</div>
	</div>
	<div class="flex flex-col gap-4">
		<h1 class="text-3xl font-semibold">
			Oops... <span class="text-red-500">We got a {$page.status}.</span>
		</h1>
		<div class="text-sm">
			<p>Something went wrong ({$page.error?.message})</p>
			{#if $page.status == 404}
				<p>The page you seek does not exist.</p>
			{/if}
		</div>
		<p>Return to <a href="/" class="font-semibold link">the homepage.</a></p>
	</div>
</section>
