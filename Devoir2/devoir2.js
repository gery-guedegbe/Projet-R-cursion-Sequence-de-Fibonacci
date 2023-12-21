// Devoir 2

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.ceil(arr.length / 2);
  console.log(arr, mid);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  const lefSorted = mergeSort(left);
  const rightSorted = mergeSort(right);
  return merge(lefSorted, rightSorted);
}

function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}

// Example usage

const arr = [5, 2, 8, 4, 1, 6];
const sortedArr = mergeSort(arr);
console.log(sortedArr);
