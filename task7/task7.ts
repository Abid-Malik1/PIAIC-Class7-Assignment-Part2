function calculateSum(numbers: number[]): number {
    let sum = 0;
    let index = 0;
  
    while (index < numbers.length) {
      sum += numbers[index];
      index++;
    }
  
    return sum;
  }
  
  const numberArray: number[] = [5, 10, 3, -2, 7]; // Replace this with your array of numbers
  const sum = calculateSum(numberArray);
  
  console.log(`Sum of the numbers in the array: ${sum}`);
  
  //Output Sum of the numbers in the array: 23