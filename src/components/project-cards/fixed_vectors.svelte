<script lang="ts">
    import LogoLink, { Icons } from "../logo_link.svelte";
    import ProjectCard from "./project_card.svelte";
</script>


<ProjectCard
    title="Fixed Vectors"
    description="Library implementing fixed-length Vectors meant for representing dimensional values. "
    background_url="./projects/fixed-vectors.png"
>
    <div slot="status-badge">
        <img src="https://img.shields.io/github/actions/workflow/status/c1m50c/fixed-vectors/.github%2Fworkflows%2Fpublish.yml?style=for-the-badge" alt="Build" />
        <img src="https://img.shields.io/crates/v/fixed-vectors?color=orange&style=for-the-badge" alt="CratesIO Version" />
        <img src="https://img.shields.io/crates/d/fixed-vectors?style=for-the-badge&color=orange" alt="CratesIO Downloads" />
        <img src="https://img.shields.io/crates/l/fixed-vectors?style=for-the-badge" alt="License" />
        <!-- <img src="https://img.shields.io/tokei/lines/github/c1m50c/fixed-vectors?style=for-the-badge" alt="Lines of Code" /> -->
        <img src="https://img.shields.io/github/stars/c1m50c/fixed-vectors?style=for-the-badge" alt="Github Stars" />
    </div>
    <div slot="logo-link-container">
        <LogoLink link="https://github.com/c1m50c/fixed-vectors" icon={Icons.Github} />
        <LogoLink link="https://crates.io/crates/fixed-vectors/" icon={Icons.CratesIO} />
        <LogoLink link="https://docs.rs/crate/fixed-vectors/latest" icon={Icons.DocsRS} />
    </div>
</ProjectCard>