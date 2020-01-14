class quickSort {
  constructor(array) {
    this.array = array;
  }
  sort(
    placeHolder,
    inputs,
    leftPointer = 0,
    rightPointer = this.array.length - 1
  ) {
    let indexTmp;

    if (rightPointer - leftPointer >= 1) {
      indexTmp = this.partition(placeHolder, inputs, leftPointer, rightPointer);
      if (leftPointer < indexTmp - 1) {
        this.sort(placeHolder, inputs, leftPointer, indexTmp - 1);
      }
      if (indexTmp < rightPointer) {
        this.sort(placeHolder, inputs, indexTmp, rightPointer);
      }
    }
    return this.array;
  }

  partition(placeHolder, inputs, leftPointer, rightPointer) {
    let pivot = this.array[Math.floor((leftPointer + rightPointer) / 2)];

    while (leftPointer <= rightPointer) {
      while (this.array[leftPointer] < pivot) {
        placeHolder[leftPointer].innerText = "　";
        leftPointer++;
        placeHolder[leftPointer].innerText = "▲";
      }
      while (this.array[rightPointer] > pivot) {
        placeHolder[rightPointer].innerText = "　";
        rightPointer--;
        placeHolder[leftPointer].innerText = "▲";
      }
      if (leftPointer <= rightPointer) {
        this.swap(inputs, leftPointer, rightPointer);
        placeHolder[leftPointer].innerText = "　";
        leftPointer++;
        placeHolder[leftPointer].innerText = "▲";
        placeHolder[rightPointer].innerText = "　";
        rightPointer--;
        placeHolder[leftPointer].innerText = "▲";
      }
    }
    return leftPointer;
  }
  swap(inputs, leftPointer, rightPointer) {
    let tmp = this.array[leftPointer];
    inputs[leftPointer].value = this.array[rightPointer];
    this.array[leftPointer] = this.array[rightPointer];
    inputs[rightPointer].value = tmp;
    this.array[rightPointer] = tmp;
  }

  returnValue(value) {
    return value;
  }
  return() {
    return this.array;
  }
}

module.exports = quickSort;
