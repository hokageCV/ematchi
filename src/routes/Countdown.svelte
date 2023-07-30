<script lang="ts">
    export let timeLeft: number;
    export let duration: number;
</script>

<div class="countdown">
    <button class="pauseBtn" on:click>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            ><title>pause-circle</title><path
                d="M15,16H13V8H15M11,16H9V8H11M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                fill="#090901"
            /></svg
        >
    </button>

    <div class="duration">
        <div class="timeLeft" style="--p: {timeLeft / duration}" />
    </div>
</div>

<style>
    .countdown {
        display: flex;
        align-items: center;
        gap: 1em;
    }

    .pauseBtn {
        /* text-align: center; */
        font-size: 6em;
        width: 1em;
        height: 1em;
        border-radius: 10px;

        background: transparent;
        border: none;
    }

    svg {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    .duration {
        background-color: var(--secondary);
        border-radius: 10px;
        flex: 1;
        height: 1em;
    }

    .timeLeft {
        background-color: var(--primary);
        border-radius: 10px;

        position: absolute;
        height: 100%;
        width: calc(100% * var(--p));
    }
</style>
