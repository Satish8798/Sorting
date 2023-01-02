//Bubble Sort

function bubbleSort(list) {
  let listLength = list.length;
  let swapped = false
  for (let i = 0; i < listLength; i++) {
    console.log("hi")
    for (let j = 0; j < listLength; j++) {
      if (list[j] > list[j + 1]) {
        let temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    } else {
      swapped = false;
    }
  }
  console.log(list);
}

bubbleSort([1, 2, 4, 2, 5, 6])