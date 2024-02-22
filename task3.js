

const avg = (numbers) => {

    const squareArray = [];
    let sum = 0;

   for(const number of numbers){
    const square =  number*number;
    squareArray.push(square);

   }

   for (const num of squareArray){

    sum = sum + num;

   }
   const length = squareArray.length;

   const average = sum/length;
   return average;

}

 console.log(avg([2,3]));