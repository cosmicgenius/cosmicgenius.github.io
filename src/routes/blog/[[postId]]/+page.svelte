<script lang="ts">
	import type { PageData } from './$types';

	import PageTemplate from '$lib/PageTemplate.svelte';
	import BlogError from '../BlogError.svelte';

	import RollingEllipse from '../rolling-ellipse/RollingEllipse.svelte';

	let { data }: { data: PageData } = $props();

	let postId = $derived(data.postId);

	const POSTS = {
		'rolling-ellipse': {
			content: RollingEllipse,
			date: new Date('2023-01-06T07:33:25.000Z'),
			title: 'Tracking Points While Rolling Without Slipping'
		}
	};
</script>

<PageTemplate currentPage="blog">
    {#if postId in POSTS}
        <div class="mb-4">
            <h2 class="my-0">{POSTS[postId].title}</h2>
            <span class="text-sm text-gray-600">{POSTS[postId].date.toLocaleString()}</span>
        </div>

        <svelte:component this={POSTS[postId].content} />
    {:else if !postId}
        <h2>Posts</h2>
        {#each Object.entries(POSTS).toSorted((a, b) => a[1].date - b[1].date) as [postId, { title, date }]}
            <div><a href="/blog/{postId}">{title}</a> &mdash; {date.toDateString()}</div>
        {/each}
    {:else}
        <BlogError />
    {/if}
</PageTemplate>
