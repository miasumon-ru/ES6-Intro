
let evenName = [];

const friends = (names) =>{



    for( const name of names){
        const length = name.length;

        if(length % 2  == 0){

            evenName.push(name);
            
        }
    }


}

const friendsName = ['rahim', "karaim",'jodu', 'kodu']

console.log(friends(friendsName));