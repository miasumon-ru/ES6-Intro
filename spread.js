
// spread operator is used in an object and array

const max = Math.max(10,20,30,15,42,96,78,102,200);
console.log(max);

// 
const numbers = [10,20,34,52,67,95,15,64,38];

const max2 = Math.max(...numbers);
console.log(max2)


const friends = [10,20,30,40,5,60,50];
const bondhu = friends;
// bondhu.push(2);

// here 2 is added in friends array and bondhus array because non- primitive (array, object) keeps the reference.

// so avoid the problem, use of spread  operator

const dosto  = [...friends];
friends.push(3);

console.log(friends)
console.log(dosto);

// ADVANCED
 const newArray = [...friends, 45];

 console.log(newArray)



