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

<section id="about" class="text-center">
    <h2 class="text-xl">About</h2>

    <div class="p-2 border rounded-md border-cat-base">
        <p class="text-lg">Hey, I'm Pere 👋</p>
        <p class="text-cat-subtext0">I do software development</p>
    </div>
</section>

<br />

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

<br />

<section id="projects" class="text-center">
    <h2 class="text-xl">Projects</h2>

    <div class="p-2 border rounded-md border-cat-base">
        <i>
            <span class="text-cat-maroon font-bold">TODO: </span>
            Needs to be filled out
        </i>
    </div>
</section>

<br />

<section id="contact">
    <h2 class="text-xl text-center">Contact</h2>

    <div
        class="p-2 border rounded-md border-cat-base flex flex-col justify-center items-center"
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
</section>
