<script lang="ts">
    export let emoji: string;
    export let isSelected: boolean;
    export let isFound: boolean;
</script>

<div class="tile" class:flipped={isSelected}>
    <!-- passing the click event -->
    <button on:click />
    {#if !isFound}
        <span>{emoji}</span>
    {/if}
</div>

<style>
    .tile {
        background-color: var(--tileBG);

        display: flex;
        justify-content: center;
        align-items: center;
    }

    span {
        font-size: 5em;
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
