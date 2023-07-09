<script lang="ts">
    import SortingAlgorithmVisualizer from "./project-cards/sorting_algorithm_visualizer.svelte";
    import PasswordGenerator from "./project-cards/password_generator.svelte";
    import CellularAutomata from "./project-cards/cellular_automata.svelte";
    import FixedVectors from "./project-cards/fixed_vectors.svelte";
    import PortfolioPc from "./project-cards/portfolio.svelte";
</script>


<style>
    .project-card-container {
        display: grid;
        gap: 1.5rem;
        grid-template-columns: repeat(auto-fill, minmax(1fr, 20rem));
    }
</style>


<div class="info-container" id="projects">
    <h1 class="section-title">Projects</h1>
    <div class="project-card-container">
        <PortfolioPc />
        <FixedVectors />
        <PasswordGenerator />
        <SortingAlgorithmVisualizer />
        <CellularAutomata />
    </div>
</div>