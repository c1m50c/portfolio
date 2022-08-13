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
        justify-content: center;
        flex-direction: column;
    }

    .card header span {
        filter: opacity(50%);
    }
</style>

<div class="card" id={ title }>
    <header>
        <h1>{ title }</h1>
        {#if description}
            <span>{ description }</span>
        {/if}
    </header>
    <hr />
    <div class="inner-card">
        <slot name="inner-card" />
    </div>
</div>