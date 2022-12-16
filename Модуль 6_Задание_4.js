function printNumbers(from, to) {
    let currentNumber = from;

    let intervalId = setInterval(function() {
        console.log(currentNumber);
        if (currentNumber == to) {
            clearInterval(intervalId);
        }
        currentNumber++;
    }, 1000);
}
printNumbers(5, 15);