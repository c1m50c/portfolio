<script lang="ts">
    import NavigationBar from "./components/navigation_bar.svelte";
    import About from "./components/about.svelte";
    import Skills from "./components/skills.svelte";
    import Resume from "./components/resume.svelte";
    import Contact from "./components/contact.svelte";
</script>


<style>
    .header-main {
        text-align: center;
        display: grid;
        align-content: center;
    }
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