// var : no reason to use var 
//  let : allow it to reassign
// const : do not allow it reassign

const money = 25;
// money = 20;  not possible for const

const rich = money + 10;
console.log(rich);

// with let

let count = 0;
count = count + 10;
 console.log(count);

//  in case of array

const numbers = [10,20,30, 40, 50];
numbers = [1,5,7,8,9] 
// not possible

numbers[1] = 55;
//  but it is possible in case of modification of an existing element
numbers.push(32,65,78)
//  it also possible


// in case of object, also it is the same for an object . it is not possible to reassign of an object if we declare it with const but we can modify the existing property of an object although it is declared with const.


// it is also same for the loop



