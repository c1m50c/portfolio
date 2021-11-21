<script lang="ts">
    import GithubLogoLink from "./logo-links/github_link.svelte";

    const portfolio_repo: string = "https://github.com/c1m50c/portfolio";
    const cellular_automata_repo: string = "https://github.com/c1m50c/cellular-automata";
    const sorting_algorithm_visualizer_repo: string = "https://github.com/c1m50c/sorting-algorithm-visualizer";
    const rust_algorithms_repo: string = "https://github.com/c1m50c/rust-algorithms";
    const rust_data_structures_repo: string = "https://github.com/c1m50c/rust-data-structures";
</script>


<style>
    :root {
        --background-blur-amount: 3px;
    }

    .project-card-container {
        display: grid;
        gap: 2rem;
    }

    .project-card {
        min-height: 15rem;
        text-align: center;
        position: relative;
        z-index: 2;
        display: grid;
        align-content: center;
    }
    
    .bg-image {
        height: 100%;
        width: 100%;
        position: absolute;
        z-index: -1;
        box-sizing: border-box;
        background-image: url("");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        filter: blur(var(--background-blur-amount)) brightness(0.25);
        border-radius: var(--border-radius);
    }

    .logo-link-container {
        display: flex;
        justify-content: center;
        align-content: center;
    }

    .logo-link-container :global(.logo) {
        width: 4rem;
        height: 4rem;
        fill: var(--button-foreground-color);
        transition: fill var(--base-transition-settings);
    }

    .logo-link-container :global(.logo:hover) { fill: var(--hover-foreground-color); }

    #portfolio-image { background-image: url("./../projects/portfolio.png"); }
    #cellular-automata-image { background-image: url("./../projects/cellular-automata.gif"); }
    #sorting-algorithm-visualizer-image { background-image: url("./../projects/sorting-algorithm-visualizer.gif"); }
    #rust-algorithms-image { background-image: url("./../projects/rust-algorithms.png"); }
    #rust-data-structures-image { background-image: url("./../projects/rust-data-structures.png"); }
</style>


<div class="info-container" id="projects">
    <h1 class="section-title">Projects</h1>
    <div class="project-card-container">
        <div class="project-card">
            <div class="bg-image" id="portfolio-image" />
            <div class="project-card-details">
                <h1>Portfolio</h1>
                <p>My personal portfolio site, the site you're seeing right now.</p>
                <div class="logo-link-container">
                    <GithubLogoLink link={portfolio_repo} />
                </div>
            </div>
        </div>
        <div class="project-card">
            <div class="bg-image" id="cellular-automata-image" />
            <div class="project-card-details">
                <h1>Cellular Automata</h1>
                <p>Python project implementing Conway's Game of Life with PyGame.</p>
                <div class="logo-link-container">
                    <GithubLogoLink link={cellular_automata_repo} />
                </div>
            </div>
        </div>
        <div class="project-card">
            <div class="bg-image" id="sorting-algorithm-visualizer-image" />
            <div class="project-card-details">
                <h1>Sorting Algorithm Visualizer</h1>
                <p>Visualizes various sorting algorithms using Matplotlib and Python.</p>
                <img src="https://github.com/c1m50c/sorting-algorithm-visualizer/actions/workflows/tests.yml/badge.svg?branch=main" alt="Tests Status" />
                <div class="logo-link-container">
                    <GithubLogoLink link={sorting_algorithm_visualizer_repo} />
                </div>
            </div>
        </div>
        <div class="project-card">
            <div class="bg-image" id="rust-algorithms-image" />
            <div class="project-card-details">
                <h1>Rust Algorithms</h1>
                <p>A Rust library implementing various algorithms.</p>
                <img src="https://github.com/c1m50c/rust-algorithms/actions/workflows/build.yml/badge.svg?branch=main" alt="Build Status" />
                <div class="logo-link-container">
                    <GithubLogoLink link={rust_algorithms_repo} />
                </div>
            </div>
        </div>
        <div class="project-card">
            <div class="bg-image" id="rust-data-structures-image" />
            <div class="project-card-details">
                <h1>Rust Data Structures</h1>
                <p>A library implementing various Data Structures in Rust, made strictly for learning purposes.</p>
                <img src="https://github.com/c1m50c/rust-data-structures/actions/workflows/build.yml/badge.svg?branch=main" alt="Build Status" />
                <div class="logo-link-container">
                    <GithubLogoLink link={rust_data_structures_repo} />
                </div>
            </div>
        </div>
    </div>
</div>