<script>
//slider1-for-case-studies-start
function slider1() {

let splides = $('.slider1');
for ( let i = 0, splideLength = splides.length; i < splideLength; i++ ) {
	new Splide( splides[ i ], {
  // Desktop on down
	perPage: 2.7,
	perMove: 1,
  focus: 0, // 0 = left and 'center' = center
  type: 'slide', // 'loop' or 'slide'
  gap: '2.5em', // space between slides
  arrows: 'false', // 'slider' or false
  pagination: 'slider', // 'slider' or false
  speed : 1200, // transition speed in miliseconds
  dragAngleThreshold: 30, // default is 30
 	drag : 'free',
  autoWidth: false, // for cards with differing widths
  rewind : true, // go back to beginning when reach end
  rewindSpeed : 600,
  rewindByDrag: true,
  waitForTransition : false,
 
  updateOnMove : true,
  trimSpace: false, // true removes empty space from end of list
  breakpoints: {
		991: {
    	// Tablet
		},
    767: {
    	// Mobile Landscape
		},
    479: {
    	// Mobile Portrait
		}
	}
} ).mount();
}

}
slider1();
//slider1-for-case-studies-end
</script>


<script>
//slider2-for-process-start
function slider2() {

let splides = $('.slider2');
for ( let i = 0, splideLength = splides.length; i < splideLength; i++ ) {
	new Splide( splides[ i ], {
  // Desktop on down
	perPage: 3.3,
	perMove: 1,
  focus: 0, // 0 = left and 'center' = center
  type: 'slide', // 'loop' or 'slide'
  gap: '1.875em', // space between slides
  arrows: 'false', // 'slider' or false
  pagination: 'false', // 'slider' or false
  speed : 600, // transition speed in miliseconds
  dragAngleThreshold: 30, // default is 30
 	//drag : 'free',
  autoWidth: false, // for cards with differing widths
  rewind : true, // go back to beginning when reach end
  rewindSpeed : 600,
  rewindByDrag: true,
  waitForTransition : false,
 
  updateOnMove : true,
  trimSpace: false, // true removes empty space from end of list
  breakpoints: {
		991: {
    	// Tablet
		},
    767: {
    	// Mobile Landscape
		},
    479: {
    	// Mobile Portrait
		}
	}
} ).mount();
}

}
slider2();
//slider2-for-process-end
</script>










let counter = {
  value: 00
};
let loaderDuration = 10;

// If not a first time visit in this tab
if (sessionStorage.getItem("visited") !== null) {
  loaderDuration = 2;
  counter = {
    value: 00
  };
}
sessionStorage.setItem("visited", "true");

function updateLoaderText() {
  let progress = Math.round(counter.value);
  $(".loader_number").text(progress);
}

function startLoaderAnimation() {
  $(".trigger-start-load").click();
}

window.onload = startLoaderAnimation;
//tl.to(".trigger-start-load", { x: 100 }, "<");

function endLoaderAnimation() {
  $(".trigger-end-load").click();
}

let tl = gsap.timeline({
  onComplete: endLoaderAnimation
});

tl.to(counter, {
  value: 22,
  onUpdate: updateLoaderText,
  duration: loaderDuration,
  ease: CustomEase.create("custom", customEase)
});
tl.to(
  ".loader_progress",
  {
    width: "100%",
    duration: loaderDuration,
    ease: CustomEase.create("custom", customEase)
  },
  0
);
