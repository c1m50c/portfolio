<script lang="ts">
    import NavigationBar from "./components/navigation_bar.svelte";
    import About from "./components/about.svelte";
</script>


<style>
    :global(:root) {
        --base-text-color: rgb(50, 50, 50);
        --section-text-color: rgb(240, 240, 240);
        --section-bg-color: rgb(75, 75, 75);
        --button-foreground-color: rgb(55, 228, 182);
        --hover-color: rgb(242, 102, 128);
    }

    header {
        text-align: center;
    }

    .main-sections-container {
        display: grid;
        padding: 15px 0px;
        grid-template-areas:
            "about";
    }
</style>


<main>
    <header class="header-main">
        <img src="logo.svg" alt="logo" id="logo" width=100px height=100px/>
        <NavigationBar/>
    </header>
    <div class="main-sections-container">
        <About/>
    </div>
</main>