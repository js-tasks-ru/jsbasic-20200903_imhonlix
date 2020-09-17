/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
let bigB;

function ucFirst(str) {
    if (!str) return str;
    for (let i = 0; i < str.length; i++) {
        bigB = str[0].toUpperCase();
    }
    return bigB + str.slice(1);
}