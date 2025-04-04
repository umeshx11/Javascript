const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10

// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   function(accumulator, currentValue) {  return accumulator + currentValue}
//   0,
// );

// console.log(sumWithInitial);
// // Expected output: 10

//const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price,0)
// console.log(priceToPay);
