const str = 'james';

// Answer1
// const reverseStr = (x) => {
//   return x.split('').reverse().join('');
// };

// console.log(reverseStr(str));

//Answer2
// const reverseStr = (x) => {
//   let revStr = '';

//   for (let char of x) {
//     revStr = char + revStr;
//   }
//   return revStr;
// };

// console.log(reverseStr(str));

//Answer3
// const reverseStr = (x) => {
//   let rStr = x.split('');
//   return rStr.reduce((y, z) => {
//     return z + y;
//   }, '');
// };
// console.log(reverseStr(str));
