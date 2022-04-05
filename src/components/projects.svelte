<script lang="ts">
    import PortfolioPc from "./project-cards/portfolio.svelte";
    import CellularAutomata from "./project-cards/cellular_automata.svelte";
    import SortingAlgorithmVisualizer from "./project-cards/sorting_algorithm_visualizer.svelte";
    import RustAlgorithms from "./project-cards/rust_algorithms.svelte";
    import RustDataStructures from "./project-cards/rust_data_structures.svelte";
    import FixedVectors from "./project-cards/fixed_vectors.svelte";
    import Lists from "./project-cards/lists.svelte";
    import Evaluator from "./project-cards/evaluator.svelte";
    import PasswordGenerator from "./project-cards/password_generator.svelte";
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
        <Lists />
        <FixedVectors />
        <Evaluator />
        <PasswordGenerator />
        <SortingAlgorithmVisualizer />
        <RustAlgorithms />
        <RustDataStructures />
        <CellularAutomata />
    </div>
</div>