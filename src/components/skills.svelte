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

    h1 { font-size: 2.25rem; }
    h2 { font-size: 2rem; }
</style>


<div class="info-container" id="skills">
    <h1 class="section-title">Skills</h1>
    <!-- TODO: Arrange based on skill-level (coziness || experience) -->
    <div class="languages-container">
        <h2 class="section-title">Languages 💬</h2>
        <div class="info-card-container">
            <SkillButton json="../skills/python.json" />
            <!-- <SkillButton background={Backgrounds.Rust} name="Rust 🦀" link="https://www.rust-lang.org/" description="" />
            <SkillButton background={Backgrounds.Go} name="Go 💨" link="https://golang.org/" description="" />
            <SkillButton background={Backgrounds.JavaScript} name="JavaScript ☕" link="https://www.javascript.com/" description="" />
            <SkillButton background={Backgrounds.TypeScript} name="TypeScript 📰" link="https://www.typescriptlang.org/" description="" />
            <SkillButton background={Backgrounds.HTML} name="HTML 📄" link="https://en.wikipedia.org/wiki/HTML" description="" />
            <SkillButton background={Backgrounds.CSS} name="CSS 📑" link="https://en.wikipedia.org/wiki/CSS" description="" />
            <SkillButton background={Backgrounds.SQL} name="SQL 📂" link="https://en.wikipedia.org/wiki/SQL" description="" />
            <SkillButton background={Backgrounds.C} name="C 🔧" link="https://en.wikipedia.org/wiki/C_(programming_background)" description="" />
            <SkillButton background={Backgrounds.CPlusPlus} name="C++ 🔨" link="https://en.wikipedia.org/wiki/C%2B%2B" description="" />
            <SkillButton background={Backgrounds.CSharp} name="C# 🌳" link="https://docs.microsoft.com/en-us/dotnet/csharp/" description="" />
            <SkillButton background={Backgrounds.Lua} name="Lua 🌌" link="https://www.lua.org/" description="" />
            <SkillButton background={Backgrounds.Godot} name="GDScript 🎮" link="https://docs.godotengine.org/en/stable/getting_started/scripting/gdscript/index.html" description="" /> -->
        </div>
    </div>
    <div class="libraies-engines-and-frameworks-container">
        <h2 class="section-title">Libraries, Engines & Frameworks 📚</h2>
        <div class="info-card-container">
            <!-- <SkillButton background={Backgrounds.Python} name="Matplotlib 📊" link="https://matplotlib.org" description="" />
            <SkillButton background={Backgrounds.Python} name="Pandas 🐼" link="https://pandas.pydata.org/" description="" />
            <SkillButton background={Backgrounds.Python} name="NumPy 🧮" link="https://numpy.org/" description="" />
            <SkillButton background={Backgrounds.Python} name="PyTest 🥼" link="https://github.com/pytest-dev/pytest" description="" />
            <SkillButton background={Backgrounds.Python} name="OpenCV 📸" link="https://opencv.org/" description="" />
            <SkillButton background={Backgrounds.Python} name="Mediapipe 🔬" link="https://google.github.io/mediapipe/" description="" />
            <SkillButton background={Backgrounds.Python} name="Flask 🧪" link="https://github.com/pallets/flask/" description="" />
            <SkillButton background={Backgrounds.Rust} name="CPython 🔗" link="https://github.com/dgrunwald/rust-cpython" description="" />
            <SkillButton background={Backgrounds.SQL} name="SQLite 💾" link="https://sqlite.org/index.html" description="" />
            <SkillButton background={Backgrounds.JavaScript} name="React ⚡" link="https://reactjs.org/" description="" />
            <SkillButton background={Backgrounds.JavaScript} name="Vue 🌴" link="https://vuejs.org/" description="" />
            <SkillButton background={Backgrounds.JavaScript} name="Svelte 📙" link="https://svelte.dev/" description="" />
            <SkillButton background={Backgrounds.CSS} name="Tailwind 🍃" link="https://tailwindcss.com/" description="" />
            <SkillButton background={Backgrounds.CSS} name="SASS 💄" link="https://sass-lang.com/" description="" />
            <SkillButton background={Backgrounds.Godot} name="Godot 🤖" link="https://godotengine.org/" description="" /> -->
        </div>
    </div>
    <div class="misc-tech-container">
        <h2 class="section-title">Miscellaneous Technologies ❓</h2>
        <div class="info-card-container">
            <!-- <SkillButton background={Backgrounds.Google} name="Googling 🔍" link="https://google.com" description="" />
            <SkillButton background={Backgrounds.Git} name="Git 💻" link="https://git-scm.com/" description="" />
            <SkillButton background={Backgrounds.JavaScript} name="NPM 📦" link="https://www.npmjs.com/" description="" />
            <SkillButton background={Backgrounds.WebAssembly} name="WebAssembly 🏭" link="https://webassembly.org/" description="" /> -->
        </div>
    </div>
</div>