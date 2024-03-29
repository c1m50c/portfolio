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
        <SkillSection name="Languages" skills={LANGUAGE_SKILLS} />
        <SkillSection name="Libraries & Frameworks" skills={LIBRARY_AND_FRAMEWORK_SKILLS} />

        <SkillSection
            name="Technologies, Tools & Services"
            skills={TECHNOLOGY_TOOLS_AND_SERVICE_SKILLS}
        />
    </div>
</div>
