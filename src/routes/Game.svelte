<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import type { Level } from '../types';
    import Countdown from './Countdown.svelte';
    import Found from './Found.svelte';
    import Grid from './Grid.svelte';
    import { shuffleArray } from './utils';

    const dispatch = createEventDispatcher();
    export let isPlaying: boolean = false;

    let size: number;
    let grid: string[] = [];
    let foundEmojis: string[] = [];
    let timeLeft: number = 0;
    let duration: number = 0;
    // let isPlaying: boolean = false;
    let pauseTime: number = 0;

    export function start(level: Level) {
        size = level.size;
        grid = createGrid(level);
        foundEmojis = [];
        timeLeft = level.duration;
        duration = level.duration;

        resume();
    }

    $: {
        if (isPlaying) {
            resume();
        }
    }

    function resume() {
        isPlaying = true;

        if (pauseTime > 0) {
            const timePaused = Date.now() - pauseTime;
            timeLeft = timeLeft + timePaused;
            pauseTime = 0;
        }

        countdown();
        dispatch('play');
    }

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

    function countdown() {
        const start = Date.now();
        const timeLeftAtStart = timeLeft;

        function loop() {
            if (!isPlaying) return;

            requestAnimationFrame(loop);

            timeLeft = timeLeftAtStart - (Date.now() - start);

            if (timeLeft <= 0) {
                dispatch('lose');
                isPlaying = false;
            }
        }

        loop();
    }

    function handlePause() {
        isPlaying = false;
        pauseTime = Date.now();
        dispatch('pause');
    }
</script>

<div class="game" style="--size: {size}">
    <div class="info">
        {#if isPlaying}
            <Countdown {timeLeft} {duration} on:click={handlePause} />
        {/if}
    </div>
    <div class="game-grid">
        <Grid
            {grid}
            on:found={(e) => {
                foundEmojis = [...foundEmojis, e.detail.emoji];

                if (foundEmojis.length === size ** 2 / 2) {
                    dispatch('win');
                }
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
        padding: 2em;
        border-radius: 10px;
    }

    .game-grid {
        width: 80em;
        margin: 2em;
        background-color: var(--gridBG);
        border-radius: 10px;
    }
</style>
