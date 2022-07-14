<script lang="ts">
    import Navigation from "./components/Navigation/Navigation.svelte";
    import Card from "./components/Card/Card.svelte";
    import SkillsCard from "./components/SkillsCard/SkillsCard.svelte";
</script>


<style>
    :global(:root) {
        --base-text-color: rgb(37, 37, 37);
        --bright-text-color: rgb(238, 238, 238);
    }

    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 5vh 0.5rem;
    }
</style>

<Navigation />
<main>
    <!-- <Card title="About Me" /> -->
    <SkillsCard />
</main>