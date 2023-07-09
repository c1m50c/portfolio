<script lang="ts">
    import LogoLink, { Icons } from "../logo_link.svelte";
    import ProjectCard from "./project_card.svelte";
</script>


<ProjectCard
    title="Sorting Algorithm Visualizer"
    description="Visualizes various sorting algorithms using Matplotlib and Python."
    background_url="./projects/sorting-algorithm-visualizer.gif"
>
    <div slot="status-badge">
        <img src="https://img.shields.io/github/actions/workflow/status/c1m50c/sorting-algorithm-visualizer/.github%2Fworkflows%2Ftests.yml?style=for-the-badge&label=tests" alt="Tests" />
        <img src="https://img.shields.io/github/license/c1m50c/sorting-algorithm-visualizer?color=blue&style=for-the-badge" alt="License" />
        <!-- <img src="https://img.shields.io/tokei/lines/github/c1m50c/sorting-algorithm-visualizer?style=for-the-badge" alt="Lines of Code" /> -->
    </div>
    <div slot="logo-link-container">
        <LogoLink link="https://github.com/c1m50c/sorting-algorithm-visualizer" icon={Icons.Github} />
    </div>
</ProjectCard>