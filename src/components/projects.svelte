<script lang="ts">
</script>


<style>
    :root {
        --background-blur-amount: 4px;
    }

    .project-card-container {
        display: grid;
        gap: 2rem;
    }

    .project-card {
        text-align: center;
        position: relative;
        z-index: 2;
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

    .logo {
        width: 4rem;
        height: 4rem;
        fill: var(--button-foreground-color);
        transition: fill var(--base-transition-settings);
    }

    .logo:hover { fill: var(--hover-foreground-color); }

    #portfolio-image { background-image: url("/projects/portfolio.png/"); }
    #sorting-algorithm-visualizer-image { background-image: url("/projects/sorting-algorithm-visualizer.png/"); }
    #rust-algorithms-image { background-image: url("/projects/rust-algorithms.png/"); }
    #rust-data-structures-image { background-image: url("/projects/rust-data-structures.png/"); }
</style>


<div class="info-container" id="projects">
    <h1>Projects</h1>
    <div class="project-card-container">
        <div class="project-card">
            <div class="bg-image" id="portfolio-image" />
            <div class="project-card-details">
                <h1>Portfolio</h1>
                <p>My personal portfolio site, the site you're seeing right now.</p>
                <div class="logo-link-container">
                    <a href="https://github.com/c1m50c/portfolio" class="logo-link">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="github-logo logo">
                            <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"/>
                        </svg>
                    </a>
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
                    <a href="https://github.com/c1m50c/sorting-algorithm-visualizer" class="logo-link">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="github-logo logo">
                            <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"/>
                        </svg>
                    </a>
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
                    <a href="https://github.com/c1m50c/rust-algorithms" class="logo-link">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="github-logo logo">
                            <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"/>
                        </svg>
                    </a>
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
                    <a href="https://github.com/c1m50c/rust-algorithms" class="logo-link">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="github-logo logo">
                            <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>