<script lang="ts">
    export let title: string;
    export let description: string = "";
</script>

<style>
    .card {
        border-radius: 0.86rem;
        padding: 0.5rem;
        width: 100%;
    }

    .card header {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .card header p {
        filter: opacity(50%);
    }
</style>

<div class="card">
    <header>
        <h1>{ title }</h1>
        {#if description}
            <p>{ description }</p>
        {/if}
    </header>
    <hr />
    <div class="inner-card">
        <slot name="inner-card" />
    </div>
</div>