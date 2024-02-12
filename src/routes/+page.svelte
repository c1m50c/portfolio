<script lang="ts">
    import { AtSign, GithubIcon, LinkedinIcon } from "lucide-svelte";
    import SkillSection from "$lib/components/skill_section.svelte";
    import { toastsStore } from "$lib/stores";

    import {
        LANGUAGE_SKILLS,
        LIBRARY_AND_FRAMEWORK_SKILLS,
        TECHNOLOGY_TOOLS_AND_SERVICE_SKILLS,
    } from "$lib/skills";
</script>

<section id="about">
    <h2 class="text-xl text-center">About</h2>
</section>

<section id="skills">
    <h2 class="text-xl text-center">Skills</h2>

    <div class="px-2 pb-3 border rounded-md border-cat-base">
        <SkillSection
            name="Languages"
            description="Collection of programming, command and markup languages that I have experience writing in."
            skills={LANGUAGE_SKILLS}
        />

        <hr class="mt-3 border-cat-base" />

        <SkillSection
            name="Libraries & Frameworks"
            description="Collection of libraries and frameworks that I have experience using."
            skills={LIBRARY_AND_FRAMEWORK_SKILLS}
        />

        <hr class="mt-3 border-cat-base" />

        <SkillSection
            name="Technologies, Tools & Services"
            description="Collection of technologies, tools and services that I have experience working with."
            skills={TECHNOLOGY_TOOLS_AND_SERVICE_SKILLS}
        />
    </div>
</section>

<section id="projects">
    <h2 class="text-xl text-center">Projects</h2>
</section>

<section id="contact" class="flex flex-col justify-center items-center">
    <h2 class="text-xl text-center">Contact</h2>

    You can contact me at the links below:

    <button
        id="contact/personal-email-link"
        class="flex gap-x-1 items-center text-cat-green"
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
        class="flex gap-x-1 items-center text-cat-green"
    >
        <LinkedinIcon />
        Pere Wells
    </a>

    <a
        id="contact/personal-github-link"
        href="https://github.com/c1m50c"
        class="flex gap-x-1 items-center text-cat-green"
    >
        <GithubIcon />
        @c1m50c
    </a>
</section>
