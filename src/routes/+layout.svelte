<script lang="ts">
    import Toaster from "$lib/components/toaster.svelte";
    import { browser } from "$app/environment";
    import { fade } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    import "../app.css";

    export let data: { pathname: string };

    if (browser) {
        window.prefersLightMode = window.matchMedia
            ? !window.matchMedia("(prefers-color-scheme: dark)").matches
            : true;

        if (window.matchMedia) {
            window
                .matchMedia("(prefers-color-scheme: dark)")
                .addEventListener("change", (x) => (window.prefersLightMode = !x.matches));
        }
    }
</script>

<svelte:head>
    <meta name="description" content="Personal portfolio site for c1m50c." />
    <meta property="og:image" content="https://portfolio.personal.com/og_image.png" />
    <meta property="og:url" content="https://portfolio.personal.com" />
    <meta property="og:title" content="Portfolio - Peresonal" />
    <meta property="og:description" content="Personal portfolio site for c1m50c." />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="en_US" />
    <title>Portfolio - Peresonal</title>
</svelte:head>

<Toaster />

{#key data.pathname}
    <div
        class={`${window.prefersLightMode ? "cat-latte" : "cat-macchiato"}`}
        transition:fade={{ easing: quintOut }}
    >
        <slot />
    </div>
{/key}
