<script lang="ts">
    import Card from "$lib/components/atoms/Card.svelte";
    import Button from "$lib/components/atoms/Button.svelte";

    import {
        getMostSignificantBitPosition,
        getRandomPermutation,
    } from "$lib/utils/utils";

    export let minNumber: number;
    export let maxNumber: number;
    export let number: number;
    export let guessCount: number;
    export let revealed: boolean;

    const size = getMostSignificantBitPosition(maxNumber);
    let randomSequence = getRandomPermutation(0, size);

    let selected = Array.from({ length: size }, () => false);
    let updateKey = 0;

    function reveal() {
        number = selected.reduce((acc, val, i) => acc + (val ? 2 ** i : 0), 0);
        revealed = true;
        guessCount += 1;
    }

    function reset() {
        revealed = false;
        selected.fill(false);
        randomSequence = getRandomPermutation(0, size);
        updateKey++;
    }
</script>

<div class="grid">
    {#key updateKey}
        {#each randomSequence as n}
            <Card
                powerOfTwo={n + 1}
                {minNumber}
                {maxNumber}
                bind:selected={selected[n]}
                {revealed}
            />
        {/each}
    {/key}
</div>

<div class="centerButton">
    {#if !revealed}
        <Button on:click={reveal}>Guess</Button>
    {:else}
        <Button on:click={reset}>Retry</Button>
    {/if}
</div>

<style lang="scss">
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        overflow-x: auto;
        gap: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        justify-items: center;
    }

    .centerButton {
        display: grid;
        justify-items: center;
        padding-top: 20px;
        padding-bottom: 20px;
    }
</style>
