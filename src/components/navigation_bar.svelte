<script lang="ts">
</script>


<style>
    :root {
        --link-box-shadow-size: 0px 0px 0px;
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
        display: flex;
        margin: auto;
        width: 95%;
        box-shadow: black 0.65rem 0.65rem 3rem;
        transition: opacity var(--base-transition-settings);
    }

    .navbar-link {
        flex: 1;
        display: inline-block;
        font-size: 1.2rem;
        text-decoration: none;
        text-align: center;
        padding: 3px;
        color: var(--button-text-color);
        font-weight: 600;
        position: relative;
        border: none;
        background-color: var(--button-foreground-color);
        box-shadow: var(--link-box-shadow-size) var(--button-background-color);
        transition: all var(--base-transition-settings);
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
        transition: transform var(--base-transition-settings);
    }

    .navbar-link:hover::after, .navbar-link:focus::after {
        transform: scaleX(1);
    }

    .navbar-link:hover, .navbar-link:focus {
        background-color: var(--hover-foreground-color);
        box-shadow: var(--link-box-shadow-size) var(--hover-background-color);
    }

    .navbar-link:hover {
        cursor: pointer;
    }
</style>


<div class="navigation-bar-container">
    <nav class="navigation-bar">
        <a class="navbar-link" href="#">Welcome</a>
        <a class="navbar-link" href="#about">About</a>
        <a class="navbar-link" href="#skills">Skills</a>
        <a class="navbar-link" href="#projects">Projects</a>
        <a class="navbar-link" href="#contact">Contact</a>
    </nav>
</div>