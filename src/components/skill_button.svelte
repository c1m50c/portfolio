<script lang="ts" context="module">
    /**
     * Enum containing all valid backgrounds for the prop `background`.
     */
    export const enum Backgrounds {
        // PascalCaseIdentifier = ClassName,
        Python = "python",
        Rust = "rust",
        Go = "go",
        JavaScript = "java-script",
        TypeScript = "type-script",
        HTML = "html",
        CSS = "css",
        SQL = "sql",
        C = "c",
        CPlusPlus = "cpp",
        CSharp = "c-sharp",
        Lua = "lua",
        Godot = "godot",
        Google = "google",
        Git = "git",
        WebAssembly = "web-assembly",
    }
</script>


<script lang="ts">
    /**
     * Name of the logo to display in the background of the button.
    */
    export let background: Backgrounds;


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


<a class="link-button skill-button {background}" href={link}>
    <h3>{name}</h3>
</a>