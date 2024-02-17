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
        <a class="navigation-link" href="/projects">Projects</a>
        <a class="navigation-link" href="/statistics">Statistics</a>
        <a class="navigation-link" href="/contact">Contact</a>
    </nav>
</header>

<main class="absolute top-0 left-0 w-full text-sm mt-14">
    <slot />
</main>

<style>
    :global(body) {
        @apply bg-cat-crust;
    }
</style>
