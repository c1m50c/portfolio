<script lang="ts">
    import LogoLink, { Icons } from "../logo_link.svelte";
    import ProjectCard from "./project_card.svelte";
</script>


<ProjectCard
    title="Rust Data Structures"
    description="A library implementing various Data Structures in Rust, made strictly for learning purposes."
    background_url="../projects/rust-data-structures.png"
>
    <img slot="status-badge" src="https://github.com/c1m50c/rust-data-structures/actions/workflows/build.yml/badge.svg?branch=main" alt="Build Status" />
    <div slot="logo-link-container">
        <LogoLink link="https://github.com/c1m50c/rust-data-structures" icon={Icons.Github} />
    </div>
</ProjectCard>