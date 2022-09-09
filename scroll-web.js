//scrollsmoother
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  effects: true,
  ignoreMobileResize: true,
  content: "#smooth-content",
  ScrollTrigger.refresh();
  setTimeout(()=>{
    ScrollTrigger.refresh();
  }, 1000)
});