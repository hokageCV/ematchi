<script lang="ts">
    import "../styles.css";
    import Game from "./Game.svelte";
    import HomeModal from "./HomeModal.svelte";

    let state: "waiting" | "playing" | "paused" | "won" | "lost" = "waiting";
</script>

<Game />

{#if state !== "playing"}
    <HomeModal>
        <h1>ematchi</h1>
        {#if state === "won" || state === "lost"}
            <p>you {state} the game!</p>
        {:else if state === "paused"}
            <p>paused</p>
        {:else if state === "waiting"}
            <p>choose a level:</p>
        {/if}

        <div class="buttons">
            {#if state === "paused"}
                <button>resume</button>
                <button>quit</button>
            {:else}
                <button>easy</button>
                <button>medium</button>
                <button>hard</button>
            {/if}
        </div>
    </HomeModal>
{/if}

<style>
    h1 {
        font-size: 4em;
    }
</style>
