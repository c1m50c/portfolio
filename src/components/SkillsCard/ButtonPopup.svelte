<script lang="ts">
    import Popup from "../Popup/Popup.svelte";
    import type { Skill } from "./SkillsCard.svelte";

    export let skill: Skill;
</script>

<style>
    .button-popup {
        text-align: center;
    }
</style>

<Popup>
    <div slot="center" class="button-popup">
        <h1>{ skill.name }</h1>
        <hr />
        <p>{ skill.description }</p>
    </div>
</Popup>