<script lang="ts">
</script>


<style>
    h3 {
        font-size: 1.25rem;
        text-align: center;
    }

    .info-container {
        display: grid;
        gap: 1rem;
    }

    .info-card-container {
        display: grid;
        gap: 1.5rem;
        justify-content: center;
        grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    }

    .info-card {
        /* Todo: Shouldn't have to do this? */
        color: var(--base-text-color);
        text-decoration: none;
        background-size: 175% 175%;
        background-position: center;
        background-repeat: no-repeat;
        background-blend-mode: multiply;
    }

    /* Languages ~ Backgrounds */
    #python { background-image: url("/logos/languages/python.svg/"); }
    #rust { background-image: url("/logos/languages/rust.svg/"); }
    #java_script { background-image: url("/logos/languages/java_script.svg/"); }
    #type_script { background-image: url("/logos/languages/type_script.svg/"); }
    #html { background-image: url("/logos/languages/html.svg/"); }
    #css { background-image: url("/logos/languages/css.svg/"); }
    #sql { background-image: url("/logos/languages/sql.svg/"); }
    #lua { background-image: url("/logos/languages/lua.svg/"); }
    #c_sharp { background-image: url("/logos/languages/c_sharp.svg/"); }
    #dart { background-image: url("/logos/languages/dart.svg/"); }

    /* Libs & Frameworks ~ Backgrounds */
    #flask { background-image: url("/logos/languages/python.svg/"); }
    #sqlite { background-image: url("/logos/languages/sql.svg/"); }
    #react { background-image: url("/logos/languages/java_script.svg/"); }
    #vue { background-image: url("/logos/languages/java_script.svg/"); }
    #svelte { background-image: url("/logos/languages/java_script.svg/"); }
    #tailwind { background-image: url("/logos/languages/css.svg/"); }
    #sass { background-image: url("/logos/languages/css.svg/"); }
    #flutter { background-image: url("/logos/languages/dart.svg/"); }
    #godot { background-image: url("/logos/godot.svg/"); }

    /* Misc Tech ~ Backgrounds */
    #google { background-image: url("/logos/google.svg/"); }
    #git { background-image: url("/logos/git.svg/"); }
    #npm { background-image: url("/logos/languages/java_script.svg/"); }
</style>


<div class="info-container" id="skills">
    <h1>Skills</h1>
    <!-- Todo: Arrange based on skill-level (comfortable-ness / experience) -->
    <div class="languages-container">
        <h2>Languages 💬</h2>
        <div class="info-card-container">
            <a class="link-button info-card" id="python" href="https://www.python.org/">
                <h3>Python 🐍</h3>
            </a>
            <a class="link-button info-card" id="rust" href="https://www.rust-lang.org/">
                <h3>Rust 🦀</h3>
            </a>
            <a class="link-button info-card" id="java_script" href="https://www.javascript.com/">
                <h3>JavaScript ☕</h3>
            </a>
            <a class="link-button info-card" id="type_script" href="https://www.typescriptlang.org/">
                <h3>TypeScript 📰</h3>
            </a>
            <a class="link-button info-card" id="html" href="https://en.wikipedia.org/wiki/HTML">
                <h3>HTML 📄</h3>
            </a>
            <a class="link-button info-card" id="css" href="https://en.wikipedia.org/wiki/CSS">
                <h3>CSS 📑</h3>
            </a>
            <a class="link-button info-card" id="sql" href="https://en.wikipedia.org/wiki/SQL">
                <h3>SQL 📂</h3>
            </a>
            <a class="link-button info-card" id="lua" href="https://www.lua.org/">
                <h3>Lua 🌌</h3>
            </a>
            <a class="link-button info-card" id="c_sharp" href="https://docs.microsoft.com/en-us/dotnet/csharp/">
                <h3>C# 🌳</h3>
            </a>
            <a class="link-button info-card" id="dart" href="https://dart.dev/">
                <h3>Dart 🎯</h3>
            </a>
        </div>
    </div>
    <div class="libraies-and-frameworks-container">
        <h2>Libraries & Frameworks 📚</h2>
        <div class="info-card-container">
            <a class="link-button info-card" id="flask" href="https://github.com/pallets/flask/">
                <h3>Flask 🧪</h3>
            </a>
            <a class="link-button info-card" id="sqlite" href="https://sqlite.org/index.html">
                <h3>SQLite 💾</h3>
            </a>
            <a class="link-button info-card" id="react" href="https://reactjs.org/">
                <h3>React ⚡</h3>
            </a>
            <a class="link-button info-card" id="vue" href="https://vuejs.org/">
                <h3>Vue 🌴</h3>
            </a>
            <a class="link-button info-card" id="svelte" href="https://svelte.dev/">
                <h3>Svelte 📙</h3>
            </a>
            <a class="link-button info-card" id="tailwind" href="https://tailwindcss.com/">
                <h3>Tailwind 🍃</h3>
            </a>
            <a class="link-button info-card" id="sass" href="https://sass-lang.com/">
                <h3>Sass 💄</h3>
            </a>
            <a class="link-button info-card" id="flutter" href="https://flutter.dev/">
                <h3>Flutter 🦋</h3>
            </a>
            <a class="link-button info-card" id="godot" href="https://godotengine.org/">
                <h3>Godot 🤖</h3>
            </a>
        </div>
    </div>
    <div class="misc-tech-container">
        <h2>Miscellaneous Technologies ❓</h2>
        <div class="info-card-container">
            <a class="link-button info-card" id="google" href="https://google.com">
                <h3>Google 🔍</h3>
            </a>
            <a class="link-button info-card" id="git" href="https://git-scm.com/">
                <h3>Git 💻</h3>
            </a>
            <a class="link-button info-card" id="npm" href="https://www.npmjs.com/">
                <h3>NPM 📦</h3>
            </a>
        </div>
    </div>
</div>