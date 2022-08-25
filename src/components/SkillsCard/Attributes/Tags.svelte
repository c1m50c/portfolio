<script lang="ts">
    export let tags: string[];
</script>

<style>
    .tag {
        font-weight: 600;
    }
</style>

<div class="attribute" style="grid-row: 1 / span 2; grid-column: 3 / span 14;">
    <h2>Tags</h2>
    <div class="tag-container">
        {#each tags as tag}
            <p class="tag">{ tag }</p>
        {/each}
    </div>
</div>