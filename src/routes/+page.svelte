<script lang="ts">
    import Modal from "$lib/components/modal.svelte";

    import {
        LANGUAGE_SKILLS,
        LIBRARY_ENGINE_AND_FRAMEWORK_SKILLS,
        TECHNOLOGY_AND_SERVICE_SKILLS,
        type SkillEntry,
    } from "$lib/skills";

    let selectedSkill: SkillEntry | undefined = undefined;
    let showSkillModal = false;
</script>

<section id="about">
    <h2 class="text-xl">About</h2>
</section>

<section id="skills">
    <h2 class="text-xl">Skills</h2>

    <Modal bind:opened={showSkillModal}>
        <div class="bg-cat-base text-cat-text rounded-md p-4 w-[50vw]">
            <header class="flex w-full items-center justify-between">
                <h2 class="text-3xl">{selectedSkill?.name}</h2>

                {#if selectedSkill?.tags}
                    <ul class="flex gap-x-2">
                        {#each selectedSkill.tags as tag}
                            <li>
                                <p class="text-cat-crust bg-cat-green px-2 rounded-md">{tag}</p>
                            </li>
                        {/each}
                    </ul>
                {/if}
            </header>

            {#if selectedSkill?.description}
                <p>{selectedSkill?.description}</p>
            {/if}

            {#if selectedSkill?.relative_comfort_level}
                <div class="w-full mt-2 flex flex-col items-center justify-center">
                    <p class="text-xl">{selectedSkill.relative_comfort_level}/10</p>
                    <p class="text-xs text-cat-subtext0/80">Relative Comfort Level</p>
                </div>
            {/if}
        </div>
    </Modal>

    <section id="skills/languages">
        <h3 class="text-lg">Languages</h3>

        <ul class="w-full flex items-center justify-stretch gap-x-2">
            {#each LANGUAGE_SKILLS as skill}
                <li id={"skills/languages/" + skill.name.toLowerCase()}>
                    <button
                        class="text-cat-crust bg-cat-pink hover:bg-cat-peach select-none cursor-pointer transition-colors px-2 rounded-sm"
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

    <section id="skills/libraries-engines-and-frameworks">
        <h3 class="text-lg">Libraries, Engines & Frameworks</h3>

        <ul class="flex gap-x-2">
            {#each LIBRARY_ENGINE_AND_FRAMEWORK_SKILLS as skill}
                <li id={"skills/libraries-engines-and-frameworks/" + skill.name.toLowerCase()}>
                    <p
                        class="text-cat-crust bg-cat-pink hover:bg-cat-peach select-none cursor-pointer transition-colors px-2 rounded-sm"
                    >
                        {skill.name}
                    </p>
                </li>
            {/each}
        </ul>
    </section>

    <section id="skills/technologies-and-services">
        <h3 class="text-lg">Technologies & Services</h3>

        <ul class="flex gap-x-2">
            {#each TECHNOLOGY_AND_SERVICE_SKILLS as skill}
                <li id={"skills/technologies-and-services/" + skill.name.toLowerCase()}>
                    <p
                        class="text-cat-crust bg-cat-pink hover:bg-cat-peach select-none cursor-pointer transition-colors px-2 rounded-sm"
                    >
                        {skill.name}
                    </p>
                </li>
            {/each}
        </ul>
    </section>
</section>

<section id="projects">
    <h2 class="text-xl">Projects</h2>
</section>

<section id="contact">
    <h2 class="text-xl">Contact</h2>
</section>
