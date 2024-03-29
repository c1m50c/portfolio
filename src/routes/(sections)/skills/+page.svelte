<script lang="ts">
    import SkillSection from "$lib/components/skill_section.svelte";

    import {
        LANGUAGE_SKILLS,
        LIBRARY_AND_FRAMEWORK_SKILLS,
        TECHNOLOGY_TOOLS_AND_SERVICE_SKILLS,
    } from "$lib/skills";
</script>

<div class="w-full h-full flex flex-col justify-center items-center">
    <h2 class="text-center text-2xl">Skills</h2>

    <div class="px-16">
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
</div>
