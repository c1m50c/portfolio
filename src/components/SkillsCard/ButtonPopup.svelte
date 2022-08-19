<script lang="ts">
    import Popup from "../Popup/Popup.svelte";
    import type { Skill } from "./SkillsCard.svelte";

    export let skill: Skill;
</script>

<style>
    .button-popup {
        text-align: center;
    }

    .attribute-container {
        display: grid;
    }

    .tag-container {
        display: flex;
        gap: 0.5rem;
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
            {#if skill.tags}
                <div class="tags-attribute">
                    <h2>Tags</h2>
                    <div class="tag-container">
                        {#each skill.tags as tag}
                            <p class="tag">{ tag }</p>
                        {/each}
                    </div>
                </div>
            {/if}
            <div class="description-attribute">
                <h2>Description</h2>
                <p>{ skill.description }</p>
            </div>
        </div>
    </div>
</Popup>