<script lang="ts">
    import PortfolioPc from "./project-cards/portfolio_pc.svelte";
    import CellularAutomataPc from "./project-cards/cellular_automata_pc.svelte";
    import SortingAlgorithmVisualizerPc from "./project-cards/sorting_algorithm_visualizer_pc.svelte";
    import RustAlgorithmsPc from "./project-cards/rust_algorithms_pc.svelte";
    import RustDataStructuresPc from "./project-cards/rust_data_structures_pc.svelte";
</script>


<style>
    :root {
        --background-blur-amount: 3px;
    }

    .project-card-container {
        display: grid;
        gap: 2rem;
    }

    .project-card-container :global(.project-card) {
        min-height: 15rem;
        text-align: center;
        position: relative;
        z-index: 2;
        display: grid;
        align-content: center;
    }
    
    .project-card-container :global(.bg-image) {
        height: 100%;
        width: 100%;
        position: absolute;
        z-index: -1;
        box-sizing: border-box;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        filter: blur(var(--background-blur-amount)) brightness(0.25);
        border-radius: var(--border-radius);
    }

    .project-card-container :global(.logo-link-container) {
        display: flex;
        justify-content: center;
        align-content: center;
    }

    .project-card-container :global(.logo) {
        width: 4rem;
        height: 4rem;
        fill: var(--button-foreground-color);
        transition: fill var(--base-transition-settings);
    }

    .project-card-container :global(.logo:hover) { fill: var(--hover-foreground-color); }
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