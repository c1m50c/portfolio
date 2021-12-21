<script lang="ts">
    import LogoLink, { Icons } from "../logo_link.svelte";
    import ProjectCard from "./project_card.svelte";
</script>


<ProjectCard
    title="Cellular Automata"
    description="Python project implementing Conway's Game of Life with PyGame."
    background_url="./../projects/cellular-automata.gif"
>
    <div slot="logo-link-container">
        <LogoLink link="https://github.com/c1m50c/cellular-automata" icon={Icons.Github} />
    </div>
</ProjectCard>