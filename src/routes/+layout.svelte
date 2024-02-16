<script lang="ts">
    import Toaster from "$lib/components/toaster.svelte";
    import "../app.css";
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
<slot />
