function factorial(number) {
    if (number < 0) {
        throw new Error("Input must be a positive integer");
    }
    var result = 1;
    var count = 1;
    while (count <= number) {
        result *= count;
        count++;
    }
    return result;
}
var inputNumber = 5; // Replace this with the desired positive integer
var result = factorial(inputNumber);
console.log("Factorial of ".concat(inputNumber, " is ").concat(result));
