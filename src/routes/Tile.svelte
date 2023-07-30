<script lang="ts">
    import { send } from './transitions';
    import { getTwemojiUrl } from './utils';

    export let emoji: string;
    export let isSelected: boolean;
    export let isFound: boolean;
</script>

<div class="tile" class:flipped={isSelected || isFound}>
    <!-- passing the click event -->
    <button on:click />
    {#if !isFound}
        <img src={getTwemojiUrl(emoji)} alt={emoji} out:send={{ key: emoji }} />
    {/if}
</div>

<style>
    .tile {
        background-color: var(--tileBG);
        border: 2px solid black;

        border-radius: 10px;

        display: flex;
        justify-content: center;
        align-items: center;

        transform-style: preserve-3d;
        transition: transform 0.3s;
    }

    img {
        width: 6em;
        height: 6em;
        pointer-events: none;

        /* to make image sidha when it is flipped  */
        transform: rotateY(180deg);
        backface-visibility: hidden;
    }

    button {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: transparent;

        border: none;
        border-radius: 10px;

        /* to disable button when its already clicked */
        backface-visibility: hidden;
    }

    .flipped {
        background-color: var(--tileFlippedBG);
        border: 0.5px solid black;
        border-radius: 10px;

        transform: rotateY(180deg);
    }
</style>
