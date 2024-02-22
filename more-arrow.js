// object 
const getAge = (person) => person.age;

console.log(getAge({name: 'sumon', age:25}));

// array

const getThird = numbers => numbers[2];

console.log(getThird([5,9,88,2,13]));

// no parameter 

const getPI = () => Math.PI;

console.log(getPI())

// large arrow function

const doMath = (x , y , z) => {
    const sum = x + y + z;
    const mult = x * y * z;

    const result = sum + mult;
    return result;
}

console.log(doMath(5,10, 15))
