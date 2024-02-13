<script lang="ts">
    import { toastsStore, type Toast } from "$lib/stores";
    import { onDestroy, onMount } from "svelte";

    export let toast: Toast;

    onMount(() => {
        setTimeout((id: string) => toastsStore.pop(id), 3000, toast.id);
    });

    onDestroy(() => {
        toastsStore.pop(toast.id);
    });
</script>

<div class="w-80 bg-cat-surface0 px-2 rounded-sm text-left flex items-center justify-start">
    <p class="flex-1">{toast.message}</p>
    <button class="text-cat-red" on:click={() => toastsStore.pop(toast.id)}>x</button>
</div>
