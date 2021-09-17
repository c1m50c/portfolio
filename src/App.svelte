<script lang="ts">
    import NavigationBar from "./components/navigation_bar.svelte";
    import About from "./components/about.svelte";
    import Skills from "./components/skills.svelte";
    import Resume from "./components/resume.svelte";
    import Contact from "./components/contact.svelte";
</script>


<style>
    :global(:root) {
        --button-foreground-color: rgb(228, 144, 55);
        --base-text-color: rgb(50, 50, 50);
        --hover-color: rgb(242, 102, 128);
    }

    .header-main {
        text-align: center;
        display: grid;
        align-content: center;
    }

    /*section {
        color: rgb(50, 50, 50);
        background-color: rgb(228, 144, 55);
        border-radius: 0.5rem;
        margin: auto;
        margin-top: 3%;
        padding: 1px 10px 1px;
        width: 90%;
    }*/
</style>


<main>
    <header class="header-main">
        <h1>Mesmerizing welcome goes here.</h1>
        <NavigationBar/>
    </header>
    <About/>
    <Skills/>
    <Resume/>
    <Contact/>
</main>