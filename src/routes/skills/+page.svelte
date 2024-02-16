<script lang="ts">
    import SkillSection from "$lib/components/skill_section.svelte";

    import {
        LANGUAGE_SKILLS,
        LIBRARY_AND_FRAMEWORK_SKILLS,
        TECHNOLOGY_TOOLS_AND_SERVICE_SKILLS,
    } from "$lib/skills";
</script>

<h2>Skills</h2>

<SkillSection
    name="Languages"
    description="Collection of programming, command and markup languages that I have experience writing in."
    skills={LANGUAGE_SKILLS}
/>

<hr class="mt-3 mx-10 border-cat-base" />

<SkillSection
    name="Libraries & Frameworks"
    description="Collection of libraries and frameworks that I have experience using."
    skills={LIBRARY_AND_FRAMEWORK_SKILLS}
/>

<hr class="mt-3 mx-10 border-cat-base" />

<SkillSection
    name="Technologies, Tools & Services"
    description="Collection of technologies, tools and services that I have experience working with."
    skills={TECHNOLOGY_TOOLS_AND_SERVICE_SKILLS}
/>
