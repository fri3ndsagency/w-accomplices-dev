/*-----------------------------------------------------------*/
/* Hover Text cards Private / Public                         */
/*-----------------------------------------------------------*/
const card1 = document.querySelector("[card-1-tab]");
const card2 = document.querySelector("[card-2-tab]");
const cardText1 = document.querySelector("[card-text-1]");
const cardText2 = document.querySelector("[card-text-2]");
const gradient1 = document.querySelector("[gradient-1]");
const gradient1mobile = document.querySelector("[gradient-1-mobile]");
const gradient2 = document.querySelector("[gradient-2]");
const gradient2mobile = document.querySelector("[gradient-2-mobile]");

if (window.innerWidth > 768) {
  gsap.set(cardText2, { fontSize: "25em" });
  gsap.set(cardText1, { fontSize: "25em" });
  if (window.innerWidth >= 767) {
    gradient2.style.display = "block";

    gsap.fromTo(
      gradient2,
      { opacity: 0 },
      {
        opacity: 1,
      }
    );
  }
  // Añadir evento de hover

  card1.addEventListener("mouseenter", () => {
   // console.log("hover");
    gsap.to(cardText2, 0.5, { fontSize: "10em" });
  });

  // Añadir evento de mouseleave
  card1.addEventListener("mouseleave", () => {
    // Restablecer el tamaño de fuente de card-text-2 usando GSAP
    TweenMax.to(cardText2, 0.5, { fontSize: "25em" });
  });

  card2.addEventListener("mouseenter", () => {
    // Reducir el tamaño de fuente de card-text-2 usando GSAP
    gsap.to(cardText1, 0.5, { fontSize: "10em" });
  });
  // Añadir evento de mouseleave
  card2.addEventListener("mouseleave", () => {
    // Restablecer el tamaño de fuente de card-text-2 usando GSAP
    TweenMax.to(cardText1, 0.5, { fontSize: "25em" });
  });
} else {
  gradient2mobile.style.display = "block";
}

document.querySelector("[card-1-tab]").addEventListener("click", function () {
  setTimeout(function () {
    window.dispatchEvent(new Event("resize"));
    ScrollTrigger.refresh();
    if (window.innerWidth > 768) {
      gradient2.style.display = "none";
      gradient1.style.display = "block";
      gsap.fromTo(
        gradient1,
        { opacity: 0 },
        {
          opacity: 1,
        }
      );
    } else {
      gradient2mobile.style.display = "none";
      gradient1mobile.style.display = "block";
      gsap.fromTo(
        gradient2mobile,
        { opacity: 1 },
        {
          opacity: 0,
        }
      );
      gsap.fromTo(
        gradient1mobile,
        { opacity: 0 },
        {
          opacity: 1,
        }
      );
    }
    var element = document.getElementById("section-1");
    element.scrollIntoView({ behavior: "smooth" });
    if (window.innerWidth < 768) {
      setTimeout(function () {
        var element = document.getElementById("mobile-public");
        element.scrollIntoView({ behavior: "smooth" });
      }, 800);
    }
  }, 800);
});

document.querySelector("[card-2-tab]").addEventListener("click", function () {
  setTimeout(function () {
    window.dispatchEvent(new Event("resize"));
    ScrollTrigger.refresh();
    if (window.innerWidth > 768) {
      gradient1.style.display = "none";
      gradient2.style.display = "block";
    } else {
      gradient1mobile.style.display = "none";
      gradient2mobile.style.display = "block";
      gsap.fromTo(
        gradient1mobile,
        { opacity: 1 },
        {
          opacity: 0,
          duration: 0.3,
        }
      );
      gsap.fromTo(
        gradient2mobile,
        { opacity: 0, duration: 0.3, delay: 0.3 },
        {
          opacity: 1,
        }
      );
    }
    var element = document.getElementById("section-4");
    element.scrollIntoView({ behavior: "smooth" });
    if (window.innerWidth < 768) {
     // console.log("entra mobile");
      setTimeout(function () {
        var element = document.getElementById("mobile-private");
        element.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, 800);
});
