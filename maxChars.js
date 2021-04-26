let str = 'abccccccde';

// Answer1
// const maxChars = (x) => {
//   let max = 0;
//   let maxChar = '';
//   let objChar = x.split('').reduce((y, z) => {
//     if (y[z]) {
//       y[z]++;
//     } else {
//       y[z] = 1;
//     }
//     return y;
//   }, {});

//   console.log(objChar);

//   for (let el in objChar) {
//     if (objChar[el] > max) {
//       max = objChar[el];
//       maxChar = el;
//     }
//   }
//   return maxChar;
// };

// console.log(maxChars(str));
