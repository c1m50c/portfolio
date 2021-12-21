<script lang="ts">
    /**
     * Title of the Project.
     */
    export let title: string;

    /**
     * Description of the Project.
     */
    export let description: string;

    /**
     * URL for the background image of the repository.
     */
    export let background_url: string;
</script>


<style>
    .project-card {
        min-height: 15rem;
        text-align: center;
        position: relative;
        z-index: 2;
        display: grid;
        align-content: center;
    }

    .bg-image {
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: -1;
        box-sizing: border-box;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        filter: blur(3px) brightness(0.25);
        border-radius: var(--border-radius);
    }

    .logo-link-container {
        display: flex;
        justify-content: center;
        align-content: center;
    }

    .project-card :global(.logo) {
        width: 4rem;
        height: 4rem;
        fill: var(--button-foreground-color);
        transition: fill var(--base-transition-settings);
    }

    .project-card :global(.logo:hover) {
        fill: var(--hover-foreground-color);
    }
</style>


<div class="project-card">
    <div class="bg-image" style="background-image: url({background_url})" />
    <div class="project-card-details">
        <h1>{title}</h1>
        <p>{description}</p>
        <slot name="status-badge" />
        <slot name="logo-link-container" class="logo-link-container" />
    </div>
</div>