<script lang="ts">
    import LogoLink, { Icons } from "./logo_link.svelte";


    /**
     * `Object` from the parsed `json` file within `SkillButton`.
     */
    export let obj: Object;


    /**
     * Reference to the Background of the `SkillInfo`.
     */
    let bg_ref: HTMLElement | null;
</script>


<style>
    .skill-info {
        animation: fade-in 200ms linear;
    }

    .background {
        position: fixed;
        background-color: rgba(26, 26, 26, 0.75);
        display: flex;
        z-index: 2000;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        justify-content: center;
        align-items: center;
    }

    .info-box {
        background-color: rgb(48, 48, 48);
        padding: 0.25rem 1rem;
        width: 75%;
        height: 75%;

        background-size: 175% 175%;
        background-position: center;
        background-repeat: no-repeat;
        background-blend-mode: multiply;
        box-shadow: 0rem 0.5rem 0.5rem #101010;
    }

    .info-box header {
        display: flex;
        align-items: center;
    }

    .info-box :global(.logo) {
        width: 4rem;
        height: 4rem;
        fill: var(--button-foreground-color);
        transition: fill var(--base-transition-settings);
    }

    .info-box :global(.logo:hover) {
        fill: var(--hover-foreground-color);
    }

    .details {
        display: grid;
        gap: 0.5rem;
    }

    .details-card .list {
        display: flex;
        flex-wrap: wrap;
    }

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

    @keyframes fade-in {
        0% { opacity: 0%; }
        100% { opacity: 100%; }
    }

    @keyframes fade-out {
        0% { opacity: 100%; }
        100% { opacity: 0%; }
    }
</style>


<div class="skill-info background" bind:this={bg_ref} on:click|self={() => bg_ref.parentNode.removeChild(bg_ref)}>
    <div class="info-box {obj["background"]}">
        <header>
            <h1 class="name">{obj["name"]}</h1>
        </header>
        <div class="details">
            {#if "description" in obj}
                <div class="details-card description">
                    <h2>Description</h2>
                    <p>{obj["description"]}</p>
                </div>
            {/if}
            {#if "links" in obj}
                <div class="details-card links">
                    <h2>Links</h2>
                    <div class="list">
                        {#each obj["links"] as link}
                            <LogoLink link={link["link"]} icon={link["icon"]} />
                        {/each}
                    </div>
                </div>
            {/if}
        </div>
    </div>
</div>