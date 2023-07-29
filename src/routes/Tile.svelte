<script lang="ts">
    import { getTwemojiUrl } from "./utils";

    export let emoji: string;
    export let isSelected: boolean;
    export let isFound: boolean;
</script>

<div class="tile" class:flipped={isSelected}>
    <!-- passing the click event -->
    <button on:click />
    {#if !isFound}
        <img src={getTwemojiUrl(emoji)} alt={emoji} />
    {/if}
</div>

<style>
    .tile {
        background-color: var(--tileBG);

        display: flex;
        justify-content: center;
        align-items: center;
    }

    img {
        width: 6em;
        height: 6em;
        pointer-events: none;
    }

    button {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: transparent;
    }

    .flipped {
        background-color: var(--tileFlippedBG);
    }
</style>
