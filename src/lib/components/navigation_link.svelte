<script lang="ts">
    export let href: string;
</script>

<a
    class="transition-colors text-cat-subtext0/80 hover:text-cat-subtext1 hover-growing-underline"
    {href}
>
    <slot />
</a>
