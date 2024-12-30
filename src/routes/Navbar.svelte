<script>
	let { currentPage } = $props();

	const PAGES = {
		home: {
			url: '/',
			name: 'Home'
		},
		coursework: {
			url: '/coursework',
			name: 'Coursework'
		},
		projects: {
			url: '/projects',
			name: 'Projects'
		},
		blog: {
			url: '/blog',
			name: 'Blog'
		},
		resume: {
			url: '/archive/resume.pdf',
			name: 'R&eacute;sum&eacute;'
		}
	};
</script>

<div class="mb-4 mr-2 shrink-0 grow-0 basis-1/6 text-right font-sans font-semibold leading-normal">
	<div class="py-4 text-lg">Navigation</div>
	{#each Object.entries(PAGES) as [key, { url, name }]}
		<a
			class="inline-block w-full cursor-pointer no-underline hover:text-blue-800"
			class:text-blue-800={key === currentPage}
			class:text-sky-600={key !== currentPage}
			href={url}>{@html name}</a
		>
	{/each}
</div>
