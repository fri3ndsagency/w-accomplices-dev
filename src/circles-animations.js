if (window.innerWidth > 768) {
  gsap.set("[line-circle-2]", {
    attr: { "stroke-dasharray": "0 1000" },
  });
  gsap.set("[line-circle-3]", {
    attr: { "stroke-dasharray": "0 1000" },
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      scrub: true,
      trigger: "[trigger-1]",
    },
  });
  tl.to(".is-absolute", {
    //duration: 0.5,
    rotation: "-=45",
    transformOrigin: "center center",
  });
  const tl2 = gsap.timeline({
    scrollTrigger: {
      scrub: 1,
      trigger: "[trigger-2]",
    },
  });

  function createAnimation(
    triggerSelector,
    lineCircleSelector,
    pointSelector,
    textCircleSelector,
    textCircleHiddenSelector,
    imageCircle,
    startPercentage,
    endOffset
  ) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerSelector,
        start: `center ${startPercentage}%`,
        end: `+=${endOffset}`,
        toggleActions: "play reverse play reverse",
      },
    });

    tl.to(
      lineCircleSelector,
      {
        width: "20em",
        backgroundColor: "#D65226",
        duration: 0.3,
      },
      0.1
    )
      .to(
        pointSelector,
        {
          backgroundColor: "#D65226",
          duration: 0.3,
          width: "1.2em",
          height: "1.2em",
        },
        0
      )
      .to(
        textCircleSelector,
        {
          opacity: 0,
          duration: 0.3,
        },
        0
      )
      .to(
        textCircleHiddenSelector,
        {
          opacity: 1,
          duration: 0.3,
        },
        0
      )
      .to(
        imageCircle,
        {
          opacity: 1,
          duration: 0.2,
        },
        0
      );
  }
  // const boton1 = document.querySelector("[card-1]");
  // const boton2 = document.querySelector("[card-2]");
  // boton1.addEventListener("click", function () {
  //   tl.scrollTrigger.refresh();
  // });
  // boton2.addEventListener("click", function () {
  //   tl.scrollTrigger.refresh();
  // });

  // createAnimation(
  //   "[trigger-2]",
  //   "[line-circle]",
  //   "[point]",
  //   "[text-circle]",
  //   "[text-circle-hidden]",
  //   "[img-circle-1]",
  //   30,
  //   600
  // );
  // createAnimation(
  //   "[trigger-3]",
  //   "[line-circle-2]",
  //   "[point-2]",
  //   "[text-circle-2]",
  //   "[text-circle-hidden-2]",
  //   "[img-circle-2]",
  //   30,
  //   600
  // );
  // createAnimation(
  //   "[trigger-4]",
  //   "[line-circle-3]",
  //   "[point-3]",
  //   "[text-circle-3]",
  //   "[text-circle-hidden-3]",
  //   "[img-circle-3]",
  //   30,
  //   600
  // );
  // createAnimation(
  //   "[trigger-5]",
  //   "[line-circle-4]",
  //   "[point-4]",
  //   "[text-circle-4]",
  //   "[text-circle-hidden-4]",
  //   "[img-circle-4]",
  //   0,
  //   600
  // );
  // createAnimation(
  //   "[trigger-6]",
  //   "[line-circle-5]",
  //   "[point-5]",
  //   "[text-circle-5]",
  //   "[text-circle-hidden-5]",
  //   "[img-circle-5]",
  //   0,
  //   600
  // );
  // createAnimation(
  //   "[trigger-7]",
  //   "[line-circle-6]",
  //   "[point-6]",
  //   "[text-circle-6]",
  //   "[text-circle-hidden-6]",
  //   "[img-circle-6]",
  //   40,
  //   400
  // );
  // createAnimation(
  //   "[trigger-8]",
  //   "[line-circle-7]",
  //   "[point-7]",
  //   "[text-circle-7]",
  //   "[text-circle-hidden-7]",
  //   "[img-circle-7]",
  //   0,
  //   400
  // );
  // createAnimation(
  //   "[trigger-9]",
  //   "[line-circle-8]",
  //   "[point-8]",
  //   "[text-circle-8]",
  //   "[text-circle-hidden-8]",
  //   "[img-circle-8]",
  //   0,
  //   400
  // );
}
