<script lang="ts">
    /** Scrolls to an element within the page. */
    function scroll_to_element(element_id: string) {
        /* Todo: Offset position by a bit as to not scroll to the top edge of the element. */
        document.getElementById(element_id).scrollIntoView();
        window.scrollBy(0.0, -50.0); // This works but not well on smaller resolution devices, maybe find way to convert measurement based on viewport?
    }
</script>


<style>
    :root {
        --link-box-shadow-size: 0px 0px 0px;
        --transition-settings: 500ms ease;
    }

    .navigation-bar-container {
        position: fixed;
        z-index: 100;
        width: 100%;

        /* Centers a fixed element horizontally! */
        left: 50%;
        transform: translateX(-50%);
    }

    .navigation-bar {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));
        margin: auto;
        width: 95%;
        transition: opacity var(--transition-settings);
    }

    .navbar-button {
        display: inline-block;
        font-size: 18px;
        text-decoration: none;
        text-align: center;
        padding: 3px;
        color: var(--button-text-color);
        font-weight: 600;
        position: relative;
        border: none;
        border-radius: 0px;
        background-color: var(--button-foreground-color);
        box-shadow: var(--link-box-shadow-size) var(--button-background-color);
        transition: all var(--transition-settings);
    }

    .navbar-button::after {
        content: "";
        position: absolute;
        width: 50%;
        height: 2px;
        transform: scaleX(0);
        bottom: 10%;
        left: 25%;
        background-color: var(--button-text-color);
        transform-origin: center;
        transition: transform var(--transition-settings);
    }

    .navbar-button:hover::after, .navbar-button:focus::after {
        transform: scaleX(1);
    }

    .navbar-button:hover, .navbar-button:focus {
        background-color: var(--hover-foreground-color);
        box-shadow: var(--link-box-shadow-size) var(--hover-background-color);
    }

    .navbar-button:hover {
        cursor: pointer;
    }
</style>


<div class="navigation-bar-container">
    <nav class="navigation-bar">
        <button class="navbar-button" on:click={() => {scroll_to_element("welcome")}}>Welcome</button>
        <button class="navbar-button" on:click={() => {scroll_to_element("about")}}>About</button>
        <button class="navbar-button" on:click={() => {scroll_to_element("skills")}}>Skills</button>
        <button class="navbar-button" on:click={() => {scroll_to_element("projects")}}>Projects</button>
        <button class="navbar-button" on:click={() => {scroll_to_element("resume")}}>Resume</button>
        <button class="navbar-button" on:click={() => {scroll_to_element("contact")}}>Contact</button>
    </nav>
</div>