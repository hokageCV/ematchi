<script>
    import Tile from "./Tile.svelte";
</script>

<div class="grid">
    {#each Array(16) as _}
        <Tile />
    {/each}
</div>

<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(4, 1fr);
        grid-gap: 0.5em;
        height: 80vmin;
    }
</style>
