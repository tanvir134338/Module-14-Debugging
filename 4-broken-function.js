/**
 * problem 1
 */

// function calculateTotal(price, tax){
//             let total = price+tax
//             return total;
// }
// let finalAmount=calculateTotal(550, 55);
// console.log(finalAmount);


/** 
 * problem 2
 */

// function introduce(name, dob, city){
//             let currentYear=new Date().getFullYear();
//             let age= currentYear-dob;

//             return "My name is:"+name + " I am "+ age+'years old'+" I am from:"+city;
// }

// console.log(introduce("Tanvir", 2002, "Satkhira"))



/**
 * Problem 3
 */

function applyDiscount(price, percent){
            return price - (price*percent)/100
            
}

function describeOrder(name, total, discount){
            let discounted = applyDiscount(total, discount)
            return name+"'s order total is $"+discounted+" after discount.";
}

console.log(describeOrder("Tanvir", 100, 10))