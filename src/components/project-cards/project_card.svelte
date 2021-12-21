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


<div class="project-card">
    <div class="bg-image" style="background-image: url({background_url})" />
    <div class="project-card-details">
        <h1>{title}</h1>
        <p>{description}</p>
        <slot name="status-badge" />
        <slot name="logo-link-container" class="logo-link-container" />
    </div>
</div>