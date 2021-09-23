<script lang="ts">

</script>


<style>
    :root {
        --link-box-shadow-size: 0px 4px;
    }

    .navigation-bar-container {
        position: fixed;
        width: 100%;

        /* Centers a fixed element horizontally! */
        left: 50%;
        transform: translateX(-50%);
    }

    .navigation-bar {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        margin: auto;
        width: 95%;
    }

    .navbar-link {
        font-size: 18px;
        text-decoration: none;
        text-align: center;
        padding: 3px;
        color: var(--button-text-color);
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
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
    }

    .navbar-link:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
    }
</style>


<div class="navigation-bar-container">
    <nav class="navigation-bar">
        <a href="/" class="navbar-link">A</a>
        <a href="/" class="navbar-link">Fucking</a>
        <a href="/" class="navbar-link">Bitch-ass</a>
        <a href="/" class="navbar-link">Forward</a>
        <a href="/" class="navbar-link">Slash</a>
    </nav>
</div>