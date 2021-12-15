<script lang="ts">
    import LogoLink, { Icons } from "../logo_link.svelte";
    const github_repo_link: string = "https://github.com/c1m50c/sorting-algorithm-visualizer";
</script>


<style>
    .bg-image { background-image: url("./../projects/sorting-algorithm-visualizer.gif");  }
</style>


<div class="project-card">
    <div class="bg-image" />
    <div class="project-card-details">
        <h1>Sorting Algorithm Visualizer</h1>
        <p>Visualizes various sorting algorithms using Matplotlib and Python.</p>
        <img src="https://github.com/c1m50c/sorting-algorithm-visualizer/actions/workflows/tests.yml/badge.svg?branch=main" alt="Tests Status" />
        <div class="logo-link-container">
            <LogoLink link={github_repo_link} icon={Icons.Github} />
        </div>
    </div>
</div>