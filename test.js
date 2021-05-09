// const x = 5
// console.log(x)



// const productName = 'Droid';
// const pricePerItem = 2000;

  
// console.log(productName);
// // 'Droid'

// console.log(pricePerItem);
// // 2000






// // Start code
// let productName = 'Droid';
// let pricePerItem = 2000;
// productName = 'Repair droid'
// pricePerItem = 3500

// // Write your code under this line




// const topSpeed = 160
// const distance = 617.54
// const login = 'mango935'
// const isOnline = true
// const isAdmin = false




// // Base code
// const pricePerItem = 3500;
// const orderedQuantity = 4;

// // Write your code under this line
// const totalPrice = pricePerItem * orderedQuantity;






// // Base code
// const productName = 'Droid';
// const pricePerItem = 3500;

// // Write your code under this line

// const message = `You chose ${productName}, price per item is ${pricePerItem} credits`
// console.log (message)






// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) included in the order amount.`

// console.log (message)








// function sayHi () {
// console.log ('Hello, this is my first function!')
// }
// sayHi()




// // Write your code under this line
// function add(a,b,c) {
//   console.log(`Addition result equals ${a + b + c}`);
//   // Write your code above this line
// }
  
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);


// Оператор return используется для передачи
// значения из тела функции во внешний код.
// Когда интерпретатор встречает return, он
// сразу же выходит из функции(прекращает её выполнение),
//   и возвращает указанное значение в то место кода, где
// функция была вызвана.

// Оператор return без явно указанного значения 
// возвращает специальное значение undefined.
// При отсутствии return в теле функции, она все равно
// вернёт undefined.


// function add(a, b, c) {
//   //  Write your code under this line

  
// return a+b+c  
 
// //  Write your code above this line
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));






// function makeMessage(name, price) {
  
//   // Write your code under this line
//    const message = `You chose ${name}, price per item is ${price} credits`;
//   // Write your code above this line
  
//   return message;
// };





// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   // Write your code under this line
//   const totalPrice = orderedQuantity * pricePerItem;

//   // Write your code above this line
//   return totalPrice;
// };





// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Write your code under this line

// const message = `You ordered droids worth ${orderedQuantity * pricePerDroid + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in the order amount.`  

//   // Write your code above this line
//   return message;
// }





// function isAdult(age) {
//   // Write your code under this line
//   const passed = age >= 18;

//   // Write your code above this line
//   return passed;
// }




// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Write your code under this line
//   const isMatch = password === SAVED_PASSWORD;

//   // Write your code above this line
//   return isMatch;
// }







// function checkAge(age) {
//   let message;

//   if (age >= 18) { // Complete this line
//     message = 'You are adult';
//   } else {
//     message = 'You are minor';
//   }

//   return message;
// }




// function checkStorage(available, ordered) {
//   let message;
//   // Write your code under this line
// if (available < ordered){
//   message = 'Not enough goods in stock!';
// } else {
//   message = 'Order is processed, the manager will contact you';
// }
//   // Write your code above this line
//   return message;
// }







// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Write your code under this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;




// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Write your code under this line
//   let totalPrice = pricePerDroid * orderedQuantity;
//   console.log (totalPrice)
//   if (customerCredits < totalPrice) {
//     message = 'Not enough funds on the account!'
//   } else {
//     message = `You ordered ${orderedQuantity} droids, ${customerCredits - totalPrice} credits left on the account`
//   }
//   // Write your code above this line
//   console.log (message);
// }
// makeTransaction(3000, 5, 23000)






// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) { // Complete this line
//     message =  'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) { // Complete this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }




// function checkStorage(available, ordered) {
//   let message;
//   // Write your code under this line
// if (ordered === 0) {
//   message =  'There are no products in the order yet';
//    } else if (ordered > available) { 
//      message = 'The order is too large, there are not enough items in stock!';
//   } else {
//      message = 'The order is placed, the manager will contact you';
//    }
//    // Write your code above this line
//   return message;
// }




// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end; // Complete this line

//   return isInRange;
// }






// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === 'pro' || subType === 'vip'; // Complete this line

//   return canAccessContent;
// }





// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Complete this line

//   return isNotInRange;
// }





// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;

 
//   if (totalSpent >= 5000 && totalSpent < 20000) {
//       discount = BRONZE_DISCOUNT 
//   } else if (totalSpent >= 20000 && totalSpent < 50000){
//       discount = SILVER_DISCOUNT
//   } else if (totalSpent >= 50000){
//       discount = GOLD_DISCOUNT
//   } else {
//     discount = BASE_DISCOUNT
//   };


//   console.log (discount) ;
// }
//  getDiscount(50000)




// function checkStorage(available, ordered) {
//   let message;
//   // Write your code under this line


//     message = ordered > available ? 'Not enough goods in stock!':'The order is placed, the manager will contact you';
 

//   // Write your code above this line
//   return message;
// }






// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   // Write your code under this line
// message = password === ADMIN_PASSWORD ? 'Access is allowed':'Access denied, wrong password!';
//   // Write your code above this line
//   return message;
// }




// function getSubscriptionPrice(type) {
//   let price;
//   // Write your code under this line

//  switch (type) { // 
//     case 'starter': // 
//       price = 0; // 
//       break;

//     case 'professional': // 
//       price = 20; // 
//       break;

//     case 'organization' : // 
//       price = 50; // 
//       break;
//   }

//   // Write your code above this line
//   return price;
// }





//  function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

  
// 	switch (password) {
//       case null :
//          message = 'Canceled by user!';
//         break;
    
    
//       case ADMIN_PASSWORD :
//          message = 'Welcome!';
//         break;
        
        
    
//       default:
//          message = 'Access denied, wrong password!';
      
//     }
 
//   return message;
// }




  

// function getShippingCost(country) {
//   let message;
//   // Write your code under this line
  
// switch (country) {
// 	case 'China' :
//     message = 'Shipping to China will cost 100 credits';
//     break;
    
    
//     case 'Chile' :
//     message = 'Shipping to Chile will cost 250 credits';
//     break;
    
    
    
//    case 'Australia' :
//     message = 'Shipping to Australia will cost 170 credits';
//     break;
    
    
//     case 'Jamaica' :
//     message = 'Shipping to Jamaica will cost 120 credits';
//     break;
    
    
//     default:
//     message = 'Sorry, there is no delivery to your country';
    
// }
//   // Write your code above this line
//   return message;
// }



// function getNameLength(name) {
//   const message = `The length of your name is ${name.length} character(-s)`; // Complete this line

//   return message;
// }




// const courseTopic = 'JavaScript for beginners';
// // Write your code under this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// // Write your code above this line





// function getSubstring(string, length) {
//   const substring = string.slice (0,length); // Complete this line
 
//   return substring;
// }



// function formatMessage(message, maxLength) {
//   let result;
// // Write your code under this line
// if (message.length <= maxLength) {
//   result = message 
// } else {
// result = message.slice(0,maxLength) +'...';
// }
// // Write your code above this line
//  console.log (result);
// }

//  formatMessage('11111 22222 33333 44444 55555', 16) 
// formatMessage('11111 22222 33333 44444 55555', 23)
// formatMessage('11111 22222 33333 44444 55555', 41)





// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase() ; // Complete this line
//   return normalizedInput;
// }



// function checkForName(fullName, name) {
//  const result = fullName.includes(name) ; // Complete this line
//   return result;
// }





// function checkForSpam(message) {
//   let result;
//   // Write your code under this line
//   message = message.toLowerCase()
//  if (message.includes('spam') || message.includes ('sale')) {
//  result = true}
//  else {
//  result = false
//  }
//   // Write your code above this line
// console.log (result);
// }
// checkForSpam('Trust me, this is not a spam message') 




















// МОДУЛЬ 2222222222222222222222222222222222222222




















