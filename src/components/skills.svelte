<script lang="ts">

</script>


<style>
    .skills-container {
        width: 95%;
        margin: auto;
        background-color: var(--section-bg-color);
    }

    h2 {
        text-align: center;
    }

    .skills-icons {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    a {
        text-decoration: none;
    }

    .skill-icon {
        color: var(--button-foreground-color);
        font-weight: 600;
        font-style: italic;
        margin: auto;
        width: 50px;
        height: 50px;
        transition: color 500ms ease-in-out, width 500ms ease-in-out, height 500ms ease-in-out;
    }

    .skill-icon:hover {
        cursor: pointer;
        color: var(--hover-foreground-color);
        width: 75px;
        height: 75px;
    }
</style>


<div class="skills-container">
    <h2>Skills</h2>
    <div class="skills-icons">
        <a href="https://www.python.org/"><img src="python_logo.png" alt="python" class="skill-icon"/></a>
        <a href="https://www.rust-lang.org/"><img src="rust_logo.png" alt="rust" class="skill-icon"/></a>
        <a href="https://www.javascript.com/"><img src="java_script_logo.png" alt="javascript" class="skill-icon"/></a>
        <a href="https://svelte.dev/"><img src="svelte_logo.png" alt="svelte" class="skill-icon"/></a>
        <a href="https://vuejs.org/"><img src="vue_logo.png" alt="vue" class="skill-icon"/></a>
        <a href="https://reactjs.org/"><img src="react_logo.png" alt="react" class="skill-icon"/></a>
    </div>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Exercitationem amet ab vitae neque similique quo totam molestiae delectus aspernatur!
        Ut eum libero dolorum velit nobis.
        Optio omnis deleniti corrupti obcaecati?
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Error sed, consequatur perspiciatis atque amet asperiores nostrum sapiente iusto voluptate consequuntur.
        Facilis animi ducimus repudiandae quos veritatis debitis culpa ipsum alias?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Nostrum recusandae fugiat sapiente nobis magni reprehenderit, earum dolores quo magnam odio mollitia et voluptas sint atque quam!
        Similique expedita aliquid perferendis!
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Eveniet illum fugit neque non nesciunt hic voluptatibus saepe, beatae aperiam recusandae sequi sunt unde explicabo!
        Quaerat pariatur saepe officia officiis corporis.
    </p>
</div>