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
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));;
    }

    .info-card {
        display: flexbox;
        padding: 2px;
        position: relative;
        justify-content: center;
        text-align: center;
        align-content: center;
        text-decoration: none;
        border-radius: var(--border-radius);
        background-color: var(--button-foreground-color);
        color: var(--base-text-color);
        transition: all 500ms ease;
    }

    .info-card::after {
        content: "";
        position: absolute;
        width: 50%;
        height: 2px;
        transform: scaleX(0);
        bottom: 25%;
        left: 25%;
        background-color: var(--button-text-color);
        transform-origin: center;
        transition: transform 500ms ease;
    }

    .info-card:hover::after, .info-card:focus::after {
        transform: scaleX(1);
    }

    .info-card:hover, .info-card:focus {
        background-color: var(--hover-foreground-color);
    }

    .info-card:hover {
        cursor: pointer;
    }
</style>


<div class="info-container" id="skills">
    <h2>Skills</h2>
    <p>
        All of these things I feel pretty comfortable with.
    </p>
    <div class="info-card-container">
        <a class="info-card" id="python" href="https://www.python.org/">
            <h3>Python 🐍</h3>
        </a>
        <a class="info-card" id="rust" href="https://www.rust-lang.org/">
            <h3>Rust 🦀</h3>
        </a>
        <a class="info-card" id="java_script" href="https://www.javascript.com/">
            <h3>JavaScript ☕</h3>
        </a>
        <a class="info-card" id="react" href="https://reactjs.org/">
            <h3>React ⚡</h3>
        </a>
        <a class="info-card" id="svelte" href="https://svelte.dev/">
            <h3>Svelte 📙</h3>
        </a>
        <a class="info-card" id="vue" href="https://vuejs.org/">
            <h3>Vue 🌴</h3>
        </a>
        <a class="info-card" id="django" href="https://www.djangoproject.com/">
            <h3>Django 🧩</h3>
        </a>
        <a class="info-card" id="flask" href="https://github.com/pallets/flask">
            <h3>Flask 🧪</h3>
        </a>
        <a class="info-card" id="godot" href="https://godotengine.org/">
            <h3>Godot 🤖</h3>
        </a>
    </div>
</div>