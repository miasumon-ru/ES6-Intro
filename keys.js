

const glass = {
    name : 'glass',
     color : 'golden',
     price : 12,
     isCleaned : true
}

const keys = Object.keys(glass);
const values = Object.values(glass);
// it is also called an array of array and also two dimensional array
const pair = Object.entries(glass)
// delete 
delete glass.isCleaned
// delete by destructuring
const {isCleaned, name, ...shortGlass} = glass;

// freeze
Object.freeze(glass);
// seal only allows to modify the existing property
Object.seal(glass)

console.log(keys)
console.log(values)
console.log(pair)
console.log(glass)
console.log(shortGlass)


