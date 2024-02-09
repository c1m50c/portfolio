<script lang="ts">
    import { page } from "$app/stores";

    const MOZILLA_STATUS_CODE_SUPPORT =
        "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/";
</script>

<main class="flex flex-col w-full h-full justify-center items-center">
    <h1 class="text-5xl text-cat-maroon">{$page.status}</h1>
    <p class="text-2xl text-cat-red">{$page.error?.message}</p>

    <div class="flex flex-col items-center">
        {#if $page.status === 404}
            <a class="navigation-link" href="/">
                <span class="text-xs select-none">Return To Safety</span>
            </a>
        {/if}

        <a class="navigation-link" href={MOZILLA_STATUS_CODE_SUPPORT + $page.status}>
            <span class="text-xs select-none">Learn More</span>
        </a>
    </div>
</main>
