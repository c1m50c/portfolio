<script lang="ts">
    import LogoLink, { Icons } from "../logo_link.svelte";
    import ProjectCard from "./project_card.svelte";
</script>


<ProjectCard
    title="Portfolio"
    description="My personal portfolio site, the site you're seeing right now."
    background_url="./projects/portfolio.png"
>
    <div slot="status-badge">
        <img src="https://img.shields.io/github/actions/workflow/status/c1m50c/portfolio/.github%2Fworkflows%2Fdeploy.yaml?style=for-the-badge&label=deploy" alt="Deploy" />
        <img src="https://img.shields.io/github/license/c1m50c/portfolio?color=blue&style=for-the-badge" alt="License" />
        <!-- <img src="https://img.shields.io/tokei/lines/github/c1m50c/portfolio?style=for-the-badge" alt="Lines of Code" /> -->
    </div>
    <div slot="logo-link-container">
        <LogoLink link="https://github.com/c1m50c/portfolio" icon={Icons.Github} />
    </div>
</ProjectCard>