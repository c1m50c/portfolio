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
    }

    .favorite { position: relative; }
    .favorite::before {
        content: "💖";
        position: absolute;
        width: 100%;
        font-size: 1.5rem;
        bottom: 5%;
        left: 43%;
        text-shadow: black 0.1rem 0.1rem 0.1rem;
    }
</style>


<div class="info-container" id="skills">
    <h1>Skills</h1>
    <!-- Todo: Arrange based on skill-level (comfortable-ness / experience) -->
    <div class="languages-container">
        <h2>Languages 💬</h2>
        <div class="info-card-container">
            <a class="link-button info-card favorite" id="python" href="https://www.python.org/">
                <h3>Python 🐍</h3>
            </a>
            <a class="link-button info-card" id="rust" href="https://www.rust-lang.org/">
                <h3>Rust 🦀</h3>
            </a>
            <a class="link-button info-card" id="go" href="https://golang.org/">
                <h3>Go 💨</h3>
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
        </div>
    </div>
</div>