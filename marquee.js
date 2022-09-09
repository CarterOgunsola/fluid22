let object = {
  value: 1
};

let tl = gsap.timeline({ repeat: -1 });
tl.fromTo(
  ".marquee_track",
  {
    xPercent: 0
  },
  {
    xPercent: -50,
    duration: 14,
    ease: "none"
  }
);

$(".marquee_track").on("mouseenter", function () {
  gsap.fromTo(
    object,
    {
      value: 1
    },
    {
      value: 0,
      duration: 1.2,
      onUpdate: () => {
        tl.timeScale(object.value);
      }
    }
  );
});

$(".marquee_track").on("mouseleave", function () {
  gsap.fromTo(
    object,
    {
      value: 0
    },
    {
      value: 1,
      duration: 1.2,
      onUpdate: () => {
        tl.timeScale(object.value);
      }
    }
  );
});
