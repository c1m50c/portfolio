<script lang="ts">
    import Modal from "$lib/components/modal.svelte";
    import type { SkillEntry } from "$lib/skills";
    import { Link } from "lucide-svelte";

    export let name: string;

    export let skills: SkillEntry[];

    let selectedSkill: SkillEntry | undefined = undefined;
    let showSkillModal = false;
    let sectionId: string;

    $: sectionId = name
        .toLowerCase()
        .replaceAll(" ", "-")
        .replaceAll(",", "")
        .replaceAll("&", "and");
</script>

<Modal bind:opened={showSkillModal}>
    <div class="bg-cat-base text-cat-text rounded-md p-4 w-[50vw]">
        <header class="flex w-full items-center justify-between">
            <h2 class="text-3xl">{selectedSkill?.name}</h2>

            {#if selectedSkill?.tags}
                <ul class="flex gap-x-2">
                    {#each selectedSkill.tags as tag}
                        <li>
                            <p class="text-cat-crust bg-cat-green px-2 rounded-md">
                                {tag}
                            </p>
                        </li>
                    {/each}
                </ul>
            {/if}
        </header>

        {#if selectedSkill?.description}
            <p class="text-left">{selectedSkill?.description}</p>
        {/if}

        {#if selectedSkill?.relative_comfort_level}
            <div class="w-full mt-2 flex flex-col items-center justify-center">
                <p class="text-xl">{selectedSkill.relative_comfort_level}/10</p>
                <p class="text-xs text-cat-subtext0/80">Relative Comfort Level</p>
            </div>
        {/if}
    </div>
</Modal>

<section
    id={`skills:${sectionId}`}
    class="bg-cat-crust/80 border-cat-base border rounded-lg my-4 relative shadow-xl"
>
    <h3 class="text-lg text-center flex justify-center items-center gap-x-1 group">
        <a class="cursor-pointer" href={`#skills:${sectionId}`}>
            <Link class="size-4 invisible group-hover:visible" />
        </a>

        {name}
    </h3>

    <ul class="w-full flex flex-wrap items-center justify-center gap-x-2 gap-y-1 mb-3 px-2">
        {#each skills as skill}
            <li id={`skills:${sectionId}:${skill.name.toLowerCase().replaceAll(" ", "-")}`}>
                <button
                    class="text-cat-crust bg-cat-pink hover:bg-cat-peach select-none cursor-pointer transition-colors px-4 py-1 rounded-md"
                    on:click={() => {
                        selectedSkill = skill;
                        showSkillModal = true;
                    }}
                >
                    {skill.name}
                </button>
            </li>
        {/each}
    </ul>
</section>
