<script lang="ts">
    import { AtSign, GithubIcon, LinkedinIcon } from "lucide-svelte";
    import { toastsStore } from "$lib/stores";
</script>

<div class="w-full h-full flex flex-col justify-center items-center">
    <h2 class="text-center text-2xl">Contact</h2>

    <div
        class="flex flex-col justify-center items-center bg-cat-crust/80 border-cat-base border rounded-lg relative shadow-xl p-4"
    >
        You can contact me at the links below:

        <button
            id="contact/personal-email-link"
            class="flex gap-x-1 items-center text-cat-blue hover:text-cat-sky transition-colors"
            on:click={() => {
                navigator.clipboard.writeText("pereiswell@gmail.com");
                toastsStore.push("Copied text to clipboard!");
            }}
        >
            <AtSign />
            pereiswell@gmail.com
        </button>

        <a
            id="contact/personal-linkedin-link"
            href="https://www.linkedin.com/in/pere-wells/"
            class="flex gap-x-1 items-center text-cat-blue hover:text-cat-sky transition-colors"
        >
            <LinkedinIcon />
            Pere Wells
        </a>

        <a
            id="contact/personal-github-link"
            href="https://github.com/c1m50c"
            class="flex gap-x-1 items-center text-cat-blue hover:text-cat-sky transition-colors"
        >
            <GithubIcon />
            @c1m50c
        </a>
    </div>
</div>
