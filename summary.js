
// for of is used in array and string

// for in used in an object

const glass = {
    name : 'glass',
     color : 'golden',
     price : 12,
     isCleaned : true
}

for (const keys in glass){
    console.log(keys)

    const values = glass[keys];

    console.log(values)
}