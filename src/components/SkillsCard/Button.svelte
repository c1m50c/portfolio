<script lang="ts">
    import ButtonPopup from "./ButtonPopup.svelte";
    import type { Skill } from "./SkillsCard.svelte";

    export let skill: Skill;

    const popup = () => {
        let _ = new ButtonPopup({
            target: document.body,
            props: {
                skill: skill
            },
        });
    }
</script>

<style>
    :root {
        --base-clr: rgb(40, 38, 41);
        --hover-clr: rgb(62, 59, 63);
    }

    .skill-button {
        color: var(--bright-text-clr);
        background-color: var(--base-clr);
        padding: 0.1rem 3rem;
        border: none;
        transition: background-color 300ms ease-in-out;
        border-radius: 0.25rem;
        font-weight: 600;
    }

    .skill-button:hover {
        background-color: var(--hover-clr);
        cursor: pointer;
    }
</style>

<button class="skill-button" on:click={popup}>
    <p>{ skill.name }</p>
</button>