<script lang="ts">
    import NavigationLink from "$lib/components/navigation_link.svelte";
    import { page } from "$app/stores";
</script>

<main class="flex flex-col w-full h-full justify-center items-center">
    <h1 class="text-5xl text-cat-maroon">{$page.status}</h1>
    <p class="text-2xl text-cat-red">{$page.error?.message}</p>

    <div class="flex flex-col items-center">
        {#if $page.status === 404}
            <NavigationLink href="/">
                <span class="text-xs select-none">Return To Safety</span>
            </NavigationLink>
        {/if}

        <NavigationLink
            href={`https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/${$page.status}`}
        >
            <span class="text-xs select-none"> Learn More </span>
        </NavigationLink>
    </div>
</main>
