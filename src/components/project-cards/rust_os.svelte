<script lang="ts">
    import LogoLink, { Icons } from "../logo_link.svelte";
    import ProjectCard from "./project_card.svelte";
</script>


<ProjectCard
    title="Rust OS"
    description='Repository loosely following the "Writing an Operating System in Rust" blog by Philipp Oppermann. '
    background_url="./projects/fixed-vectors.png"
>
    <div slot="status-badge">
        <img src="https://img.shields.io/github/actions/workflow/status/c1m50c/rust-os/.github%2Fworkflows%2Fverify.yaml?style=for-the-badge&label=verify" alt="Verify" />
        <img src="https://img.shields.io/github/license/c1m50c/rust-os?style=for-the-badge" alt="License" />
        <!-- <img src="https://img.shields.io/tokei/lines/github/c1m50c/fixed-vectors?style=for-the-badge" alt="Lines of Code" /> -->
        <img src="https://img.shields.io/github/stars/c1m50c/rust-os?style=for-the-badge" alt="Github Stars" />
    </div>
    <div slot="logo-link-container">
        <LogoLink link="https://github.com/c1m50c/rust-os" icon={Icons.Github} />
    </div>
</ProjectCard>