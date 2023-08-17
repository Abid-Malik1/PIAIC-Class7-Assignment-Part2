function removeNegativeNumbers(numbers: number[]): number[] {
    return numbers.filter(number => number >= 0);
  }
  
  const numberArray: number[] = [5, -2, 10, -8, 3, -1, 7]; // Replace this with your array of numbers
  const filteredArray = removeNegativeNumbers(numberArray);
  
  console.log("Original array:", numberArray);
  console.log("Array after removing negative numbers:", filteredArray);
  
  //Output Array after removing negative numbers: [ 5, 10, 3, 7 ]