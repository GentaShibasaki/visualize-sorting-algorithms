/* Example Code
      The following is just some example code for you to play around with.
      No need to keep this---it's just some code so you don't feel too lonely.
*/

// How can we use require here if it's frontend? We can thank webpack.
const Sort = require("./Sort");

// A link to our styles!
require("./index.css");

const sort = new Sort([]);

function createCheesyTitle(slogan) {
  const container = document.createElement("h1");
  const textNode = document.createTextNode(slogan);
  container.appendChild(textNode);
  return container;
}

const title = createCheesyTitle(sort.returnValue("Quick Sort"));
document.getElementById("title").appendChild(title);

/*
    An simple example of how you can make your project a bit more
    interactive, if you would like.

    In our `index.html` page, we have a short form.
    Here is the code that talks to it.
  */
function changeTitle(event) {
  event.preventDefault();
  // console.log('What is an event?', event);
}

const form = document.querySelector("form");
document.addEventListener("DOMContentLoaded", () => {
  form.onsubmit = changeTitle;
});

const executionButton = document.querySelector("#execution");
executionButton.addEventListener("click", () => {
  const placeHolder = document.querySelectorAll("p");
  const inputs = document.querySelectorAll("#inputs");
  let array = [];
  inputs.forEach((input) => array.push(+input.value));
  const sort = new Sort(array);
  sort.sort(placeHolder, inputs);
});

const calculationButton = document.querySelector("#calculation");
calculationButton.addEventListener("click", () => {
  const inputs = document.querySelectorAll("#inputs");
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let index = 0;
  let length = array.length;
  while (length) {
    let tmpIndex = Math.floor(Math.random() * length);
    let tmp = array[--length];
    array[length] = array[tmpIndex];
    array[tmpIndex] = tmp;
  }
  inputs.forEach((input) => {
    input.value = array[index];
    index++;
  });
});

const refleshButton = document.querySelector("#refresh");
refleshButton.addEventListener("click", () => {
  const inputs = document.querySelectorAll("#inputs");
  inputs.forEach((input) => {
    input.value = "";
  });
  const placeHolder = document.querySelectorAll("p");
  placeHolder.forEach((element) => {
    element.classList.add("disappeared");
  });
});

// const valueOfNumberOfTimes = document.querySelector("#numberOfTimes");
// valueOfNumberOfTimes.addEventListener("change",()=>{
//   //clear all
//   const inputElements = document.querySelector("inputForm");
//   inputElements.forEach(element =>{
//     element.remove();
//   });
//   inputElement = document.createElement("input");
//   inputElement.classList.add("")

// });
