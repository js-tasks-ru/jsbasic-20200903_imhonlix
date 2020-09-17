/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
    let sum = 1;
    for (let i = 0; i != n; ++i) {
        sum = sum * (n - i);
    }
    return sum;
}