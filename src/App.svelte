<script lang="ts">
    import NavigationBar from "./components/navigation_bar.svelte";
    import Welcome from "./components/welcome.svelte";
    import About from "./components/about.svelte";
    import Skills from "./components/skills.svelte";
    import Resume from "./components/resume.svelte";
    import Contact from "./components/contact.svelte";
</script>


<style>
    :global(:root) {
        --font-size: 16px;
        --base-text-color: rgb(35, 41, 49);
        --bright-text-color: rgb(238, 238, 238);
        --button-text-color: var(--base-text-color);
        --info-container-bg-color: rgb(30, 30, 30);
        --border-radius: 13px;
        --button-foreground-color: rgb(53, 206, 135);
        --button-background-color: rgb(53, 206, 135);
        --hover-foreground-color: rgb(94, 237, 170);
        --hover-background-color: rgb(94, 237, 170);
    }

    :global(.info-container) {
        padding: 1rem;
        background-color: var(--info-container-bg-color);
        border-radius: var(--border-radius);
    }

    main {
        display: grid;
        gap: 2rem;
        font-size: var(--font-size);
        padding: 3rem 1rem;
    }
</style>


<NavigationBar/>
<main>
    <Welcome/>
    <About/>
    <Skills/>
    <Resume/>
    <Contact/>
</main>