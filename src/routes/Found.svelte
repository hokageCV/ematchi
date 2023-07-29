<script lang="ts">
    export let foundEmojis: string[];
</script>

<div class="found">
    {#each foundEmojis as emoji (emoji)}
        <span>{emoji}</span>
    {/each}
</div>

<style>
    .found {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5em;
    }
    span {
        font-size: 4em;
    }
</style>
