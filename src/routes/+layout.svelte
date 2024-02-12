<script lang="ts">
    import "../app.css";
</script>

<header class="flex w-full justify-between items-center">
    <h1 class="text-2xl text-cat-mauve font-semibold">portfolio.peresonal.com</h1>

    <nav class="flex gap-4 text-md text-cat-subtext0">
        <a class="navigation-link" href="/#about">About</a>
        <a class="navigation-link" href="/#skills">Skills</a>
        <a class="navigation-link" href="/#projects">Projects</a>
        <a class="navigation-link" href="/#contact">Contact</a>
    </nav>
</header>

<main class="text-sm">
    <slot />
</main>
