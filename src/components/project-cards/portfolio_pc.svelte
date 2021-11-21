<script lang="ts">
    import GithubLogoLink from "../logo-links/github_link.svelte";
    const github_repo_link: string = "https://github.com/c1m50c/portfolio";
</script>


<style>
    .bg-image { background-image: url("./../projects/portfolio.png");  }
</style>


<div class="project-card">
    <div class="bg-image" />
    <div class="project-card-details">
        <h1>Portfolio</h1>
        <p>My personal portfolio site, the site you're seeing right now.</p>
        <div class="logo-link-container">
            <GithubLogoLink link={github_repo_link} />
        </div>
    </div>
</div>