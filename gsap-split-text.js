let windowWidth = window.outerWidth;

$(".split-text").each(function (index) {
  let myText = $(this);
  let mySplitText;
  function createSplits() {
    mySplitText = new SplitText(myText, {
      type: "chars,words,lines",
      charsClass: "split-chars",
      wordsClass: "split-words",
      linesClass: "split-lines"
    });
  }
  createSplits();
  $(window).resize(function () {
    if (window.outerWidth !== windowWidth) {
      mySplitText.revert();
      location.reload();
    }
    windowWidth = window.outerWidth;
  });
});

gsap.registerPlugin(ScrollTrigger);

function createTextAnimations() {
  // Line Animation
  $(".line-animation").each(function (index) {
    let triggerElement = $(this);
    let myText = $(this).find(".split-text");
    let targetElement = $(this).find(".split-lines");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top bottom",
        end: "bottom top",
        toggleActions: "restart none restart reset"
      }
    });
    tl.from(targetElement, {
      duration: 0.6,
      y: "150%",
      rotationX: -90,
      opacity: 0,
      ease: "power1.inOut",
      stagger: {
        amount: 0.4,
        from: "0"
      }
    });
  });

  // Line Animation2
  $(".line-animation2").each(function (index) {
    let triggerElement = $(this);
    let myText = $(this).find(".split-text");
    let targetElement = $(this).find(".split-lines");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top bottom",
        end: "bottom top",
        toggleActions: "restart none restart reset"
      }
    });
    tl.from(targetElement, {
      duration: 0.8,
      y: "100%",
      rotationX: 90,
      opacity: 0,
      ease: "power2.inOut",
      stagger: {
        amount: 0.3,
        from: "0"
      }
    });
  });

  // Line Animation3(2-line)
  $(".line-animation3").each(function (index) {
    let triggerElement = $(this);
    let myText = $(this).find(".split-text");
    let targetElement = $(this).find(".split-lines");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top bottom",
        end: "bottom top",
        toggleActions: "restart none restart reset"
      }
    });
    tl.from(targetElement, {
      duration: 1,
      y: "100%",
      rotationX: 90,
      opacity: 0,
      ease: "power3.inOut",
      stagger: {
        amount: 0.3,
        from: "0"
      }
    });
  });

  // Word Animation
  $(".word-animation").each(function (index) {
    let triggerElement = $(this);
    let myText = $(this).find(".split-text");
    let targetElement = $(this).find(".split-words");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top bottom",
        end: "bottom top",
        toggleActions: "restart none none none"
      }
    });
    tl.from(targetElement, {
      duration: 0.3,
      y: "80%",
      rotationX: -90,
      opacity: 0,
      ease: "power1.inOut",
      stagger: {
        amount: 0.9,
        from: "0"
      }
    });
  });
  // Letter Animation
  $(".letter-animation").each(function (index) {
    let triggerElement = $(this);
    let myText = $(this).find(".split-text");
    let targetElement = $(this).find(".split-chars");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top bottom",
        end: "bottom top",
        toggleActions: "restart none none none"
      }
    });
    tl.from(targetElement, {
      duration: 0.5,
      y: "100%",
      opacity: 0,
      rotationX: 90,
      ease: "power1.inOut",
      stagger: {
        amount: 0.7,
        from: "0"
      }
    });
  });
}
createTextAnimations();
