const arr = [1, 2, 3, 4, 5, 6, 7];
function removeItem (arr, value) {
  let index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

console.log(removeItem((arr), 5))
