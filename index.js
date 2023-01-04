//Bubble Sort

function bubbleSort(list) {
  console.log('bubble sort')
  let listLength = list.length;
  let swapped = false
  for (let i = 0; i < listLength; i++) {
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

bubbleSort([1, 2,3,4,5]) 

//Selection sort

function selectionSort(list){
  console.log('selection sort')
  let length = list.length;
  for(let i=0;i<length;i++){
      let smallest = list[i];
      let smallestIndex=i;
    for(j=i+1;j<length;j++){
      if(smallest>list[j]){
        smallest = list[j]
        smallestIndex=j
      }
      if(j===length-1){
        let temp = list[i];
        list[i]= list[smallestIndex];
        list[smallestIndex] = temp;
      }
    }
  }
  console.log(list)
}

selectionSort([1,2,3,4,5]);

//Insertion sort

function insertionSort(list){
  console.log('insertion sort')
  let length = list.length;
  let swapped = false;
  for(let i=0;i<length-1;i++){
     if(list[i]>list[i+1]){
       for(let j=i+1;j>=0;j--){
         if(list[j]<list[j-1]){
           let temp = list[j];
           list[j]= list[j-1];
           list[j-1] = temp;
           swapped = true;
         }
       }
       if(!swapped ) break;
     }
  }
  console.log(list)
}
insertionSort([1,5,4,3,2]);

//merge sort 

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  let mid = parseInt(array.length/2)
  // Split Array in into right and left
  let left = array.slice(0,mid);
  let right = array.slice(mid);
  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
  console.log("left: "+left+"\nright: "+right)
  if(right===undefined) return left
  return right.concat(left).sort((a,b)=>{
    return a-b
  });
}


const answer = mergeSort(numbers);
console.log(answer);