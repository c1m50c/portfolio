<script lang="ts">
    import SkillInfo from "./skill_info.svelte";

    /**
     * Contains the path of the `.json` file coresponding to the Skill.
     */
    export let json: string;


    /**
     * Contains a `Promise` containing the `Object` of the `json` File.
     */
    let json_promise: Promise<Object> = fetch_json();


    /**
     * Fetches the `.json` file at the path of the `json` prop, 
     * setting `json_promise` to the `Promise` of the `Object`.
     */
    async function fetch_json(): Promise<Object> {
        console.log(json);
        const response = await fetch(json);
        const obj = await response.json();

        if (response.ok) {
            return obj;
        }
        
        throw new Error(obj);
    }

    /**
     * Pops up a `SkillInfo` Component coresponding to the items within the passed through `skill_obj`.
     */
    function add_skill_info(skill_obj: Object) {
        let _ = new SkillInfo({
            target: document.body,
            props: {
                obj: skill_obj,
            },
        });
    }
</script>


<style>
    h3 {
        font-size: 1.75rem;
        font-weight: 700;
        text-align: center;
    }
    
    .skill-button {
        color: var(--base-text-color);
        text-decoration: none;
        background-size: 190% 190%;
        background-position: center;
        background-repeat: no-repeat;
        background-blend-mode: multiply;
        border: none;
        box-shadow: 0rem 0.5rem 0.5rem #101010;
    }

    .skill-button:hover { background-size: 115% 115%; }
</style>


{#await json_promise then skill_obj}
    <button class="link-button skill-button {skill_obj["background"]}" on:click={() => { add_skill_info(skill_obj) }}>
        <h3>{skill_obj["name"]}</h3>
    </button>
{/await}