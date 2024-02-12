<script lang="ts">
    import SkillSection from "$lib/components/skill_section.svelte";

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

        <SkillSection
            name="Libraries & Frameworks"
            description="Collection of libraries and frameworks that I have experience using."
            skills={LIBRARY_AND_FRAMEWORK_SKILLS}
        />

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

<section id="contact">
    <h2 class="text-xl text-center">Contact</h2>
</section>
