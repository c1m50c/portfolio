<script lang="ts">
    import LogoLink, { Icons } from "../logo_link.svelte";
    const github_repo_link: string = "https://github.com/c1m50c/cellular-automata";
</script>


<style>
    .bg-image { background-image: url("./../projects/cellular-automata.gif");  }
</style>


<div class="project-card">
    <div class="bg-image" />
    <div class="project-card-details">
        <h1>Cellular Automata</h1>
        <p>Python project implementing Conway's Game of Life with PyGame.</p>
        <div class="logo-link-container">
            <LogoLink link={github_repo_link} icon={Icons.Github} />
        </div>
    </div>
</div>