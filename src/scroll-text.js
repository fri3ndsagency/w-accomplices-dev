function createScrollTimeline(
  trigger,
  start,
  end,
  xValue,
  scaleValue,
  opacityValue
) {
  return gsap
    .timeline({
      scrollTrigger: {
        trigger: trigger,
        start: start,
        end: end,
        scrub: true,
        //markers: true,
      },
    })
    .to("[spline]", {
      x: xValue,
      scale: scaleValue,
      opacity: opacityValue,
    });
}

const timeline = gsap.timeline();

const tlscroll1 = createScrollTimeline(
  "[spline-scroll-1]",
  "+=100",
  "+=400",
  "45vw",
  1.5
);

const tlscroll2 = createScrollTimeline(
  "[spline-scroll-1]",
  "+=1800",
  "+=300",
  "0vw",
  1
);
const tlscroll3 = createScrollTimeline(
  "[spline-scroll-1]",
  "+=2500",
  "+=200",
  "0vw",
  1,
  0.2
);

// const tlscroll3 = createScrollTimeline(
//   "[spline-scroll-1]",
//   "+=4600",
//   "+=400",
//   "-40vw",
//   0.4,
// );

const tlscroll4 = gsap.timeline({
  scrollTrigger: {
    trigger: "[spline-scroll-1]",
    start: "=+4500",
    end: "+=1000",
    pin: true,
    pinSpacing: true,
    scrub: true,
    //markers: true,
  },
});

tlscroll4.to("[spline]", { x: "-43vw", scale: 0.2, opacity: 1 });

const tlscroll5 = gsap.timeline({
  scrollTrigger: {
    trigger: "[spline-scroll-1]",
    start: "=+15000",
    end: "+=10000",
    pin: true,
    pinSpacing: true,
    scrub: true,
    //markers: true,
  },
});

tlscroll5.to("[spline]", { opacity: 1 });

const tlscroll6 = gsap.timeline({
  scrollTrigger: {
    trigger: "[spline-scroll-1]",
    start: "=+8000",
    end: "+=1000",
    scrub: true,
    // markers: true,
  },
});

tlscroll6.to("[spline]", { autoAlpha: 0.1, x: "-70vw" });

const tlscroll7 = gsap.timeline({
  scrollTrigger: {
    trigger: "[spline-scroll-1]",
    start: "=+15000",
    end: "+=1000",
    scrub: true,
    // markers: true,
  },
});

tlscroll7.to("[spline]", { autoAlpha: 1, x: "-50vw", scale: 1.3 });
