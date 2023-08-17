function insertValueAtArry(arr,index,value):number{
arr.splice(index, 0, value)
return arr;  
}

let myArry:number[] = [1,2,4,5];
let myIndex:number = 2;
let myValue:number = 3;

let modifiedArry:number = insertValueAtArry(myArry,myIndex,myValue)

console.log(modifiedArry);

//Output is [ 1, 2, 3, 4, 5 ]