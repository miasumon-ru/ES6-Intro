// technique of unpacking of objects and arrays and assigning them to a variable;
const actor = {
    name : 'Ananta',
    age :30,
    phone : 1796759576,
    money : 2021576
}

console.log(actor.phone);

const phoneNumber = actor.phone;

console.log(phoneNumber);

// by destructuring

const {phone:mobileNumber, name, money} = actor;

console.log(mobileNumber)

console.log(name)
console.log(money)
console.log()

// array destructuring

const numbers = [45,99];

const [n1 , n2] = numbers;

console.log(n1)
console.log(n2)

function doubleThem(a, b){
    return[a*2 , b*2]
}

const [x, y ] = doubleThem(6,2)
console.log(x)
console.log(y)

// skipping items in an array

const [m1, , n3] = [10,20,30];

console.log(m1, n3)

// swapping values

let s1 = 10;
let s2 = 20;

[s1, s2] = [s2, s1];

console.log(s1,s2)

