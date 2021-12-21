<script lang="ts">
    import LogoLink, { Icons } from "../logo_link.svelte";
    import ProjectCard from "./project_card.svelte";
</script>


<ProjectCard
    title="Portfolio"
    description="My personal portfolio site, the site you're seeing right now."
    background_url="../projects/portfolio.png"
>
    <div slot="logo-link-container">
        <LogoLink link="https://github.com/c1m50c/portfolio" icon={Icons.Github} />
    </div>
</ProjectCard>