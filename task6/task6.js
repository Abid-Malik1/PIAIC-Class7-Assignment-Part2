function removeNegativeNumbers(numbers) {
    return numbers.filter(function (number) { return number >= 0; });
}
var numberArray = [5, -2, 10, -8, 3, -1, 7]; // Replace this with your array of numbers
var filteredArray = removeNegativeNumbers(numberArray);
console.log("Original array:", numberArray);
console.log("Array after removing negative numbers:", filteredArray);
