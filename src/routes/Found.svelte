<script lang="ts">
    import { receive } from "./transitions";
    import { getTwemojiUrl } from "./utils";

    export let foundEmojis: string[];
</script>

<div class="found">
    {#each foundEmojis as emoji (emoji)}
        <img src={getTwemojiUrl(emoji)} alt={emoji} in:receive={{ key: emoji }} />
    {/each}
</div>

<style>
    .found {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1em;
        height: 100%;
    }
    img {
        width: 4em;
        height: 4em;
        pointer-events: none;
    }
</style>
