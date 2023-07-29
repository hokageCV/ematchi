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
    }

    .info {
        width: 80vmin;
        height: 10vmin;
        background-color: var(--infoBG);
    }

    .game-grid {
        width: 80vmin;
        height: 80vmin;
        background-color: var(--gridBG);
    }
</style>
