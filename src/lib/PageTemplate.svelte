<script lang="ts">
    import Header from './Header.svelte';
    import Navbar from './Navbar.svelte';

	let { children, currentPage } = $props();
</script>

<Header />
<div class="mx-auto max-w-3xl 2xl:max-w-6xl flex">
    <div class="mx-2 grow-0 basis-1/6 shrink-0 ">
        <Navbar currentPage={currentPage} />
    </div>
    <div class="prose m-4 overflow-x-hidden max-w-full grow-[100]">
        {@render children?.()}
    </div>
</div>
