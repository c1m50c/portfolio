<script lang="ts">
    import PortfolioPc from "./project-cards/portfolio_pc.svelte";
    import CellularAutomataPc from "./project-cards/cellular_automata_pc.svelte";
    import SortingAlgorithmVisualizerPc from "./project-cards/sorting_algorithm_visualizer_pc.svelte";
    import RustAlgorithmsPc from "./project-cards/rust_algorithms_pc.svelte";
    import RustDataStructuresPc from "./project-cards/rust_data_structures_pc.svelte";
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
        <CellularAutomataPc />
        <SortingAlgorithmVisualizerPc />
        <RustAlgorithmsPc />
        <RustDataStructuresPc />
    </div>
</div>