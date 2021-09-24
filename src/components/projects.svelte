<script lang="ts">

</script>


<style>
    .card-container {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }

    .project-card {
        display: grid;
        background-color: rgb(45, 45, 45);
        padding: 1rem;
        gap: 1rem;
        text-align: center;
        font-weight: 600;
        border-radius: var(--border-radius);
    }

    .card-link {
        /* Todo: Shouldn't have to do this? */
        color: var(--button-text-color);
        text-decoration: none;
    }

    .card-link::after {
        bottom: 7%;
    }
</style>


<div class="info-container" id="projects">
    <h2>Projects</h2>
    <div class="card-container">
        <div class="project-card" id="personal-color-theme">
            <h3>Personal VSCode Color Theme</h3>
            <a href="https://github.com/c1m50c/c1m-theme" class="card-link link-button">Github</a>
            <a href="https://marketplace.visualstudio.com/items?itemName=c1m.c1m-theme" class="card-link link-button">Marketplace</a>
        </div>
    </div>
</div>