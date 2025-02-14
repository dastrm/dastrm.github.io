// Checks wheter a string begins with either "http://" or "https://".
export const HttpRegex = /^((http|https):\/\/)/;

/**
 * Extracts the `k`-th bit from a number `n`.
 * Uses bitwise operations to shift and mask the desired bit.
 * 
 * @param {number} n - The number from which to extract the bit.
 * @param {number} k - The position of the bit to extract (1-indexed).
 * @returns {number} The value of the `k`-th bit (0 or 1).
 */
export function getBit(n: number, k: number) {
    return (n >> (k - 1)) & 1;
}

/**
 * Extracts the position of the most significant bit in `n`.
 * 
 * @param {number} n - The number from which to extract the position.
 * @returns {number} The position of the most significant bit (1-indexed).
 */
export function getMostSignificantBitPosition(n: number) {
    return 32 - Math.clz32(n);
}

/**
* Returns a shuffled version of an array containing the sequential integers from `k` to `k + n - 1`.
* The Fisher-Yates algorithm is used for shuffling the array, providing a pseudo-random order.
*
* @param {number} k - The starting index of the sequence.
* @param {number} n - The length of the desired sequential integer array.
* @returns {Array<number>} A shuffled version of the provided sequential integers.
*/
export function getRandomPermutation(k: number, n: number) {
    return shuffleArray(getSequentialIntegers(k, n));
}

/**
* Returns an array containing the sequential integers from `k` to `k + n - 1`.
*
* @param {number} k - The starting index of the sequence.
* @param {number} n - The length of the desired sequential integer array.
* @returns {Array<number>} An array containing the specified sequential integers.
*/
export function getSequentialIntegers(k: number, n: number) {
    return Array.from({ length: n }, (_, i) => i + k)
}

/**
* Shuffles an array using the Fisher-Yates algorithm, providing a pseudo-random order.
*
* @param {Array<number>} array - The input array to be shuffled.
* @returns {Array<number>} A shuffled version of the provided array.
*/
export function shuffleArray(array: number[]) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

/**
* Returns the dimensions of a given text as an object with `width` and `height`.
* The provided text will be rendered in a hidden span element, and its dimensions will be calculated.
*
* @param {string} text - The text to measure the dimensions for.
* @returns {{width: number, height: number}} An object containing the width and height of the given text.
*/
export function getDimensions(text: string) {
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
