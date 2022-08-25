<script lang="ts">
    import Popup from "../Popup/Popup.svelte";
    import Links from "./Attributes/Links.svelte";
    import Tags from "./Attributes/Tags.svelte";
    import type { Skill } from "../../types";

    export let skill: Skill;
</script>

<style>
    :root {
        --logo-link-clr: rgb(238, 186, 74);
        --logo-link-hover-clr: rgb(241, 199, 109);
    }

    .button-popup {
        text-align: center;
    }

    .attribute-container {
        gap: 1rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr)); 
        grid-template-rows: repeat(auto-fit, minmax(12rem, 1fr)); 
        justify-content: center;
    }

    :global(.attribute) {
        background-color: rgb(32, 32, 32);
        overflow-y: auto;
        padding: 1rem;
    }

    :global(.attribute .logo) {
        fill: var(--logo-link-clr);
        height: 3em;
        width: 3em;
        transition: all 300ms ease;
    }

    :global(.attribute .logo:hover) {
        fill: var(--logo-link-hover-clr);
    }
</style>

<Popup>
    <div slot="center" class="button-popup">
        <h1>{ skill.name }</h1>
        <div class="attribute-container">
            <div class="attribute" style="grid-column: 1 / span 2;">
                <h2>Description</h2>
                <p>{ skill.description }</p>
            </div>
            {#if skill.links}
                <Links links={ skill.links } />
            {/if}
            {#if skill.tags}
                <Tags tags={ skill.tags } />
            {/if}
        </div>
    </div>
</Popup>