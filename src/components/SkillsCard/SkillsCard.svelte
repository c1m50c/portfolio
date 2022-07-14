<script lang="ts">
    import Card from "../Card/Card.svelte";
    import Button from "./Button.svelte";
</script>

<style>
    .button-container {
        gap: 0.5rem;
        display: grid;
        justify-content: center;
        grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    }
</style>

<Card title="Skills" description="hello">
    <div slot="inner-card" class="button-container">
        <Button name="Python" />
        <Button name="Python" />
        <Button name="Python" />
        <Button name="Python" />
        <Button name="Python" />
        <Button name="Python" />
        <Button name="Python" />
        <Button name="Python" />
        <Button name="Python" />
        <Button name="Python" />
        <Button name="Python" />
        <Button name="Python" />
    </div>
</Card>