function binary_search(list, target) {
  let low = 0;
  let high = list.length - 1;
  let mid = 0;
  let guess = 0;

  for (let i = 0; i <= list.length; i++) {
    mid = Math.floor((low + high) / 2);
    guess = list[mid];

    if (guess === target) {
      return mid;
    } else if (guess > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
}

let my_list = [1, 3, 5, 7, 9];

console.log(binary_search(my_list, 3));
console.log(binary_search(my_list, -1));
