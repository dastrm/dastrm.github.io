<script>
    import NumberGuessing from "$lib/components/molecules/NumberGuessing.svelte";

    import ArrowRightIcon from "$lib/icons/fast-arrow-right.svelte";
    import ArrowDownIcon from "$lib/icons/fast-arrow-down.svelte";

    let minNumber = 0;
    let maxNumber = 50;

    let revealed = false;
    let guessCount = 0;
    let number = 0;

    let expand = false;
</script>

<h1>Number Guessing</h1>
<p>
    Think of a whole number between {minNumber} and {maxNumber}. Then, select
    every card below which contains your number. When you think you are done,
    double-check and press the guess button.
</p>

<NumberGuessing
    bind:minNumber
    bind:maxNumber
    bind:number
    bind:guessCount
    bind:revealed
/>

<div class="solution">
    <p style:text-align="center">
        {#if revealed}The number you thought of is {number}.{/if}
    </p>
</div>

{#if guessCount >= 3}
    <button class="toggle" on:click={() => (expand = !expand)}>
        <div class="icon">
            {#if expand}
                <ArrowDownIcon />
            {:else}
                <ArrowRightIcon />
            {/if}
        </div>
        <h1 class="expandable-title">How it works</h1>
    </button>

    {#if expand}
        <p>
            The cards are constructed in such a way that the selection of cards
            encodes your number in base two. If a card contains a number, then
            this number has that bit set which corresponds to the smallest
            number on the card. For example, the number 11 can be found on the
            cards with smallest numbers 1, 2, and 8. By selecting the three
            corresponding cards, the guesser is told that the number is 1011 in
            base two, which is 11 in base ten. In other words, your number is
            simply the sum of the smallest numbers from each card in your
            selection.
        </p>
    {/if}
{/if}

<style lang="scss">
    .solution {
        min-height: 100px;
    }

    .toggle {
        transition: all 0.2s ease-in-out;
        background-color: transparent;
        border: none;
        color: var(--color--text);
        fill: var(--color--text);
        display: flex;
        cursor: pointer;
        padding: 0;
        /*width: fit-content;*/
        /*margin-left: -9px;*/

        &:hover {
            color: var(--color--primary);
            fill: var(--color--primary);
            filter: drop-shadow(0px 0px 3px var(--color--primary));
        }

        .icon {
            width: 48px;
            flex-shrink: 0;
            padding-right: 5px;
            color: var(--color--primary);
            fill: var(--color--primary);
        }

        .expandable-title {
            font-size: 200%;
        }
    }
</style>
