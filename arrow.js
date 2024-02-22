function add (a, b){
    return a + b;
}

const sum = add(5,7);
console.log(sum);

// using function expression or also called anonymous function

const add2 = function (a, b){
    return a + b;
}

console.log(add2(10,20))

//  using arrow function

const add3 = (a,b) => a + b ;

console.log(add3(40,50));

//  3 ways to write arrow function

const myName = () => console.log('if there is no parameter,  arrow function is written in this way');
const square = a => a*a ;
// if there is seen a single parameter , it is not mandatory  to use the first bracket otherwise it is compulsory

console.log(square(4))
