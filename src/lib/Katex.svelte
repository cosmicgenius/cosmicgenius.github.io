<script lang="ts">
	import katex from 'katex';

	let { math, displayMode }: { math: string; displayMode: boolean } = $props();

	let options = $derived({
		displayMode: displayMode ?? false,
		throwOnError: false
	});

	let katexString = $derived(katex.renderToString(math, options));
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
		integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"
		crossorigin="anonymous"
	/>
</svelte:head>

{#if displayMode}
	<div class="overflow-x-scroll">
		{@html katexString}
	</div>
{:else}
	{@html katexString}
{/if}
