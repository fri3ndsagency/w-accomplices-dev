gsap.registerPlugin(ScrollTrigger);

function initAfterDelay() {
  const cards = gsap.utils.toArray("[card]");
  cards.forEach((card, index) => {
    gsap.set(card, {
      scale: 1,
      filter: `brightness(100%)`,
      x: "0vw",
      y: "0vh",
    });

    cards.forEach((card, index) => {
      const title = card.querySelector("[title]");
      const image = card.querySelector("[title]");
      const xValue = `${-2 * (cards.length - index - 1)}vw`;
      const yValue = `${-2 * (cards.length - index - 1)}vh`;
      const opacityValue = 1 - index * 0.1;
      const brightnessValue = index * 20;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: `top-=${index * 30} top+=-50px`,
          endTrigger: ".collection-work-flex",
          end: `bottom top+=${500 + cards.length * 30}`,
          // pin: true,
          scrub: true,
          pinSpacing: false,
          //markers: true,
          id: "card-pin",
          //invalidateOnRefresh: true,
        },
      });

      tl.fromTo(
        card,
        {
          duration: 1,
          scale: 1,
          filter: `brightness(100%)`,
          x: "0vw",
          y: "0vh",
        },
        {
          duration: 1,
          scale: 0.9,
          filter: `brightness(${brightnessValue}%)`,
          x: xValue,
          y: yValue,
        }
      );
    });
  });
}

function initAfterDelay2() {
  const cards2 = gsap.utils.toArray("[card-2-stack]");

  cards2.forEach((card, index) => {
    gsap.set(card, {
      scale: 1,
      filter: `brightness(100%)`,
      x: "0vw",
      y: "0vh",
    });

    const xValue = `${-2 * (cards2.length - index - 1)}vw`;
    const yValue = `${-2 * (cards2.length - index - 1)}vh`;
    const opacityValue = 1 - index * 0.1;
    const brightnessValue = index * 20;
    console.log(brightnessValue);
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: `top-=${index * 30} top+=-50px`,
        endTrigger: "[card-stop]",
        end: `bottom top+=${500 + cards2.length * 30}`,
        //pin: true,
        scrub: true,
        pinSpacing: false,
        //markers: true,
        id: "card-pin",
        //invalidateOnRefresh: true,
      },
    });

    tl2.fromTo(
      card,
      {
        duration: 1,
        scale: 1,
        filter: `brightness(100%)`,
        x: "0vw",
        y: "0vh",
      },
      {
        duration: 1,
        scale: 0.9,
        filter: `brightness(${brightnessValue}%)`,
        x: xValue,
        y: yValue,
      }
    );
  });
}
initAfterDelay();
initAfterDelay2();
setTimeout(initAfterDelay, 21000);
setTimeout(initAfterDelay2, 21000);

function actualizarScrollTrigger() {
  ScrollTrigger.refresh();
}
setTimeout(function () {
  ScrollTrigger.refresh();
}, 2000);
