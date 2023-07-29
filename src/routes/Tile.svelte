<script lang="ts">
    export let emoji: string;
</script>

<div class="tile">
    <span>{emoji}</span>
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
    }
</style>
