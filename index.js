//Bubble Sort

function bubbleSort(list) {
  let listLength = list.length;
  let swapped = false
  for (let i = 0; i < listLength; i++) {
    console.log("hi")
    for (let j = 0; j < listLength-1; j++) {
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

bubbleSort([1, 3,2,4,5]) 

//Selection sort

function selectionSort(list){
  let length = list.length;
  let swapped = false;
  for(let i=0;i<length;i++){
      let smallest = list[i];
      let smallestIndex=i;
    console.log('hi')
    for(j=i+1;j<length;j++){
      if(smallest>list[j]){
        smallest = list[j]
        smallestIndex=j
      }
      if(j===length-1){
        let temp = list[i];
        list[i]= list[smallestIndex];
        list[smallestIndex] = temp;
        swapped = true;
      }
    }
    if(!swapped) break;
  }
  console.log(list)
}

selectionSort([1,3,2,4,5])