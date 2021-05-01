let arr = [2, 3, 4, 5];

function chunk(x, y) {
  let chunkArr = [];

  for (let el of x) {
    let last = chunkArr[chunkArr.length - 1];
    console.log(last);
    if (!last || last.length === y) {
      chunkArr.push([el]);
    } else {
      last.push(el);
    }
  }

  return chunkArr;
}

console.log(chunk(arr, 2));
