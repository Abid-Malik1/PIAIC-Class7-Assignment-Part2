let count = 1;
let evenCount = 0;

while (evenCount < 10) {
  if (count % 2 === 0) {
    console.log(count);
    evenCount++;
  }
  count++;
}