<script lang="ts">
    import Popup from "../Popup/Popup.svelte";
    import type { Skill } from "../../types";

    export let skill: Skill;
</script>

<style>
    .button-popup {
        text-align: center;
        border: 2px solid red;
    }

    .attribute-container {
        display: grid;
        grid-template-columns: repeat(3, 10rem); 
        grid-template-rows: repeat(3, 10rem); 
    }

    .attribute {
    }

    .tag {
        /* padding: 0 1rem; */
        font-weight: 600;
    }
</style>

<Popup>
    <div slot="center" class="button-popup">
        <h1>{ skill.name }</h1>
        <hr />
        <div class="attribute-container">
            <div class="attribute" style="grid-column: 1 / span 2;">
                <h2>Description</h2>
                <p>{ skill.description }</p>
            </div>
            {#if skill.links}
                <div class="attribute" style="grid-column: 1 / span 2;">
                    <h2>Links</h2>
                    <div class="link-container">
                        {#each skill.links as link}
                            <a href={ link.url }>ICON GOES HERE</a>
                        {/each}
                    </div>
                </div>
            {/if}
            {#if skill.tags}
                <div class="attribute" style="grid-row: 1 / span 2; grid-column: 3 / 3;">
                    <h2>Tags</h2>
                    <div class="tag-container">
                        {#each skill.tags as tag}
                            <p class="tag">{ tag }</p>
                        {/each}
                    </div>
                </div>
            {/if}
        </div>
    </div>
</Popup>