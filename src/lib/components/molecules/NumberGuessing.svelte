<script>
    import Card from "$lib/components/atoms/Card.svelte";
    import Button from "$lib/components/atoms/Button.svelte";

    export let minValue = 0;
    export let maxValue = 50;

    export let number = 0;
    export let guessed = 0;
    export let revealed = false;

    let size = getLargestBit(maxValue);
    let numbers = getRandomPermutation(size);

    let selected = Array.from({ length: size }, () => false);
    let updateKey = 0;

    function getRandomPermutation(size) {
        return shuffle(Array.from({ length: size }, (_, i) => i));
    }

    // Fisher-Yates shuffle implementation
    function shuffle(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }

    function getLargestBit(num) {
        let size = 1;
        while (num > 1) {
            num >>= 1;
            size++;
        }
        return size;
    }

    function reveal() {
        number = selected.reduce((acc, val, i) => acc + (val ? 2 ** i : 0), 0);
        revealed = true;
        guessed += 1;
    }

    function reset() {
        revealed = false;
        selected.fill(false);
        numbers = getRandomPermutation(size);
        updateKey++;
    }
</script>

<div class="grid">
    {#key updateKey}
        {#each numbers as n}
            <Card
                bit={n + 1}
                {minValue}
                {maxValue}
                bind:selected={selected[n]}
                {revealed}
            />
        {/each}
    {/key}
</div>

<div class="grid">
    {#if !revealed}
        <Button on:click={reveal}>Guess</Button>
    {:else}
        <Button on:click={reset}>Retry</Button>
    {/if}
</div>

<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        justify-items: center;
    }
</style>
