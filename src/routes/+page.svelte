<script lang="ts">
    import { confetti } from '@neoconfetti/svelte';
    import '../styles.css';
    import Game from './Game.svelte';
    import HomeModal from './HomeModal.svelte';
    import { levelList } from './levelList';

    let state: 'waiting' | 'playing' | 'paused' | 'won' | 'lost' = 'waiting';

    let game: Game;
</script>

<Game
    bind:this={game}
    isPlaying={state === 'playing'}
    on:play={() => (state = 'playing')}
    on:pause={() => (state = 'paused')}
    on:win={() => (state = 'won')}
    on:lose={() => (state = 'lost')}
/>

{#if state !== 'playing'}
    <HomeModal>
        <h1>ematchi</h1>
        {#if state === 'won' || state === 'lost'}
            <p>You {state} the game!</p>
        {:else if state === 'paused'}
            <p>Paused</p>
        {:else if state === 'waiting'}
            <p>Choose a level:</p>
        {/if}

        <div class="buttons">
            {#if state === 'paused'}
                <button on:click={() => (state = 'playing')}>Resume</button>
                <button on:click={() => (state = 'waiting')}>Quit</button>
            {:else}
                {#each levelList as level}
                    <button on:click={() => game.start(level)}>{level.label}</button>
                {/each}
            {/if}
        </div>
    </HomeModal>
{/if}

{#if state === 'won'}
    <div
        class="confetti"
        use:confetti={{
            stageWidth: innerWidth,
            stageHeight: innerHeight,
        }}
    />
{/if}

<style>
    h1 {
        font-size: 4em;
        text-align: center;
    }
    p {
        font-size: 2em;
        text-align: center;
    }

    .confetti {
        position: fixed;
        width: 100%;
        height: 100%;
        left: 50%;
        top: 30%;
        pointer-events: none;
    }

    .buttons {
        display: flex;
        flex-direction: row;
        gap: 4em;
    }

    button {
        background-color: #6c15d1;
        color: #fdfccf;
        font-size: 1em;
        border: 2px solid black;
        border-radius: 10px;
        padding: 1em 2em;
    }
</style>
