<script lang="ts">
    import { onMount } from "svelte";

    import { getBit, getDimensions } from "$lib/utils/utils";

    export let powerOfTwo: number;
    export let minNumber: number;
    export let maxNumber: number;
    export let selected: boolean;
    export let revealed: boolean;

    const cardWidth = 300;
    const cardHeight = 100;
    const minDistance = 25;
    const fontSize = 16;
    const selectedColor = "#00a2ff";
    const unselectedColor = "transparent";

    let numbers: {
        value: number;
        left: string;
        top: string;
        fontSize: string;
    }[];
    let containerRef: Element;

    function handleClick() {
        if (!revealed) {
            selected = !selected;
        }
    }

    function generateNumbers() {
        numbers = [];
        const usedPositions: {
            left: number;
            right: number;
            top: number;
            bottom: number;
        }[] = [];

        for (let value = minNumber; value <= maxNumber; value++) {
            // Skip values which do not belong to this card
            if (getBit(value, powerOfTwo) == 0) {
                continue;
            }

            // Get dimensions of current number
            const dimensions = getDimensions(value.toString());
            const width = dimensions.width + 2;
            const height = dimensions.height + 2;

            let positionFound = false;
            let attempts = 0;
            while (!positionFound) {
                // Generate new position
                const left = Math.random() * (cardWidth - width);
                const top = Math.random() * (cardHeight - height);

                // Create bounding rectangle
                const rect = {
                    left,
                    right: left + width,
                    top,
                    bottom: top + height,
                };

                // Check if new position overlaps with existing positions
                const overlaps = usedPositions.some((existing) => {
                    const distance = Math.sqrt(
                        Math.pow(rect.left - existing.left, 2) +
                            Math.pow(rect.top - existing.top, 2),
                    );
                    return distance < minDistance;
                });

                if (!overlaps || attempts == 10000) {
                    numbers.push({
                        value,
                        left: `${rect.left}px`,
                        top: `${rect.top}px`,
                        fontSize: `${fontSize}px`,
                    });
                    usedPositions.push(rect);
                    positionFound = true;
                }

                attempts++;
            }
        }
    }

    // Initialize positions on mount
    onMount(() => {
        generateNumbers();

        // Regenerate positions when window is resized
        const resizeObserver = new ResizeObserver(() => {
            generateNumbers();
        });

        resizeObserver.observe(containerRef);
    });
</script>

<!-- Card container -->
<button
    bind:this={containerRef}
    on:click={handleClick}
    class="card-container"
    style:width="{cardWidth}px"
    style:height="{cardHeight}px"
    style:background-color={selected ? selectedColor : unselectedColor}
>
    <!-- Number elements -->
    {#each numbers as num}
        <div
            class="number"
            style:left={num.left}
            style:top={num.top}
            style:font-size={num.fontSize}
        >
            {num.value}
        </div>
    {/each}
</button>

<style lang="scss">
    .card-container {
        position: relative;
        border-radius: 8px;
        padding: 16px;
        overflow: hidden;
        cursor: pointer;
        border-color: var(--color--text);

        &:hover {
            color: #00a2ff;
            filter: drop-shadow(0px 0px 3px #00a2ff);
        }
    }

    .number {
        position: absolute;
        transition: all 0.4s ease;
        color: var(--color--text);
        pointer-events: none;
    }
</style>
