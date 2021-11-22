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
</style>


<div class="info-container" id="skills">
    <h1 class="section-title">Skills</h1>
    <!-- Todo: Arrange based on skill-level (comfortable-ness / experience) -->
    <div class="languages-container">
        <h2 class="section-title">Languages 💬</h2>
        <div class="info-card-container">
            <SkillButton background="python" name="Python 🐍" link="https://www.python.org/" />
            <SkillButton background="rust" name="Rust 🦀" link="https://www.rust-lang.org/" />
            <SkillButton background="go" name="Go 💨" link="https://golang.org/" />
            <SkillButton background="java-script" name="JavaScript ☕" link="https://www.javascript.com/" />
            <SkillButton background="type-script" name="TypeScript 📰" link="https://www.typescriptlang.org/" />
            <SkillButton background="html" name="HTML 📄" link="https://en.wikipedia.org/wiki/HTML" />
            <SkillButton background="css" name="CSS 📑" link="https://en.wikipedia.org/wiki/CSS" />
            <SkillButton background="sql" name="SQL 📂" link="https://en.wikipedia.org/wiki/SQL" />
            <SkillButton background="c" name="C 🔧" link="https://en.wikipedia.org/wiki/C_(programming_background)" />
            <SkillButton background="cpp" name="C++ 🔨" link="https://en.wikipedia.org/wiki/C%2B%2B" />
            <SkillButton background="c-sharp" name="C# 🌳" link="https://docs.microsoft.com/en-us/dotnet/csharp/" />
            <SkillButton background="lua" name="Lua 🌌" link="https://www.lua.org/" />
            <SkillButton background="gdscript" name="GDScript 🎮" link="https://docs.godotengine.org/en/stable/getting_started/scripting/gdscript/index.html" />
        </div>
    </div>
    <div class="libraies-engines-and-frameworks-container">
        <h2 class="section-title">Libraries, Engines & Frameworks 📚</h2>
        <div class="info-card-container">
            <SkillButton background="python" name="Matplotlib 📊" link="https://matplotlib.org" />
            <SkillButton background="python" name="Pandas 🐼" link="https://pandas.pydata.org/" />
            <SkillButton background="python" name="NumPy 🧮" link="https://numpy.org/" />
            <SkillButton background="python" name="OpenCV 📸" link="https://opencv.org/" />
            <SkillButton background="python" name="Mediapipe 🔬" link="https://google.github.io/mediapipe/" />
            <SkillButton background="python" name="Flask 🧪" link="https://github.com/pallets/flask/" />
            <SkillButton background="sql" name="SQLite 💾" link="https://sqlite.org/index.html" />
            <SkillButton background="java-script" name="React ⚡" link="https://reactjs.org/" />
            <SkillButton background="java-script" name="Vue 🌴" link="https://vuejs.org/" />
            <SkillButton background="java-script" name="Svelte 📙" link="https://svelte.dev/" />
            <SkillButton background="css" name="Tailwind 🍃" link="https://tailwindcss.com/" />
            <SkillButton background="css" name="SASS 💄" link="https://sass-lang.com/" />
            <SkillButton background="gdscript" name="Godot 🤖" link="https://godotengine.org/" />
        </div>
    </div>
    <div class="misc-tech-container">
        <h2 class="section-title">Miscellaneous Technologies ❓</h2>
        <div class="info-card-container">
            <SkillButton background="google" name="Google 🔍" link="https://google.com" />
            <SkillButton background="git" name="Git 💻" link="https://git-scm.com/" />
            <SkillButton background="java-script" name="NPM 📦" link="https://www.npmjs.com/" />
        </div>
    </div>
</div>