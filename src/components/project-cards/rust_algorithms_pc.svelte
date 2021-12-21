<script lang="ts">
    import LogoLink, { Icons } from "../logo_link.svelte";
    import ProjectCard from "./project_card.svelte";
</script>


<ProjectCard
    title="Rust Algorithms"
    description="A Rust library implementing various algorithms."
    background_url="./../projects/rust-algorithms.png"
>
    <img slot="status-badge" src="https://github.com/c1m50c/rust-algorithms/actions/workflows/build.yml/badge.svg?branch=main" alt="Build Status" />
    <div slot="logo-link-container">
        <LogoLink link="https://github.com/c1m50c/rust-algorithms" icon={Icons.Github} />
    </div>
</ProjectCard>