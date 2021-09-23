<script lang="ts">

</script>


<style>
    :root {
        --link-box-shadow-size: 0px 3px;
        --navigation-bar-edge-radius: 11px;
    }

    .navigation-bar-container {
        position: fixed;
        width: 95%;

        /* Centers a fixed element horizontally! */
        left: 50%;
        transform: translateX(-50%);
    }

    .navigation-bar {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        margin: auto;
    }

    .navbar-link {
        font-size: 18px;
        text-decoration: none;
        text-align: center;
        padding: 3px;
        color: var(--base-text-color);
        font-weight: 600;
        background-color: var(--button-foreground-color);
        box-shadow: var(--link-box-shadow-size) var(--button-background-color);
        transition: background-color 500ms ease, box-shadow 500ms ease;
    }

    .navbar-link:hover, .navbar-link:focus {
        background-color: var(--hover-foreground-color);
        box-shadow: var(--link-box-shadow-size) var(--hover-background-color);
    }

    .navbar-link:first-child {
        border-top-left-radius: var(--navigation-bar-edge-radius);
        border-bottom-left-radius: var(--navigation-bar-edge-radius);
    }

    .navbar-link:last-child {
        border-top-right-radius: var(--navigation-bar-edge-radius);
        border-bottom-right-radius: var(--navigation-bar-edge-radius);
    }
</style>


<div class="navigation-bar-container">
    <nav class="navigation-bar">
        <a href="/" class="navbar-link">About</a>
        <a href="/" class="navbar-link">Skills</a>
        <a href="/" class="navbar-link">Experience</a>
        <a href="/" class="navbar-link">Resume</a>
        <a href="/" class="navbar-link">Contact</a>
    </nav>
</div>