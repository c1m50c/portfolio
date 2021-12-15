<script lang="ts">
    import SkillButton, { Backgrounds } from "./skill_button.svelte";
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
</style>


<div class="info-container" id="skills">
    <h1 class="section-title">Skills</h1>
    <!-- TODO: Arrange based on skill-level (comfortable-ness / experience) -->
    <div class="languages-container">
        <h2 class="section-title">Languages 💬</h2>
        <div class="info-card-container">
            <SkillButton background={Backgrounds.Python} name="Python 🐍" link="https://www.python.org/" />
            <SkillButton background={Backgrounds.Rust} name="Rust 🦀" link="https://www.rust-lang.org/" />
            <SkillButton background={Backgrounds.Go} name="Go 💨" link="https://golang.org/" />
            <SkillButton background={Backgrounds.JavaScript} name="JavaScript ☕" link="https://www.javascript.com/" />
            <SkillButton background={Backgrounds.TypeScript} name="TypeScript 📰" link="https://www.typescriptlang.org/" />
            <SkillButton background={Backgrounds.HTML} name="HTML 📄" link="https://en.wikipedia.org/wiki/HTML" />
            <SkillButton background={Backgrounds.CSS} name="CSS 📑" link="https://en.wikipedia.org/wiki/CSS" />
            <SkillButton background={Backgrounds.SQL} name="SQL 📂" link="https://en.wikipedia.org/wiki/SQL" />
            <SkillButton background={Backgrounds.C} name="C 🔧" link="https://en.wikipedia.org/wiki/C_(programming_background)" />
            <SkillButton background={Backgrounds.CPlusPlus} name="C++ 🔨" link="https://en.wikipedia.org/wiki/C%2B%2B" />
            <SkillButton background={Backgrounds.CSharp} name="C# 🌳" link="https://docs.microsoft.com/en-us/dotnet/csharp/" />
            <SkillButton background={Backgrounds.Lua} name="Lua 🌌" link="https://www.lua.org/" />
            <SkillButton background={Backgrounds.Godot} name="GDScript 🎮" link="https://docs.godotengine.org/en/stable/getting_started/scripting/gdscript/index.html" />
        </div>
    </div>
    <div class="libraies-engines-and-frameworks-container">
        <h2 class="section-title">Libraries, Engines & Frameworks 📚</h2>
        <div class="info-card-container">
            <SkillButton background={Backgrounds.Python} name="Matplotlib 📊" link="https://matplotlib.org" />
            <SkillButton background={Backgrounds.Python} name="Pandas 🐼" link="https://pandas.pydata.org/" />
            <SkillButton background={Backgrounds.Python} name="NumPy 🧮" link="https://numpy.org/" />
            <SkillButton background={Backgrounds.Python} name="PyTest 🥼" link="https://github.com/pytest-dev/pytest" />
            <SkillButton background={Backgrounds.Python} name="OpenCV 📸" link="https://opencv.org/" />
            <SkillButton background={Backgrounds.Python} name="Mediapipe 🔬" link="https://google.github.io/mediapipe/" />
            <SkillButton background={Backgrounds.Python} name="Flask 🧪" link="https://github.com/pallets/flask/" />
            <SkillButton background={Backgrounds.Rust} name="CPython 🔗" link="https://github.com/dgrunwald/rust-cpython" />
            <SkillButton background={Backgrounds.SQL} name="SQLite 💾" link="https://sqlite.org/index.html" />
            <SkillButton background={Backgrounds.JavaScript} name="React ⚡" link="https://reactjs.org/" />
            <SkillButton background={Backgrounds.JavaScript} name="Vue 🌴" link="https://vuejs.org/" />
            <SkillButton background={Backgrounds.JavaScript} name="Svelte 📙" link="https://svelte.dev/" />
            <SkillButton background={Backgrounds.CSS} name="Tailwind 🍃" link="https://tailwindcss.com/" />
            <SkillButton background={Backgrounds.CSS} name="SASS 💄" link="https://sass-lang.com/" />
            <SkillButton background={Backgrounds.Godot} name="Godot 🤖" link="https://godotengine.org/" />
        </div>
    </div>
    <div class="misc-tech-container">
        <h2 class="section-title">Miscellaneous Technologies ❓</h2>
        <div class="info-card-container">
            <SkillButton background={Backgrounds.Google} name="Google 🔍" link="https://google.com" />
            <SkillButton background={Backgrounds.Git} name="Git 💻" link="https://git-scm.com/" />
            <SkillButton background={Backgrounds.JavaScript} name="NPM 📦" link="https://www.npmjs.com/" />
        </div>
    </div>
</div>