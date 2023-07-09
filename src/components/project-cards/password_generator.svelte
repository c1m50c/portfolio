<script lang="ts">
    import LogoLink, { Icons } from "../logo_link.svelte";
    import ProjectCard from "./project_card.svelte";
</script>


<ProjectCard
    title="Password Generator"
    description="Password Generator CLI written in Python, featuring QR Code Generation, Text File Saving, and more! "
    background_url="./projects/password-generator.png"
>
    <div slot="status-badge">
        <img src="https://img.shields.io/github/license/c1m50c/password-generator?color=blue&style=for-the-badge" alt="License" />
        <!-- <img src="https://img.shields.io/tokei/lines/github/c1m50c/password-generator?style=for-the-badge" alt="Lines of Code" /> -->
    </div>
    <div slot="logo-link-container">
        <LogoLink link="https://github.com/c1m50c/password-generator" icon={Icons.Github} />
    </div>
</ProjectCard>