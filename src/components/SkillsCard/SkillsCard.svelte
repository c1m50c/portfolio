<script context="module" lang="ts">
    export type Skill = {
        name: string;
    };
</script>

<script lang="ts">
    import Card from "../Card/Card.svelte";
    import Button from "./Button.svelte";

    const get_skills = async (): Promise<Skill[]> => {
        let skills: Skill[] = new Array();

        // TODO:
        // Add `file-system` to NPM
        // Read files from `/skills/`

        return skills;
    }
</script>

<style>
    .button-container {
        gap: 0.5rem;
        display: grid;
        justify-content: center;
        grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    }
</style>

<Card title="Skills" description="hello">
    <div slot="inner-card" class="button-container">
        {#await get_skills() then skills}
            {#each skills as skill}
                <Button skill={skill} />
            {/each}
        {/await}
    </div>
</Card>