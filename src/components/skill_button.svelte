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
                link: skill_obj["link"],
                name: skill_obj["name"],
                background: skill_obj["background"],
                description: skill_obj["description"],
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

    /* Backgrounds, Should corespond to the values of the enum `Backgrounds` */
    .python { background-image: url("./../logos/languages/python.svg"); }
    .rust { background-image: url("./../logos/languages/rust.svg"); }
    .go { background-image: url("./../logos/languages/go.svg"); }
    .java-script { background-image: url("./../logos/languages/java_script.svg"); }
    .type-script { background-image: url("./../logos/languages/type_script.svg"); }
    .html { background-image: url("./../logos/languages/html.svg"); }
    .css { background-image: url("./../logos/languages/css.svg"); }
    .sql { background-image: url("./../logos/languages/sql.svg"); }
    .c { background-image: url("./../logos/languages/c.svg"); }
    .cpp { background-image: url("./../logos/languages/cpp.svg"); }
    .c-sharp { background-image: url("./../logos/languages/c_sharp.svg"); }
    .lua { background-image: url("./../logos/languages/lua.svg"); }
    .godot { background-image: url("./../logos/godot.svg"); }
    .google { background-image: url("./../logos/google.svg"); }
    .git { background-image: url("./../logos/git.svg"); }
    .web-assembly { background-image: url("./../logos/web_assembly.svg"); }
</style>


{#await json_promise then skill_obj}
    <button class="link-button skill-button {skill_obj["background"]}" on:click={() => { add_skill_info(skill_obj) }}>
        <h3>{skill_obj["name"]}</h3>
    </button>
{/await}