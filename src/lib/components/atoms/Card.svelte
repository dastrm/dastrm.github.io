<script>
    import { onMount } from "svelte";

    export let bit = 1;
    export let minValue = 0;
    export let maxValue = 50;
    export let cardWidth = 300;
    export let cardHeight = 100;
    export let minDistance = 25;
    export let fontSize = 16;
    export let selected = false;
    export let revealed = false;

    let numbers = [];
    let containerRef;

    function handleClick() {
        if (!revealed) {
            selected = !selected;
        }
    }

    let selectedColor = "#00a2ff";
    let unselectedColor = "transparent";

    // Calculate actual dimensions based on content
    function getDimensions(text) {
        const span = document.createElement("span");
        span.textContent = text;
        span.style.position = "absolute";
        span.style.visibility = "hidden";
        span.style.overflow = "hidden";
        span.style.whiteSpace = "nowrap";
        document.body.appendChild(span);
        const dimensions = {
            width: span.offsetWidth,
            height: span.offsetHeight,
        };
        document.body.removeChild(span);
        return dimensions;
    }

    function getBit(num, i) {
        return (num >> (i - 1)) & 1;
    }

    function generateNumbers() {
        numbers = [];
        const usedPositions = [];

        for (let value = minValue; value <= maxValue; value++) {
            if (getBit(value, bit) == 0) {
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
    style={`width: ${cardWidth}px; height: ${cardHeight}px;`}
    style:background-color={selected ? selectedColor : unselectedColor}
>
    <!-- Number elements -->
    {#each numbers as num}
        <div
            class="number"
            style={`
          left: ${num.left};
          top: ${num.top};
          font-size: ${num.fontSize};
        `}
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
