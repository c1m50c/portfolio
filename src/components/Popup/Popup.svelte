<script lang="ts">
    let background: HTMLElement | null;

    const remove_self = () => {
        background.parentNode.removeChild(background);
    }
</script>

<style>
    .popup {
        position: fixed;
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;

        background-color: rgb(24, 24, 24, 0.75);
    }

    .popup .center {
        position: relative;
        display: flex;
        justify-content: center;

        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
    }
</style>

<div class="popup" bind:this={background} on:click|self={remove_self}>
    <div class="center">
        <slot name="center" />
    </div>
</div>