<script lang="ts">
    import { toastsStore, type Toast as ToastType } from "$lib/stores";
    import { fade } from "svelte/transition";
    import Toast from "./toast.svelte";

    let toasts: ToastType[] = [];

    toastsStore.subscribe((x) => (toasts = x));
</script>

<ul id="toasts" class="absolute z-10 top-0 right-0 m-2 flex flex-col gap-1">
    {#each toasts as toast}
        <li in:fade={{ duration: 250 }} out:fade={{ duration: 250 }}>
            <Toast {toast} />
        </li>
    {/each}
</ul>
