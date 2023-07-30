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
            <p>you {state} the game!</p>
        {:else if state === 'paused'}
            <p>paused</p>
        {:else if state === 'waiting'}
            <p>choose a level:</p>
        {/if}

        <div class="buttons">
            {#if state === 'paused'}
                <button on:click={() => (state = 'playing')}>resume</button>
                <button on:click={() => (state = 'waiting')}>quit</button>
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
    }

    .confetti {
        position: fixed;
        width: 100%;
        height: 100%;
        left: 50%;
        top: 30%;
        pointer-events: none;
    }
</style>
