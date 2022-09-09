let customEase =
  "M0,0,C0,0,0.13,0.34,0.238,0.442,0.305,0.506,0.322,0.514,0.396,0.54,0.478,0.568,0.468,0.56,0.522,0.584,0.572,0.606,0.61,0.719,0.714,0.826,0.798,0.912,1,1,1,1";

//newloader

// variables
let counter = {
  value: 0
};
let loaderDuration = 3;

// If not a first time visit in this tab
if (sessionStorage.getItem("visited") !== null) {
  loaderDuration = 2;
  counter = {
    value: 0
  };
}
sessionStorage.setItem("visited", "true");

function updateLoaderText() {
  let progress = Math.round(counter.value);
  if (progress < 10) {
    progress = "0" + progress;
  }
  $(".loader_number").text(progress);
}

//start-loader
function startLoaderAnimation() {
  $(".trigger-start-load").click();
}

let tl = gsap.timeline({
  onStart: startLoaderAnimation
});
//start-loader-finish

// //end-loader
// function endLoaderAnimation() {
//   $(".trigger-end-load").click();
// }

// let tl = gsap.timeline({
//   onComplete: endLoaderAnimation
// });

// //end-loader-finish

tl.to(counter, {
  delay: 1.1,
  value: 22,
  onUpdate: updateLoaderText,
  duration: loaderDuration
});
tl.to(
  ".loader_progress",
  {
    width: "100%",
    duration: loaderDuration
  },
  0
);
