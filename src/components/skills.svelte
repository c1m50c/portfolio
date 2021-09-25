<script lang="ts">

</script>


<style>
    h3 {
        text-align: center;
    }

    .info-card-container {
        display: grid;
        gap: 1rem;
        justify-content: center;
        grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    }

    .info-card {
        /* Todo: Shouldn't have to do this? */
        color: var(--base-text-color);
        text-decoration: none;
    }
</style>


<div class="info-container" id="skills">
    <h2>Skills</h2>
    <div class="info-card-container">
        <a class="info-card link-button" id="python" href="https://www.python.org/">
            <h3>Python 🐍</h3>
        </a>
        <a class="info-card link-button" id="rust" href="https://www.rust-lang.org/">
            <h3>Rust 🦀</h3>
        </a>
        <a class="info-card link-button" id="java_script" href="https://www.javascript.com/">
            <h3>JavaScript ☕</h3>
        </a>
        <a class="info-card link-button" id="type_script" href="https://www.typescriptlang.org/">
            <h3>TypeScript 📰</h3>
        </a>
        <a class="info-card link-button" id="sass" href="https://sass-lang.com/">
            <h3>Sass 💄</h3>
        </a>
        <a class="info-card link-button" id="flutter" href="https://flutter.dev/">
            <h3>Flutter 🦋</h3>
        </a>
        <a class="info-card link-button" id="react" href="https://reactjs.org/">
            <h3>React ⚡</h3>
        </a>
        <a class="info-card link-button" id="svelte" href="https://svelte.dev/">
            <h3>Svelte 📙</h3>
        </a>
        <a class="info-card link-button" id="godot" href="https://godotengine.org/">
            <h3>Godot 🤖</h3>
        </a>
    </div>
</div>