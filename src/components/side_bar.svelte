<script lang="ts">

</script>


<style>
    :root {
        --background-color: rgb(40, 40, 40);
        --transition-speed: 600ms;
    }

    .side-bar {
        width: 5rem;
        height: 100vh;
        position: fixed;
        background-color: var(--background-color);
        transition: width 200ms ease;
    }

    .side-bar-nav {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .nav-item {
        width: 100%;
    }

    .nav-link {
        display: flex;
        align-items: center;
        height: 5rem;
    }

    .nav-link img {
        max-width: 2rem;
        margin: 0 1.5rem;
    }

    .link-text {
        display: none;
        margin-left: 1rem;
    }

    .side-bar:hover {
        width: 16rem;
    }

    .side-bar:hover .link-text {
        display: block;
    }
</style>


<nav class="side-bar">
    <ul class="side-bar-nav">
        <li class="nav-item">
            <a href="/" class="nav-link">
                <img src="side-bar-icons/info_circle.svg" alt="about"/>
                <span class="link-text">About</span>
            </a>
        </li>
        <li class="nav-item">
            <a href="/" class="nav-link">
                <img src="side-bar-icons/skills.svg" alt="about"/>
                <span class="link-text">Skills</span>
            </a>
        </li>
        <li class="nav-item">
            <a href="/" class="nav-link">
                <img src="side-bar-icons/resume.svg" alt="about"/>
                <span class="link-text">Resume</span>
            </a>
        </li>
        <li class="nav-item">
            <a href="/" class="nav-link">
                <img src="side-bar-icons/contact.svg" alt="about"/>
                <span class="link-text">Contact</span>
            </a>
        </li>
    </ul>
</nav>