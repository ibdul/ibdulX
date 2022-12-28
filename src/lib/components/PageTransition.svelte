<script lang="ts">
	import { blur } from 'svelte/transition';

	export let key: string;
	export let duration = 300;
</script>

{#key key}
	<div in:blur={{ duration, delay: duration / 2 }} out:blur={{ duration: duration / 3 }}>
		<slot />
	</div>
{/key}

<style>
	/* div {
		position: absolute;
		inset: 0;
	} */
</style>
