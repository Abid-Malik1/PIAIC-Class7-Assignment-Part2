function calculateSum(numbers) {
    var sum = 0;
    var index = 0;
    while (index < numbers.length) {
        sum += numbers[index];
        index++;
    }
    return sum;
}
var numberArray = [5, 10, 3, -2, 7]; // Replace this with your array of numbers
var sum = calculateSum(numberArray);
console.log("Sum of the numbers in the array: ".concat(sum));
