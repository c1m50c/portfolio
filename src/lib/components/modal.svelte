<script lang="ts">
    export let opened: boolean = false;
    let dialog: HTMLDialogElement;

    $: if (dialog && opened) dialog.showModal();
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog
    class="backdrop:bg-cat-crust/80 bg-transparent outline-none"
    on:keydown={(event) => (event.key === "Escape" && opened ? dialog.close() : undefined)}
    on:click|self={() => dialog.close()}
    on:close={() => (opened = false)}
    bind:this={dialog}
    aria-modal
>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click|stopPropagation>
        <slot />
    </div>
</dialog>

<style>
    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes zoom-in {
        from {
            transform: scale(0.95);
        }
        to {
            transform: scale(1);
        }
    }

    dialog[open] {
        animation: zoom-in 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    dialog[open]::backdrop {
        animation: fade-in 0.2s ease-out;
    }
</style>
