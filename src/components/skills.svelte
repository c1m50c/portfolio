<script lang="ts">
    import SkillButton from "./skill_button.svelte";
</script>


<style>
    .info-container {
        display: grid;
        gap: 1rem;
    }

    .info-card-container {
        display: grid;
        gap: 1.5rem;
        justify-content: center;
        grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
    }

    h1 { font-size: 2.25rem; }
    h2 { font-size: 2rem; }
</style>


<div class="info-container" id="skills">
    <h1 class="section-title">Skills</h1>
    <!-- TODO: Maybe do a svelte loop to make these? -->
    <div class="languages-container">
        <h2 class="section-title">Languages 💬</h2>
        <div class="info-card-container">
            <SkillButton json="skills/python.json" />
            <SkillButton json="skills/rust.json" />
            <SkillButton json="skills/go.json" />
            <SkillButton json="skills/java_script.json" />
            <SkillButton json="skills/type_script.json" />
            <SkillButton json="skills/html.json" />
            <SkillButton json="skills/css.json" />
            <SkillButton json="skills/sql.json" />
            <SkillButton json="skills/c.json" />
            <SkillButton json="skills/cpp.json" />
            <SkillButton json="skills/csharp.json" />
            <SkillButton json="skills/lua.json" />
            <SkillButton json="skills/gdscript.json" />
        </div>
    </div>
    <div class="libraies-engines-and-frameworks-container">
        <h2 class="section-title">Libraries, Engines & Frameworks 📚</h2>
        <div class="info-card-container">
            <SkillButton json="skills/matplotlib.json" />
            <SkillButton json="skills/pandas.json" />
            <SkillButton json="skills/numpy.json" />
            <SkillButton json="skills/pytest.json" />
            <SkillButton json="skills/opencv.json" />
            <SkillButton json="skills/mediapipe.json" />
            <SkillButton json="skills/flask.json" />
            <SkillButton json="skills/rust_cpython.json" />
            <SkillButton json="skills/sqlite.json" />
            <SkillButton json="skills/react.json" />
            <SkillButton json="skills/vue.json" />
            <SkillButton json="skills/svelte.json" />
            <SkillButton json="skills/tailwind.json" />
            <SkillButton json="skills/sass.json" />
            <SkillButton json="skills/godot.json" />
        </div>
    </div>
    <div class="misc-tech-container">
        <h2 class="section-title">Miscellaneous Technologies ❓</h2>
        <div class="info-card-container">
            <SkillButton json="skills/google.json" />
            <SkillButton json="skills/git.json" />
            <SkillButton json="skills/npm.json" />
            <SkillButton json="skills/web_assembly.json" />
        </div>
    </div>
</div>