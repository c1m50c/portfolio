<script lang="ts">
    import LogoLink, { Icons } from "../logo_link.svelte";
    const github_repo_link: string = "https://github.com/c1m50c/rust-algorithms";
</script>


<style>
    .bg-image { background-image: url("./../projects/rust-algorithms.png");  }
</style>


<div class="project-card">
    <div class="bg-image" />
    <div class="project-card-details">
        <h1>Rust Algorithms</h1>
        <p>A Rust library implementing various algorithms.</p>
        <img src="https://github.com/c1m50c/rust-algorithms/actions/workflows/build.yml/badge.svg?branch=main" alt="Build Status" />
        <div class="logo-link-container">
            <LogoLink link={github_repo_link} icon={Icons.Github} />
        </div>
    </div>
</div>