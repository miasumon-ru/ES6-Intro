

const max = (array1, array2) => {
    const newArray = [...array1, ...array2];

    const maximum = Math.max(...newArray);
    return maximum;
}

console.log(max([1,2],[3,4]))