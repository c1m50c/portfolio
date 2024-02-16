<script lang="ts">
    import Toaster from "$lib/components/toaster.svelte";
    import "../app.css";
</script>

<Toaster />

<main class="text-sm">
    <slot />
</main>
