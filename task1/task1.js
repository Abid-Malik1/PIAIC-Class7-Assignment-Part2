function insertValueAtArry(arr, index, value) {
    arr.splice(index, 0, value);
    return arr;
}
var myArry = [1, 2, 4, 5];
var myIndex = 2;
var myValue = 3;
var modifiedArry = insertValueAtArry(myArry, myIndex, myValue);
console.log(modifiedArry);
