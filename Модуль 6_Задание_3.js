// вариант решения  1-й:
const sum =(x) => (y) => x+y;
sum (1)(2);
// вариант решения  2-й:
const sum = (a) => {
    const sum1 = (b) => a + b;
    return sum1
};
sum(1)(2);
