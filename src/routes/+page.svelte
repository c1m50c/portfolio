<script lang="ts">
    import Modal from "$lib/components/modal.svelte";
    import SkillSection from "$lib/components/skill_section.svelte";

    import {
        LANGUAGE_SKILLS,
        LIBRARY_AND_FRAMEWORK_SKILLS,
        TECHNOLOGY_TOOLS_AND_SERVICE_SKILLS,
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
        description="Grouping of technologies, tools and services that I have experience working with."
        skills={TECHNOLOGY_TOOLS_AND_SERVICE_SKILLS}
    />
</section>

<section id="projects">
    <h2 class="text-xl">Projects</h2>
</section>

<section id="contact">
    <h2 class="text-xl">Contact</h2>
</section>
