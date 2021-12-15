<script lang="ts">
    /**
     * Name of the logo to display in the background of the button.
     * 
     * ## Valid Options
     * - **Languages**
     *    - python
     *    - rust
     *    - go
     *    - java-script
     *    - type-script
     *    - html
     *    - css
     *    - sql
     *    - c
     *    - cpp
     *    - c-sharp
     *    - lua
     *    - gdscript
     * - **Technologies**
     *    - google
     *    - git
    */
    export let background: string;


    /**
     * Name of the Skill, the primary text on the skill button.
     */
    export let name: string;


    /**
     * Coresponding Skill Link, when the button is pressed it will redirect the user to the site.
     */
    export let link: string;
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
        box-shadow: 0rem 0.5rem 0.5rem #101010;
    }

    .skill-button:hover { background-size: 115% 115%; }

    /* Backgrounds */
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
    .gdscript { background-image: url("./../logos/godot.svg"); }
    .google { background-image: url("./../logos/google.svg"); }
    .git { background-image: url("./../logos/git.svg"); }
</style>


<a class="link-button skill-button {background}" href={link}>
    <h3>{name}</h3>
</a>