/**
 * Broken conditional (1)
 */

// function checkAdult(Age){
//             if(Age>=18){
//                         return "Adult";
//             }
//             else{
//                         return "Minor"
//             }
// }

// console.log(checkAdult(17));


/**
 * problem 2:
 */

// function canApply(age, hasNID){
//             if(age>=18 && hasNID){
//                         return "Eligible"
//             }
//             else {
//                         return "Not Eigible"
//             }
// }

// console.log(canApply(35, true));



/**
 * problem 4:
 */

function canAttendFinalExam(attendance, assignmentMark){
            if(attendance>=90 && assignmentMark>=80){
                        return "Eligible with Scholarship";
            }
            else if(attendance>=80 && assignmentMark>=50){
                        return "Eligible for Final Exam"
            }
            else{
                        return "Not Eligible"
            }
}
console.log("Tanvir:",canAttendFinalExam(90, 80));
console.log("Ashik:",canAttendFinalExam(80, 50));
console.log("Mahbub:",canAttendFinalExam(70, 40));
