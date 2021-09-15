<script lang="ts">
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

    .navigation-bar {
        width: 90%;
        margin: auto;
        background-color: rgb(33, 33, 33);
        border-radius: 0.5rem;
        padding: 5px 1px 5px;
    }

    button {
        background-color: rgb(228, 144, 55);
        font-weight: 650;
        margin: auto;
        border: none;
        border-radius: 0rem;
        width: 10%;
    }

    button:hover {
        cursor: pointer;
        background-color: rgb(253, 184, 111);
    }
</style>

<main>
    <header class="header-main">
        <h1>Mesmerizing welcome goes here.</h1>
        <div class="navigation-bar">
            <button>About</button>
            <button>Skills</button>
            <button>Resume</button>
            <button>Contact</button>
        </div>
    </header>
    <About/>
    <Skills/>
    <Resume/>
    <Contact/>
</main>