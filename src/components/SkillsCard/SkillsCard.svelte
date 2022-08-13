<script context="module" lang="ts">
    export type Skill = {
        name: string;
        description: string;
    };
</script>

<script lang="ts">
    import Card from "../Card/Card.svelte";
    import Button from "./Button.svelte";

    const fetch_file = async (path: string): Promise<object> => {
        const response = await fetch(path);
        const object = await response.json();

        if (response.ok) {
            return object;
        }

        throw new Error(object);
    }

    const get_skills = async (): Promise<Skill[]> => {
        let skills: Skill[] = new Array();

        let skills_obj = await fetch_file("json/skills.json");
        console.log(skills_obj)

        for (let key in skills_obj["skills"]) {
            let arr = skills_obj["skills"]

            skills.push({
                name: arr[key]["name"],
                description: arr[key]["description"]
            })
        }

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