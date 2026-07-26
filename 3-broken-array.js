/**
 *(1).problem: get last two element of a array and output it as a new array.
 */


//  function getLastTwo(array){
//             return array.slice(array.length -2, array.length)

//  }

//  console.log(getLastTwo([1,2,3,5,5,6,7,8]));


/**
 * (2).Problem:
 */

// function findIndexValue(array, target){
//             for(let i=0; i<array.length; i++){
//                         if(array[i].toString() === target.toString()){
//                                     return i;
//                         }


// } 
// return "-1";
// }

// console.log(findIndexValue([10,20,30,40], 50));

/**
 * (3).problem:
 */

function avarageOfPositive(array) {
            let sum = 0;
            let count = 0;

            for (let i = 0; i < array.length; i++) {
                        if(array[i]>0){
                         sum+=array[i];
                         count ++;
            
            }
            
}return sum/count;
}
console.log(avarageOfPositive([10,20,30,-40,-50,23,35,45]));