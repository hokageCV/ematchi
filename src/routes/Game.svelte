<script>
    import Grid from "./Grid.svelte";
</script>

<div class="game">
    <div class="info" />
    <div class="game-grid">
        <Grid />
    </div>
    <div class="info" />
</div>

<style>
    .game {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        height: 100%;

        /* setting font size, then for child elements using em. provides better control over sizing  */
        font-size: min(1vmin, 0.5rem);
    }

    .info {
        width: 80em;
        height: 10em;
        background-color: var(--infoBG);
    }

    .game-grid {
        width: 80em;
        height: 80em;
        background-color: var(--gridBG);
    }
</style>
