<script lang="ts">
    import NavigationBar from "./components/navigation_bar.svelte";
</script>


<style>
    :global(:root) {
        --font-size: 16px;
        --base-text-color: rgb(51, 51, 51);
        --button-foreground-color: rgb(100, 228, 190);
        --button-background-color: rgb(48, 157, 128);
        --hover-foreground-color: rgb(242, 100, 126);
        --hover-background-color: rgb(130, 52, 66);
    }

    main {
        font-size: var(--font-size);
        padding: 3rem 1rem;
    }

    section {
        padding: 1rem;
        background-color: rgb(30, 30, 30);
    }
</style>


<NavigationBar/>
<main>
    <section id="welcome">
        <h2>Hey! I'm Pere.</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, tempore incidunt dignissimos hic quidem ratione saepe eius, illo maxime tempora exercitationem perspiciatis? Assumenda quae, ab qui corporis nulla iusto. Hic?
            Modi voluptatum est veritatis quas voluptate aliquam pariatur quam odio voluptatem suscipit et fugit, culpa illum laudantium, dicta officia ab in maiores corporis. Consequatur maxime voluptate voluptas dolores reprehenderit quos?
            Sapiente assumenda id soluta. Maiores esse ullam accusantium debitis illo perspiciatis aperiam laborum sit optio et nisi distinctio iure quasi hic magni impedit, suscipit cum vitae commodi beatae id? Necessitatibus.
            Esse quas suscipit veniam iure minima velit culpa non aliquam itaque numquam dolor, doloremque, voluptatibus quos nisi ad labore architecto delectus modi! Vel quae officia fuga maiores optio a minima.
            Molestiae dolore id rem provident similique dicta quod architecto quidem perspiciatis, eius facilis tempore nisi perferendis officiis. Minus saepe provident laborum? Tempora rerum commodi ullam consectetur rem nesciunt ab eveniet!
        </p>
    </section>
</main>