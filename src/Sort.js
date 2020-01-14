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
    placeHolder[leftPointer].classList.remove("disappeared");
    placeHolder[rightPointer].classList.remove("disappeared");

    window.setTimeout(() => {
      if (rightPointer - leftPointer >= 1) {
        indexTmp = this.partition(
          placeHolder,
          inputs,
          leftPointer,
          rightPointer
        );
        if (leftPointer < indexTmp - 1) {
          this.changeAppearAll(placeHolder);
          this.sort(placeHolder, inputs, leftPointer, indexTmp - 1);
        }
        if (indexTmp < rightPointer) {
          this.changeAppearAll(placeHolder);
          this.sort(placeHolder, inputs, indexTmp, rightPointer);
        }
      }
      return this.array;
    }, 300);
  }

  partition(
    placeHolder,
    inputs,
    leftPointer = 0,
    rightPointer = this.array.length - 1
  ) {
    let pivot = this.array[Math.floor((leftPointer + rightPointer) / 2)];

    while (leftPointer <= rightPointer) {
      while (this.array[leftPointer] < pivot) {
        leftPointer++;
        this.changeAppear(placeHolder, leftPointer, true);
      }
      while (this.array[rightPointer] > pivot) {
        rightPointer--;
        this.changeAppear(placeHolder, rightPointer, false);
      }
      if (leftPointer <= rightPointer) {
        this.swap(inputs, leftPointer, rightPointer);
        leftPointer++;
        this.changeAppear(placeHolder, leftPointer, true);
        rightPointer--;
        this.changeAppear(placeHolder, rightPointer, false);
      }
    }
    return leftPointer;
  }

  swap(inputs, leftPointer, rightPointer) {
    let tmp = this.array[leftPointer];
    this.array[leftPointer] = this.array[rightPointer];
    this.array[rightPointer] = tmp;

    inputs[leftPointer].value = this.array[leftPointer];
    this.changeBackgroundColor(inputs[leftPointer]);
    inputs[rightPointer].value = tmp;
    this.changeBackgroundColor(inputs[rightPointer]);
  }

  changeBackgroundColor(Element) {
    Element.classList.add("bright");
    Element.addEventListener(`transitionend`, () => {
      Element.classList.remove("bright");
    });
    return;
  }

  changeAppear(placeHolder, pointer, boolean) {
    if (boolean) {
      placeHolder[pointer - 1].classList.add("disappeared");
      placeHolder[pointer].classList.remove("disappeared");
    } else {
      placeHolder[pointer + 1].classList.add("disappeared");
      placeHolder[pointer].classList.remove("disappeared");
    }
  }

  changeAppearAll(placeHolder) {
    placeHolder.forEach((element) => {
      element.classList.add("disappeared");
    });
  }

  returnValue(value) {
    return value;
  }
  return() {
    return this.array;
  }
}

module.exports = quickSort;
