<script lang="ts">
    export let title: string;
    export let href: string;
</script>


<style>
    :root {
        --bg-clr: rgb(228, 77, 115);
        --bg-clr-hover: rgb(230, 114, 143);
    }

    .nav-button {
        color: var(--base-text-color);
        background-color: var(--bg-clr);
        border-style: none;
        padding: 0.5rem;
        text-align: center;
        text-decoration: none;
        transition: background-color 300ms ease-in-out;
    }

    .nav-button:hover {
        background-color: var(--bg-clr-hover);
    }
</style>


<a class="nav-button" href={href}>
    {title}
</a>