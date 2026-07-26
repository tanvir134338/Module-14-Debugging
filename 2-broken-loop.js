/**
 * Broken loop (1);
 */
// let sum = 0;
// function sumRange(n) {
//             for(let i =0; i<=n; i++){
//             sum += i
//             }return sum;
// }
// console.log(sumRange(5));


/**Broken loop (2)
 */


//  let sum=0;
// function sumOfAraay(numbers){
           
//             for(let i=0; i <numbers.length; i++){
//                         sum += numbers[i]
//             }
//             return sum;
// }
// console.log(sumOfAraay([10,20,30,35.247]).toFixed(2));


/**
 * problem 3:
 */

function getEvenNumber(numbers){
            let count = 0;

            for(let i=0; i< numbers.length; i++){
                        if(numbers[i] % 2 === 0){
                                    count ++;
                        }
            }return count;
}
console.log(getEvenNumber([1,2,4,3,5,6,8,10,11,12]));