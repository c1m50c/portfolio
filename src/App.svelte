<script lang="ts">
    import NavigationBar from "./components/navigation_bar.svelte";
    import Welcome from "./components/welcome.svelte";
    // import About from "./components/about.svelte";
    import Skills from "./components/skills.svelte";
    import Projects from "./components/projects.svelte";
    import Contact from "./components/contact.svelte";
</script>


<style>
    :global(:root) {
        --base-text-color: rgb(35, 41, 49);
        --bright-text-color: rgb(238, 238, 238);
        --button-text-color: var(--base-text-color);
        --info-container-bg-color: rgb(30, 30, 30);
        --button-foreground-color: rgb(28, 194, 117);
        --button-background-color: rgb(33, 126, 83);
        --hover-foreground-color: rgb(102, 226, 168);
        --hover-background-color: rgb(67, 135, 103);
        --base-transition-settings: 600ms ease;
        --border-radius: 0.75rem;
    }

    :global(.info-container) {
        padding: 1rem;
        background-color: var(--info-container-bg-color);
        border-radius: var(--border-radius);
    }

    :global(.link-button) {
        display: flexbox;
        padding: 0.25rem;
        position: relative;
        justify-content: center;
        text-align: center;
        align-content: center;
        text-decoration: none;
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

    :global(.link-button:hover::after) {
        transform: scaleX(1);
    }

    :global(.link-button:hover) {
        cursor: pointer;
        background-color: var(--hover-foreground-color);
    }

    :global(.section-title) {
        text-align: center;
    }

    :global(.python) { background-image: url("./../logos/languages/python.svg"); }
    :global(.rust) { background-image: url("./../logos/languages/rust.svg"); }
    :global(.go) { background-image: url("./../logos/languages/go.svg"); }
    :global(.java-script) { background-image: url("./../logos/languages/java_script.svg"); }
    :global(.type-script) { background-image: url("./../logos/languages/type_script.svg"); }
    :global(.html) { background-image: url("./../logos/languages/html.svg"); }
    :global(.css) { background-image: url("./../logos/languages/css.svg"); }
    :global(.sql) { background-image: url("./../logos/languages/sql.svg"); }
    :global(.c) { background-image: url("./../logos/languages/c.svg"); }
    :global(.cpp) { background-image: url("./../logos/languages/cpp.svg"); }
    :global(.c-sharp) { background-image: url("./../logos/languages/c_sharp.svg"); }
    :global(.lua) { background-image: url("./../logos/languages/lua.svg"); }
    :global(.godot) { background-image: url("./../logos/godot.svg"); }
    :global(.google) { background-image: url("./../logos/google.svg"); }
    :global(.git) { background-image: url("./../logos/git.svg"); }
    :global(.web-assembly) { background-image: url("./../logos/web_assembly.svg"); }

    main {
        gap: 2rem;
        display: grid;
        padding: 3rem 1rem;
    }
</style>


<NavigationBar/>
<main>
    <Welcome/>
    <Skills/>
    <Projects/>
    <Contact/>
</main>