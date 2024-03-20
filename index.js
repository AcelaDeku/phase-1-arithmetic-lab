const num1 = 31;
const num2 = 2;
const num3 = 14;
const num4 = 10;

const multiply = num1 * num2;
const mod = num3 % num4;

const random = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1;

const max = Math.max(10, 15, 20, 5); // Returns 20

module.exports = {
    multiply,
    random,
    mod,
    max
};
