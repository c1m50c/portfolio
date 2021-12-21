<script lang="ts">
    import LogoLink, { Icons } from "../logo_link.svelte";
    import ProjectCard from "./project_card.svelte";
</script>


<ProjectCard
    title="Sorting Algorithm Visualizer"
    description="Visualizes various sorting algorithms using Matplotlib and Python."
    background_url="../projects/sorting-algorithm-visualizer.gif"
>
    <img slot="status-badge" src="https://github.com/c1m50c/sorting-algorithm-visualizer/actions/workflows/tests.yml/badge.svg?branch=main" alt="Tests Status" />
    <div slot="logo-link-container">
        <LogoLink link="https://github.com/c1m50c/sorting-algorithm-visualizer" icon={Icons.Github} />
    </div>
</ProjectCard>