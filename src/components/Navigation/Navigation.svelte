<script lang="ts">
    import Button from "./Button.svelte";
</script>


<style>
    .navigation {
        position: fixed;
        width: 100%;
        
        left: 50%;
        transform: translateX(-50%);
    }

    .navigation div {
        display: flex;
        margin: auto;
        width: 95%;
    }

    :global(.navigation .nav-button) {
        flex: 1;
    }
</style>


<nav class="navigation">
    <div>
        <Button title="Skills" href="#skills" />
        <Button title="Experience" href="#experience" />
        <Button title="Projects" href="#projects" />
        <Button title="Contact" href="#contact" />
    </div>
</nav>