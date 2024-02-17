<script lang="ts">
    import { useGridBackground } from "$lib/grid_background";
    import Peresonal from "$lib/components/peresonal.svelte";
    import { onDestroy, onMount } from "svelte";

    let canvas_element: HTMLCanvasElement;
    let on_destroy = () => {};

    onDestroy(on_destroy);

    onMount(() => {
        const { beginRendering, removeLingerers, addLingerers } =
            useGridBackground(canvas_element);

        on_destroy = removeLingerers;
        beginRendering();
        addLingerers();
    });
</script>

<canvas
    id="infinite-grid-renderer"
    class="absolute top-0 left-0 w-full h-full overflow-hidden"
    bind:this={canvas_element}
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
        <a class="navigation-link text-lg sm:text-base" href="/projects">Projects</a>
        <a class="navigation-link text-lg sm:text-base" href="/statistics">Statistics</a>
        <a class="navigation-link text-lg sm:text-base" href="/contact">Contact</a>
    </nav>
</section>
