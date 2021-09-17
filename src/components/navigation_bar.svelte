<script lang="ts">
    function goto_section(section: string) {
        /* Changes scroll position to the coresponding positon of a section */
        switch (section) {
            case "about":
                /* Goto <About/> */
                break
            case "skills":
                /* Goto <Skills/> */
                break
            case "resume":
                /* Goto <Resume/> */
                break
            case "contact":
                /* Goto <Contact/> */
                break
            default:
                console.log("Section '${section}' does not exist.");
                return
        }
    }
</script>


<style>
    .navigation-bar {
        width: 90%;
        margin: auto;
        background-color: rgb(33, 33, 33);
        border-radius: 0.5rem;
        padding: 5px 1px 5px;
    }

    button {
        background-color: var(--button-foreground-color);
        font-weight: 650;
        margin: auto;
        border: none;
        border-radius: 0rem;
        width: 10%;
        position: relative;
        transition: background-color 555ms;
    }

    button:hover {
        cursor: pointer;
        background-color: var(--hover-color);
    }
</style>


<div class="navigation-bar">
    <button id="navigation-button" on:click={() => {goto_section("about")}}>About</button>
    <button id="navigation-button" on:click={() => {goto_section("skills")}}>Skills</button>
    <button id="navigation-button" on:click={() => {goto_section("resume")}}>Resume</button>
    <button id="navigation-button" on:click={() => {goto_section("contact")}}>Contact</button>
</div>