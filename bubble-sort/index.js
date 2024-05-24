const bubbleSort = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  return array;
};

const myArr = [6, 3, 8, 7, 4, 1, 9, 5, 2];
const result = bubbleSort(myArr);
console.log(result);

function bubbleSortRecursive(arr, n) {
  // Base case: If there's only one element or the list is empty, it's already sorted
  if (n === 1) {
    return;
  }

  // One pass of bubble sort. After this loop, the largest element is bubbled up to the end
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      // Swap elements if they are in the wrong order
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }

  // Recursively call bubbleSortRecursive() with one less element in the array
  bubbleSortRecursive(arr, n - 1);
}

// Example usage:
let arr = [64, 34, 25, 12, 22, 11, 90];
let n = arr.length;
bubbleSortRecursive(arr, n);
console.log("Sorted array is:", arr);

/*
Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This process continues until the list is sorted.

 - Worst Case: O(n^2)
 - Best Case: O(n)
 - Average Case: O(n^2)
*/
