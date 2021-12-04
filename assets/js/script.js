// let sliders = document.querySelector(".owl_stage").children;
// let leftSlider = document.querySelector(".left_btn");
// let rightSlider = document.querySelector(".right_btn");
// let index = 0;

// let aa = document.querySelector(".owl_item").children;

// let totalSlider = sliders.length;

// rightSlider.addEventListener("click", function () {
//   //   next("left");
//   //   sliders.style.transform = "translateX(-1140px)";

//   for (let index = 0; index < sliders.length; index++) {
//     sliders[index].style.transform = "translateX(-100%)";
//     // console.log(index);
//   }
// });

// leftSlider.addEventListener("click", function () {
//   //   next("left");
//   //   sliders.style.transform = "translateX(0px)";
//   for (let index = 0; index < sliders.length; index++) {
//     sliders[index].style.transform = "translateX(0px)";
//     // console.log(i);
//   }
// });

// rightSlider.addEventListener("click", function () {
//   next("right");
// });

// function next(direction) {
//   if (direction == "next") {
//     index++;

//     if (index == totalSlider) {
//       index = 0;
//     }
//   }

//   for (let i = 0; i < sliders.length; i++) {
//     sliders[i].classList.remove("active");
//   }
//   sliders[index].classList.add("active");
// }

let slit = document.getElementsByClassName("owl_item");
let slitNumber = slit.length;
let count = 0;

slitSee(count);

function left() {
  count--;
  slitSee(count);
}

function right() {
  count++;
  slitSee(count);
}

// setInterval(() => {
//   count++;
//   slitSee(count);
// }, 3000);

function slitSee(slitNo) {
  count = slitNo;

  if (slitNo >= slitNumber) {
    count = 0;
  }

  if (slitNo < 0) {
    count = slitNumber - 1;
  }

  for (let i = 0; i < slitNumber; i++) {
    slit[i].style.display = "none";
  }
  slit[count].style.display = "block";
  //   slit[i].style.transition = ".3s all ease";
}
