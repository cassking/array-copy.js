//1using map
 let arr = [1,2,3]
 let arr2 = arr.map(x => x)
 console.log(arr2);

//2 using json parse then stringify
 arr2 = JSON.parse(JSON.stringify(arr))
 console.log(arr2)

//3 using slice
arr2 = arr.slice(0)
 console.log(arr2)

//4 for loop and push
 arr2= []
 for(let i=0; i<arr.length;i++){
   arr2.push(arr[i])
 }
 console.log(arr2)

//5 object assign
//Object.assign(target, ...sources)
 arr2 = Object.assign([], arr)
  console.log(arr2);

//6 spread operator
  arr2 = [...arr]
  console.log(arr2);

//7 concat
 arr = [].concat(arr2);
  console.log(arr2);

//9 array from
//Array.from(arrayLike[, mapFn[, thisArg]
//console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]
//console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]
 arr2 = Array.from(arr)
 console.log(arr2)﻿

 //8 apply
  arr2 = arr.length === 1 ? [arr2[0]] : Array.apply(this, arr2);
  console.log(arr)
