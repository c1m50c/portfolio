<script lang="ts">
    import LogoLink, { Icons } from "../logo_link.svelte";
    import ProjectCard from "./project_card.svelte";
</script>


<ProjectCard
    title="Lists"
    description="Library containing implementations of various sequential data-structures."
    background_url="./projects/lists.png"
>
    <div slot="status-badge">
        <img src="https://img.shields.io/github/workflow/status/c1m50c/lists/Build?style=for-the-badge" alt="Build" />
        <img src="https://img.shields.io/docsrs/lists/latest?style=for-the-badge" alt="Docs" />
        <img src="https://img.shields.io/crates/v/lists?color=orange&style=for-the-badge" alt="CratesIO" />
        <img src="https://img.shields.io/crates/l/lists?style=for-the-badge" alt="License" />
        <img src="https://img.shields.io/tokei/lines/github/c1m50c/lists?style=for-the-badge" alt="Lines of Code" />
        <img src="https://img.shields.io/github/stars/c1m50c/lists?style=for-the-badge" alt="Github Stars" />
    </div>
    <div slot="logo-link-container">
        <LogoLink link="https://github.com/c1m50c/lists" icon={Icons.Github} />
        <LogoLink link="https://crates.io/crates/lists" icon={Icons.CratesIO} />
        <LogoLink link="https://docs.rs/crate/lists/latest" icon={Icons.DocsRS} />
    </div>
</ProjectCard>