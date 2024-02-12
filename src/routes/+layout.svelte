<script lang="ts">
    import Toaster from "$lib/components/toaster.svelte";
    import "../app.css";
</script>

<header class="flex w-full justify-center items-center">
    <nav class="flex gap-4 text-md text-cat-subtext0">
        <a class="navigation-link" href="/#about">About</a>
        <a class="navigation-link" href="/#skills">Skills</a>
        <a class="navigation-link" href="/#projects">Projects</a>
        <a class="navigation-link" href="/#contact">Contact</a>
    </nav>
</header>

<Toaster />

<main class="text-sm">
    <slot />
</main>
