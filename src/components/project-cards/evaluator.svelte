<script lang="ts">
    import LogoLink, { Icons } from "../logo_link.svelte";
    import ProjectCard from "./project_card.svelte";
</script>


<ProjectCard
    title="Evaluator"
    description="Shell based application that performs lexical analysis, parsing, and evaluation to determine an output."
    background_url="./projects/evaluator.png"
>
    <div slot="status-badge">
        <img src="https://img.shields.io/github/workflow/status/c1m50c/evaluator/Build?style=for-the-badge" alt="Build" />
        <img src="https://img.shields.io/tokei/lines/github/c1m50c/evaluator?style=for-the-badge" alt="Lines of Code" />
        <img src="https://img.shields.io/github/license/c1m50c/evaluator?color=blue&style=for-the-badge" alt="License" />
    </div>
    <div slot="logo-link-container">
        <LogoLink link="https://github.com/c1m50c/evaluator" icon={Icons.Github} />
    </div>
</ProjectCard>