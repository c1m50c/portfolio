<script lang="ts">
    import NavigationBar from "./components/navigation_bar.svelte";
</script>


<style>
    :global(:root) {
        --button-foreground-color: rgb(228, 144, 55);
        --base-text-color: rgb(50, 50, 50);
        --hover-color: rgb(242, 102, 128);
    }

    header {
        text-align: center;
    }
</style>


<main>
    <header class="header-main">
        <h1>Mesmerizing welcome goes here.</h1>
        <NavigationBar/>
    </header>
</main>