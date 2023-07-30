<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import Tile from "./Tile.svelte";

    export let grid: string[];
    export let foundEmojis: string[];

    const dispatch = createEventDispatcher();
    let firstChoice: number = -1;
    let secondChoice: number = -1;
    let resetTimeoutId: number;

    function handleClick(e: MouseEvent, emoji: string, index: number) {
        clearTimeout(resetTimeoutId);

        // nothing is selected
        if (firstChoice === -1 && secondChoice === -1) {
            firstChoice = index;
        }

        // one is selected
        else if (secondChoice === -1) {
            secondChoice = index;

            if (grid[firstChoice] === grid[secondChoice]) {
                // correct, so we need to inform parent hence dispatching an event
                dispatch("found", {
                    emoji,
                });
            } else {
                resetTimeoutId = setTimeout(() => (firstChoice = secondChoice = -1), 600);
            }
        }

        // both selected but different
        else {
            firstChoice = index;
            secondChoice = -1;
        }
    }
</script>

<div class="grid">
    {#each grid as emoji, i}
        <Tile
            {emoji}
            on:click={(event) => handleClick(event, emoji, i)}
            isSelected={firstChoice === i || secondChoice === i}
            isFound={foundEmojis.includes(emoji)}
        />
    {/each}
</div>

<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(4, 1fr);
        grid-gap: 0.5em;
        height: 60vmin;

        perspective: 100vw;
    }
</style>
