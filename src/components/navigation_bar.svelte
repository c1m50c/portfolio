<script lang="ts">
</script>


<style>
    :root {
        --nav-bar-edge-radius: 0px;
    }

    .navigation-bar-container {
        margin: auto;
        width: 95%;
    }

    nav {
        display: grid;
        justify-content: center;
        grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    }

    a {
        height: 30px;
        line-height: 30px;
        margin: auto 0;
        color: var(--base-text-color);
        font-weight: 600;
        font-size: 18px;
        text-decoration: none;
        background-color: var(--button-foreground-color);
        border-radius: 0px;
        box-shadow: 0px 5px var(--button-background-color);
        padding: 0px;
        transition: background-color 500ms ease-in-out, box-shadow 500ms ease-in-out, color 500ms ease-in-out, padding 500ms ease-in-out;
    }

    a:hover {
        background-color: var(--hover-foreground-color);
        box-shadow: 0px 5px var(--hover-background-color);
        color: var(--section-text-color);
        padding: 5px;
    }

    /* Todo: Should probally find a way to not hardcode these to be the edges of the bar */
    .nav-bar #home {
        border-top-left-radius: var(--nav-bar-edge-radius);
        border-bottom-left-radius: var(--nav-bar-edge-radius);
    }

    .nav-bar #contact {
        border-top-right-radius: var(--nav-bar-edge-radius);
        border-bottom-right-radius: var(--nav-bar-edge-radius);
    }
</style>


<div class="navigation-bar-container">
    <nav class="nav-bar">
        <!-- Todo: Make these go to the coresponding positions -->
        <a href="/" id="home">Home</a>
        <a href="/" id="about">About</a>
        <a href="/" id="skills">Skills</a>
        <a href="/" id="resume">Resume</a>
        <a href="/" id="contact">Contact</a>
    </nav>
</div>