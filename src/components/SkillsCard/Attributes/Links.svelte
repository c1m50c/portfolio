<script lang="ts">
    import LogoLink from "../../LinkButton/LogoLink.svelte";
    import type { Link } from "../../../types";

    export let links: Link[];
</script>

<style>
</style>

<div class="attribute" style="grid-column: 1 / span 2;">
    <h2>Links</h2>
    <div class="link-container">
        {#each links as link}
            <LogoLink link={link.url} icon={link.icon} />
        {/each}
    </div>
</div>