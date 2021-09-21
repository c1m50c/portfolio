<script lang="ts">
    import NavigationBar from "./components/navigation_bar.svelte";
    import About from "./components/about.svelte";
    import Skills from "./components/skills.svelte";
    import Resume from "./components/resume.svelte";
    import Contact from "./components/contact.svelte";
</script>


<style>
    :global(:root) {
        --base-text-color: rgb(51, 51, 51);
        --section-text-color: rgb(240, 240, 240);
        --section-bg-color: rgb(74, 74, 74);
        --button-foreground-color: rgb(53, 227, 181);
        --button-background-color: rgb(48, 157, 128);
        --hover-foreground-color: rgb(242, 100, 126);
        --hover-background-color: rgb(149, 70, 85);
    }

    header {
        text-align: center;
    }

    .main-sections-container {
        display: grid;
        padding: 15px 0px;
        gap: 14px;
        grid-template-areas:
            "about"
            "skills"
            "resume"
            "contact";
    }
</style>


<main>
    <header class="header-main">
        <img src="logo.svg" alt="logo" id="logo" width=100px height=100px/>
        <NavigationBar/>
    </header>
    <div class="main-sections-container">
        <About/>
        <Skills/>
        <Resume/>
        <Contact/>
    </div>
</main>