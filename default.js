
function add ( n1 , n2=0){
    const result = n1 + n2;
    
    // console.log(result);

    console.log(`the n1 is ${n1} and the n2 is ${n2}`)
    return result;
}

const sum =  add( 5);
console.log(`the result is ${sum}`);

// but if we pass an single  argument  although the function requires two parameters , in this case add function returns NAN. so to avoid this problem, we can assign a default value of the parameters


// note : the default number is 0 in case of number and the default number is 1 in case of multiplication



// in case of object , the default value is an empty string;

function fullName (firstName , lastName = ""  ){
    const full = firstName + lastName;

    return full;
}

const name = fullName('rahim');
console.log(name);
//  if we do not pass an argument , the parameter of the function takes undefined as a default value ;
// so avoid this problem , we can assign a default value in case of string


//  in case of Array , the default value will be an empty array

function friends (numbers = []){

}

// in case of object , the default value will be an empty object

//  the default value is considered true or false in case of boolean;

