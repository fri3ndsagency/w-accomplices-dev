gsap.set(".img-trail", { yPercent: 0, xPercent: 0 });
gsap.set(".img-trail", { yPercent: -50, xPercent: -50 });

let activeImage;
gsap.utils.toArray("[hover]").forEach((el) => {
  let image = el.querySelector(".img-trail"),
    setX,
    setY,
    align = (e) => {
      setX(e.clientX);
      setY(e.clientY);
    },
    startFollow = () => document.addEventListener("mousemove", align),
    stopFollow = () => document.removeEventListener("mousemove", align),
    fade = gsap.to(image, {
      autoAlpha: 1,
      ease: "none",
      paused: true,
      onReverseComplete: stopFollow,
    });

  el.addEventListener("mouseenter", (e) => {
    fade.play();
    startFollow();
    if (activeImage) {
      gsap.set(image, {
        x: gsap.getProperty(activeImage, "x"),
        y: gsap.getProperty(activeImage, "y"),
      });
    }
    activeImage = image;
    (setX = gsap.quickTo(image, "x", { duration: 0.6, ease: "power3" })),
      (setY = gsap.quickTo(image, "y", { duration: 0.6, ease: "power3" }));
    align(e);
  });

  el.addEventListener("mouseleave", () => fade.reverse());
});

function changeImages(selector) {
  const elements = document.querySelectorAll(selector);
  let currentIndex = 0;

  function changeImage() {
    elements.forEach((element, index) => {
      element.style.display = index === currentIndex ? "block" : "none";
    });

    currentIndex = (currentIndex + 1) % elements.length;
  }

  setInterval(changeImage, 1000); // Cambia la imagen cada 1000 ms (1 segundo)
}

changeImages("[image-change]");
changeImages("[image-change-public]");
