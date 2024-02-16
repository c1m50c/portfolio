<script lang="ts">
    import Peresonal from "$lib/components/peresonal.svelte";
</script>

<section
    id="content"
    class="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center"
>
    <header>
        <Peresonal class="w-72 h-72 [&>path]:fill-cat-mauve" />
        <p class="text-cat-text text-xl font-bold">portfolio.peresonal.com</p>
    </header>

    <nav class="flex gap-x-4">
        <a class="navigation-link text-lg" href="/skills">Skills</a>
        <a class="navigation-link text-lg" href="/projects">Projects</a>
        <a class="navigation-link text-lg" href="/statistics">Statistics</a>
        <a class="navigation-link text-lg" href="/contact">Contact</a>
    </nav>
</section>
