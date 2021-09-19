<script lang="ts">
</script>


<style>
    :root {
        --nav-bar-edge-radius: 13px;
    }

    .navigation-bar-container {
        margin: auto;
        width: 80%;
    }

    nav {
        display: grid;
        grid-template-areas:
            "home about skills resume contact";
    }

    a {
        height: 30px;
        line-height: 30px;
        color: var(--base-text-color);
        font-weight: 600;
        font-size: 18px;
        text-decoration: none;
        background-color: var(--button-foreground-color);
        transition: background-color 500ms;
    }

    a:hover {
        background-color: var(--hover-color);
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