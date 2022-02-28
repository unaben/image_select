// const duplicatedElement = ["a", "b", "e", "c", "d", "e", "b", "f", "a"];

const imageUrl = ["img/img1", "img/img2", "img/img3", "img/img4"];

const bridgeEl = document.getElementById("app");
console.log(bridgeEl);

const containerEl = document.getElementById("container");
bridgeEl.append(containerEl);

const nextBtnEl = document.getElementById("next");

const displayContainerEl = document.getElementById("imgHolder");

const prevBtnEl = document.getElementById("previous");

let arrayElement = 0;
let firstItem = 0;

const lastIndex = imageUrl.length - 1;
console.log("length: ", lastIndex);

nextBtnEl.addEventListener("click", () => {
  arrayElement++;

  if (arrayElement >= lastIndex) {
    arrayElement = lastIndex;
  }

  const imageEl = document.getElementById("myImg");

  imageEl.src = imageUrl[arrayElement];

  displayContainerEl.append(imageEl);
});

prevBtnEl.addEventListener("click", () => {
  arrayElement--;

  if (arrayElement <= firstItem) {
    arrayElement = firstItem;
  }
  const imageEl = document.getElementById("myImg");

  imageEl.src = imageUrl[arrayElement];

  displayContainerEl.append(imageEl);
});

// const len = duplicatedElement.length;
// console.log("len# ", len);

// const lenNeg = duplicatedElement.length - 1;
// console.log("lenNeg# ", lenNeg);

// function getRandomNum(min, max) {
//   let step1 = max - min + 1;
//   console.log("step1# ", step1);

//   let step2 = Math.random() * step1;
//   console.log("step2# ", step2);

//   let result = Math.floor(step2) + min;
//   console.log("result# ", result);

//   return result;
// }

// console.log(getRandomNum(0, duplicatedElement.length - 1));
