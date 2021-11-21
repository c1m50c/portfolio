<script lang="ts">
    import GithubLogoLink from "../logo-links/github_link.svelte";
    const github_repo_link: string = "https://github.com/c1m50c/rust-data-structures";
</script>


<style>
    .bg-image { background-image: url("./../projects/rust-data-structures.png");  }
</style>


<div class="project-card">
    <div class="bg-image" />
    <div class="project-card-details">
        <h1>Rust Data Structures</h1>
        <p>A library implementing various Data Structures in Rust, made strictly for learning purposes.</p>
        <img src="https://github.com/c1m50c/rust-data-structures/actions/workflows/build.yml/badge.svg?branch=main" alt="Build Status" />
        <div class="logo-link-container">
            <GithubLogoLink link={github_repo_link} />
        </div>
    </div>
</div>