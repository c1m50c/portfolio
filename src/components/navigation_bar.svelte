<script lang="ts">

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

    .navbar-link {
        display: inline-block;
        font-size: 18px;
        text-decoration: none;
        text-align: center;
        padding: 3px;
        color: var(--button-text-color);
        font-weight: 600;
        position: relative;
        background-color: var(--button-foreground-color);
        box-shadow: var(--link-box-shadow-size) var(--button-background-color);
        transition: all var(--transition-settings);
    }

    .navbar-link::after {
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

    .navbar-link:hover::after {
        transform: scaleX(1);
    }

    .navbar-link:hover, .navbar-link:focus {
        background-color: var(--hover-foreground-color);
        box-shadow: var(--link-box-shadow-size) var(--hover-background-color);
    }
</style>


<div class="navigation-bar-container">
    <nav class="navigation-bar">
        <a href="/" class="navbar-link">Welcome</a>
        <a href="/" class="navbar-link">About</a>
        <a href="/" class="navbar-link">Skills</a>
        <a href="/" class="navbar-link">Projects</a>
        <a href="/" class="navbar-link">Resume</a>
        <a href="/" class="navbar-link">Contact</a>
    </nav>
</div>