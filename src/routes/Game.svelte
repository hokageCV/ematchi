<script lang="ts">
    import type { Level } from "../types";
    import Found from "./Found.svelte";
    import Grid from "./Grid.svelte";
    import { levelList } from "./levelList";
    import { shuffleArray } from "./utils";

    const level = levelList[0];

    let size: number = level.size;
    let grid: string[] = createGrid(level);
    let foundEmojis: string[] = [];

    function createGrid(level: Level) {
        const copy = level.emojis.slice();
        const pairs: string[] = [];

        // traversing half array to make pairs
        for (let i = 0; i < level.size ** 2 / 2; i++) {
            const index = Math.floor(Math.random() * copy.length);
            const emoji = copy[index];

            copy.splice(index, 1); // remove selected emoji
            pairs.push(emoji);
        }

        pairs.push(...pairs); // duplicate the array
        return shuffleArray(pairs);
    }
</script>

<div class="game">
    <div class="info" />
    <div class="game-grid">
        <Grid
            {grid}
            on:found={(e) => {
                foundEmojis = [...foundEmojis, e.detail.emoji];
            }}
            {foundEmojis}
        />
    </div>
    <div class="info">
        <Found {foundEmojis} />
    </div>
</div>

<style>
    .game {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        height: 100%;

        /* setting font size, then for child elements using em. provides better control over sizing  */
        font-size: min(1vmin, 0.4rem);
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
