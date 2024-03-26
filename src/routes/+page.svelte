<script lang="ts">
    import { renderGridBackground } from "$lib/grid_background";
    import Peresonal from "$lib/components/peresonal.svelte";
    import { onDestroy, onMount } from "svelte";

    let canvasElement: HTMLCanvasElement;
    let onDestroyDisposeFn = () => {};

    onDestroy(onDestroyDisposeFn);

    onMount(() => {
        const { render, dispose } = renderGridBackground(canvasElement);
        onDestroyDisposeFn = dispose;
        render();
    });
</script>

<canvas
    id="infinite-grid-renderer"
    class="absolute top-0 left-0 w-full h-full overflow-hidden"
    bind:this={canvasElement}
/>

<section
    id="content"
    class="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center"
>
    <header>
        <Peresonal class="w-72 sm:w-64 h-72 sm:h-64 [&>path]:fill-cat-mauve" />
        <p class="text-cat-text text-xl sm:text-lg font-bold">portfolio.peresonal.com</p>
    </header>

    <nav class="flex flex-wrap gap-x-4">
        <a class="navigation-link text-lg sm:text-base" href="/skills">Skills</a>

        <!-- svelte-ignore a11y-missing-attribute -->
        <!-- TODO: Implement `/projects` page, see #9 -->
        <a
            class="navigation-link text-lg sm:text-base opacity-50 line-through cursor-not-allowed after:opacity-0 hover:text-cat-text/50"
            aria-disabled="true"
        >
            Projects
        </a>

        <!-- svelte-ignore a11y-missing-attribute -->
        <!-- TODO: Implement `/statistics` page, see #8 -->
        <a
            class="navigation-link text-lg sm:text-base opacity-50 line-through cursor-not-allowed after:opacity-0 hover:text-cat-text/50"
            aria-disabled="true"
        >
            Statistics
        </a>

        <a class="navigation-link text-lg sm:text-base" href="/contact">Contact</a>
    </nav>
</section>
