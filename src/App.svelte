<script lang="ts">
    import NavigationBar from "./components/navigation_bar.svelte";
    import Welcome from "./components/welcome.svelte";
    import About from "./components/about.svelte";
    import Skills from "./components/skills.svelte";
    import Projects from "./components/projects.svelte";
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
        --button-background-color: rgb(33, 126, 83);
        --hover-foreground-color: rgb(94, 237, 170);
        --hover-background-color: rgb(54, 134, 97);
        --base-transition-settings: 500ms ease
    }

    :global(.info-container) {
        padding: 1rem;
        background-color: var(--info-container-bg-color);
        border-radius: var(--border-radius);
    }

    :global(.link-button) {
        display: flexbox;
        padding: 2px;
        position: relative;
        justify-content: center;
        text-align: center;
        align-content: center;
        text-decoration: none;
        border-radius: var(--border-radius);
        background-color: var(--button-foreground-color);
        color: var(--base-text-color);
        transition: all var(--base-transition-settings);
    }

    :global(.link-button::after) {
        content: "";
        position: absolute;
        width: 50%;
        height: 2px;
        transform: scaleX(0);
        bottom: 25%;
        left: 25%;
        background-color: var(--button-text-color);
        transform-origin: center;
        transition: transform var(--base-transition-settings);
    }

    :global(.link-button:hover::after, .link-button:focus::after) {
        transform: scaleX(1);
    }

    :global(.link-button:hover, .link-button:focus) {
        background-color: var(--hover-foreground-color);
    }

    :global(.link-button:hover) {
        cursor: pointer;
    }

    main {
        display: grid;
        gap: 2rem;
        font-size: var(--font-size);
        padding: 3rem 1rem;
    }

    .welcome-about-container {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
</style>


<NavigationBar/>
<main>
    <div class="welcome-about-container">
        <Welcome/>
        <About/>
    </div>
    <Skills/>
    <Projects/>
    <Resume/>
    <Contact/>
</main>