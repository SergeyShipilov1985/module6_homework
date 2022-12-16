let arr = [12,20,15,'Hi',33,46,71,null,'@'];
function amountEvenOdd (arr){
    let amountEven = 0;
    let amountOdd = 0;
    let amountOther = 0;

    for (let i = 0; i < arr.length; i++){
        if ((arr[i] === 0) || (typeof(arr[i]) != 'number')) {
            amountOther++;
        } else {
            if (arr[i] % 2 === 0) {
                amountEven++;
            } else {
                amountOdd++;
            }
        }
    }

    return [amountEven, amountOdd, amountOther];
}

let result = amountEvenOdd(arr);

console.log("Even is  " +  result[0]);
console.log("Odd is " +  result[1]);
console.log("Other is " +  result[2]);
