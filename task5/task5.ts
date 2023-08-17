function factorial(number: number): number {
    if (number < 0) {
      throw new Error("Input must be a positive integer");
    }
  
    let result = 1;
    let count = 1;
  
    while (count <= number) {
      result *= count;
      count++;
    }
  
    return result;
  }
  
  const inputNumber = 5; // Replace this with the desired positive integer
  const result = factorial(inputNumber);
  console.log(`Factorial of ${inputNumber} is ${result}`);
  

  //Output Factorial of 5 is 120