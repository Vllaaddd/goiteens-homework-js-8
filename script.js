// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const userKeys = Object.keys(user);

// for (const userKey of userKeys) {
//   console.log(userKey);
// }









// const countProps = function (obj) {
//     const objKeys = Object.keys(obj);
//     let keysArr = [];

//     for (const objKey of objKeys) {
//       keysArr.push(objKey)
//     }

//     return keysArr.length;
// };
  
// console.log(countProps({})); // 0
  
// console.log(countProps({ name: 'Mango', age: 2 })); // 2
  
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3












// const countTotalSalary = function (employees) {
//   const employeesValues = Object.values(employees);
//   let total = 0;
//   for (const employeesValue of employeesValues) {
//     total += employeesValue;
//   }
//   return total;
// };

// /*
//  * Викличи функції для перевірки працездатності твоєї реалізації.
//  */
// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   }),
// ); // 400











const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроїд', price: 400, quantity: 7 },
  { name: 'Захоплення', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProdcuts, productName) {
  for (const product of allProdcuts) {
    const values = Object.values(product);
    console.log(product[productName]);
  }
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(calculateTotalPrice(products, 'Радар')); // 5200

// console.log(calculateTotalPrice(products, 'Дроїд')); // 2800