<script lang="ts">
    import { renderGridBackground } from "$lib/grid_background";
    import { onDestroy, onMount } from "svelte";
    import { browser } from "$app/environment";

    let canvasElement: HTMLCanvasElement;
    let onDestroyDisposeFn = () => {};

    if (browser) {
        onDestroy(onDestroyDisposeFn);

        onMount(() => {
            const { render, dispose } = renderGridBackground(canvasElement);
            onDestroyDisposeFn = dispose;
            render();
        });
    }
</script>

<canvas
    id="infinite-grid-renderer"
    class="absolute top-0 left-0 w-full h-full overflow-hidden -z-20"
    bind:this={canvasElement}
/>

<header class="fixed top-0 left-0 w-screen py-2 px-4 flex justify-between items-center">
    <nav class="flex items-center gap-x-2">
        <a
            class="navigation-link font-bold text-cat-mauve after:bg-cat-mauve hover:text-cat-peach hover:after:bg-cat-peach"
            href="/"
        >
            portfolio.peresonal.com
        </a>
    </nav>

    <nav class="flex gap-x-4">
        <a class="navigation-link" href="/skills">Skills</a>

        <!-- svelte-ignore a11y-missing-attribute -->
        <!-- TODO: Implement `/projects` page, see #9 -->
        <a
            class="navigation-link opacity-50 line-through cursor-not-allowed after:opacity-0 hover:text-cat-text/50"
            aria-disabled="true"
        >
            Projects
        </a>

        <!-- svelte-ignore a11y-missing-attribute -->
        <!-- TODO: Implement `/statistics` page, see #8 -->
        <a
            class="navigation-link opacity-50 line-through cursor-not-allowed after:opacity-0 hover:text-cat-text/50"
            aria-disabled="true"
        >
            Statistics
        </a>

        <a class="navigation-link" href="/contact">Contact</a>
    </nav>
</header>

<main class="absolute top-0 left-0 w-full h-full text-sm -z-10">
    <slot />
</main>
