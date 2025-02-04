window.Webflow ||= [];
window.Webflow.push(() => {
  //console.log("loading");

  if (window.innerWidth <= 767) {
    var videos = document.querySelectorAll("[no-mobile]");
    console.log("eliminados");
    videos.forEach(function (video) {
      console.log("eliminados", video);
      video.removeAttribute("src");
    });
    var elementoEliminar = document.querySelector(".html-embed-15");
    //elementoEliminar.remove();
  }
  var hasPlayed = sessionStorage.getItem("hasMyAnimationPlayed");
  console.log("enra");

  if (hasPlayed !== "true") {
    gsap.set(".page-main", {
      display: "none",
    });

    /*-----------------------------------------------------------*/
    /* Set Default Values GSAP                                   */
    /*-----------------------------------------------------------*/

    gsap.set("[text-1-loading]", { y: "-8vh" });
    gsap.set("[text-2-loading]", { y: "20vh" });
    gsap.set(".hero-mobile-bg", {
      opacity: 0,
      duration: 2,
      ease: "power1.inOut", // Tipo de curva de la animación
    });
    /*-----------------------------------------------------------*/
    /* GSAP Animation Timeline                                  */
    /*-----------------------------------------------------------*/

    const master = gsap.timeline();
    const contadorDuracion = loader().totalDuration();

    master.add(counter(contadorDuracion));

    function counter(duracion) {
      return gsap.to("#counter-num", {
        innerText: 100,
        snap: "innerText",
        duration: duracion,
        ease: "sine.in",
      });
    }
    // Obtén el ID de la sección desde los parámetros de la URL
    const hash = window.location.hash.substring(1); // Elimina el `#` del inicio del hash

    // Realiza la animación de carga aquí
    setTimeout(function () {
      if (hash) {
        // Encuentra el elemento por ID
        const targetElement = document.getElementById(hash);
        if (targetElement) {
          // Usa scrollIntoView para asegurarte de que el elemento sea visible
          window.scrollTo({
            top: targetElement.offsetTop - 70, // Ajusta el desplazamiento superior
            behavior: "smooth",
          });
        } else {
          console.error(`Elemento con ID ${hash} no encontrado.`);
        }
      }
    }, 25000);

    // Función para cargar la animación
    function loader() {
      const tlLoader = gsap.timeline({
        onComplete: () => {
          const tl = gsap.timeline({
            onComplete: function () {
              console.log("La animación ha finalizadotodaa.");
              sessionStorage.setItem("hasMyAnimationPlayed", true);
              video.pause();
              if (window.innerWidth > 768) {
                createAnimation(
                  "[trigger-2]",
                  "[line-circle]",
                  "[point]",
                  "[text-circle]",
                  "[text-circle-hidden]",
                  "[img-circle-1]",
                  30,
                  600
                );
                createAnimation(
                  "[trigger-3]",
                  "[line-circle-2]",
                  "[point-2]",
                  "[text-circle-2]",
                  "[text-circle-hidden-2]",
                  "[img-circle-2]",
                  30,
                  600
                );
                createAnimation(
                  "[trigger-4]",
                  "[line-circle-3]",
                  "[point-3]",
                  "[text-circle-3]",
                  "[text-circle-hidden-3]",
                  "[img-circle-3]",
                  30,
                  600
                );
                createAnimation(
                  "[trigger-5]",
                  "[line-circle-4]",
                  "[point-4]",
                  "[text-circle-4]",
                  "[text-circle-hidden-4]",
                  "[img-circle-4]",
                  0,
                  600
                );
                createAnimation(
                  "[trigger-6]",
                  "[line-circle-5]",
                  "[point-5]",
                  "[text-circle-5]",
                  "[text-circle-hidden-5]",
                  "[img-circle-5]",
                  0,
                  600
                );
                createAnimation(
                  "[trigger-7]",
                  "[line-circle-6]",
                  "[point-6]",
                  "[text-circle-6]",
                  "[text-circle-hidden-6]",
                  "[img-circle-6]",
                  40,
                  400
                );
                createAnimation(
                  "[trigger-8]",
                  "[line-circle-7]",
                  "[point-7]",
                  "[text-circle-7]",
                  "[text-circle-hidden-7]",
                  "[img-circle-7]",
                  0,
                  400
                );
                createAnimation(
                  "[trigger-9]",
                  "[line-circle-8]",
                  "[point-8]",
                  "[text-circle-8]",
                  "[text-circle-hidden-8]",
                  "[img-circle-8]",
                  0,
                  400
                );
              }
              initAfterDelay();
              initAfterDelay2();
            },
          });

          var video = document.getElementById("video");
          setTimeout(function () {
            video.play();
          }, 230);
          video.addEventListener("ended", function () {
            // Elimina el elemento de video del DOM
            video.remove();
            console.log("El video ha terminado y se ha eliminado.");
          });
          tl.to(".loading-wrapper", {
            opacity: 0,
            duration: 0.5,
            delay: 0.8,
          });

          tl.to(
            ".loading-wrapper,.orange-wrapper",
            {
              display: "none",
            },
            ">-0.5"
          );

          tl.set(".page-main", {
            opacity: 0,
          });

          //   video.addEventListener('ended', function() {
          //         console.log("termino");

          tl.to(
            ".page-main",
            {
              display: "block",
              height: "100vh",
              duration: 2,
              opacity: 1,
              delay: 2,
            },
            ">-0.9"
          );
          ScrollTrigger.refresh();
          tl.to(".video-bg", {
            display: "none",
          });

          gsap.set(
            "[span-heading-1], [span-heading-2], [span-heading-3],[span-heading-4],[span-heading-5]",
            {
              opacity: 0,
              color: "white",
            }
          );
          gsap.set("[spline-wrapper]", {
            opacity: 0.01,
            scale: 0.55,
            x: 0,
            y: 0,
          });

          gsap.set("[span-heading-4], [span-heading-5]", {
            y: "20vh",
          });

          tl.to("[spline-wrapper]", {
            scale: 1,
            opacity: 1,
            duration: 2,
            x: 0,
            y: 0,

            ease: "power1.inOut", // Tipo de curva de la animación
          });
          tl.to(".hero-mobile-bg", {
            opacity: 1,
            duration: 2,
            ease: "power1.inOut", // Tipo de curva de la animación
          });
          tl.to(
            "[span-heading-1], [span-heading-2], [span-heading-3],[span-heading-4],[span-heading-5]",
            {
              opacity: 1,
              duration: 0.3,
              stagger: 0.3,
              ease: "power1.inOut",
            }
          );
          gsap.set("[spline-scroll-1]", {
            display: "none",
          });
          gsap.set("[scroll-tab-spline]", {
            display: "none",
          });
          tl.to("[span-heading-4],[span-heading-5]", {
            y: "0vh",
            duration: 0.5,
            ease: "power1.inOut",
          });
          tl.to(
            "[spline-scroll-1]",
            {
              display: "block",
              delay: 3,
            },
            ">-2"
          );
          tl.to(
            "[scroll-tab-spline]",
            {
              display: "block",
              delay: 1, // Tipo de curva de la animación
            },
            ">-0.9"
          );
          tl.to(".page-main", {
            height: "100%",
            duration: 0.2,
          });

          tl.to(".gradient-loop-bg", {
            opacity: 0.6,
            duration: 0.2,
          });

          //    });
        },
      });
      tlLoader.set(".loading-wrapper", {
        display: "flex",
      });
      // Animaciones con respecto a la duración del contador
      // 0 a 3
      tlLoader.to(
        ["#path2", "#path1"],
        { attr: { "stroke-dasharray": "1000 0" }, duration: 0.5, delay: 1 },
        "<"
      );
      tlLoader.to("[text-1-loading]", { y: "4vh", duration: 0.5 }, "<");

      // 3 a 6
      tlLoader.to(
        ["#path4", "#path6", "#path5"],
        { attr: { "stroke-dasharray": "1000 0" }, duration: 0.5, delay: 1 },
        "<"
      );
      tlLoader.to(
        "#path3",
        { attr: { "stroke-dashoffset": "0" }, duration: 0.3 },
        "<"
      );
      tlLoader.to("[text-2-loading]", { y: "-4vh", duration: 0.3 }, "<");
      gsap.set("[text-loading], [number]", { color: "#333" });
      tlLoader.to(
        "[text-loading], [number]",
        { color: "white", duration: 0.3, delay: 0.5 },
        "<"
      );
      tlLoader.to(".corner-svg", { opacity: 1, duration: 0.3 }, "<");

      tlLoader.to(
        "#path3, #path6",
        {
          attr: { "stroke-dasharray": "1000 0" },
          stroke: "#ffffff",
          duration: 0.3,
          delay: 0.3,
        },
        "<"
      );

      tlLoader.to(
        "#path3, #path6",
        {
          attr: { "stroke-dasharray": "10 10", "stroke-dashoffset": "0" },
          stroke: "#ffffff",
          duration: 1,
          delay: 1,
        },
        "<"
      );
      tlLoader.to("[corner-1], [corner-4]", { opacity: 0, duration: 0.3 }, "<");
      tlLoader.to(
        "#circle",
        {
          attr: { "stroke-dasharray": "1000 0" },
          stroke: "#ffffff",
          duration: 0.5,
        },
        "<"
      );

      tlLoader.to(
        "#path5, #path4",
        {
          attr: { "stroke-dasharray": "1000 0" },
          stroke: "#ffffff",
          duration: 1,
          delay: 2,
        },
        "<"
      );

      tlLoader.to(
        "#path4, #path5",
        {
          attr: { "stroke-dasharray": "10 10", "stroke-dashoffset": "0" },
          stroke: "#ffffff",
          duration: 1,
          //delay: 2,
        },
        "<"
      );

      tlLoader.to(
        ".counter-rounded",
        {
          borderColor: "#fff",
          duration: 1,
          //delay: 2,
        },
        "<"
      );

      tlLoader.to(
        "#path3, #path6",
        {
          attr: { "stroke-dasharray": "1000 0" },
          stroke: "#ffffff",
          delay: 0.5,
          duration: 0.5,
        },
        "<"
      );

      tlLoader.to(
        "#path1, #path2",
        {
          attr: { "stroke-dasharray": "10 10", "stroke-dashoffset": "0" },
          stroke: "#ffffff",
          duration: 1,
          delay: 2,
        },
        "<"
      );
      tlLoader.to(
        "#path4, #path5",
        {
          attr: { "stroke-dasharray": "1000 0" },
          stroke: "#ffffff",
          duration: 0.5,
        },
        "<"
      );
      tlLoader.to(
        "#path1, #path2",
        {
          attr: { "stroke-dasharray": "1000 0" },
          stroke: "#ffffff",
          duration: 1,
          delay: 2,
        },
        "<"
      );
      tlLoader.to(
        "[corner-2], [corner-3]",
        { opacity: 0, duration: 0.5 },
        "<+0.1"
      );

      return tlLoader;
    }
  } else {
    const tl = gsap.timeline({});
    console.log("enra");

    document.querySelector(".loading-wrapper").style.display = "none";
    document.querySelector(".page-main").style.display = "block";

    tl.to(".gradient-loop-bg", {
      opacity: 0.5,
      duration: 0.2,
    });

    if (window.innerWidth > 768) {
      createAnimation(
        "[trigger-2]",
        "[line-circle]",
        "[point]",
        "[text-circle]",
        "[text-circle-hidden]",
        "[img-circle-1]",
        30,
        400
      );
      createAnimation(
        "[trigger-3]",
        "[line-circle-2]",
        "[point-2]",
        "[text-circle-2]",
        "[text-circle-hidden-2]",
        "[img-circle-2]",
        30,
        400
      );
      createAnimation(
        "[trigger-4]",
        "[line-circle-3]",
        "[point-3]",
        "[text-circle-3]",
        "[text-circle-hidden-3]",
        "[img-circle-3]",
        30,
        400
      );
      createAnimation(
        "[trigger-5]",
        "[line-circle-4]",
        "[point-4]",
        "[text-circle-4]",
        "[text-circle-hidden-4]",
        "[img-circle-4]",
        0,
        400
      );
      createAnimation(
        "[trigger-6]",
        "[line-circle-5]",
        "[point-5]",
        "[text-circle-5]",
        "[text-circle-hidden-5]",
        "[img-circle-5]",
        0,
        400
      );
      createAnimation(
        "[trigger-7]",
        "[line-circle-6]",
        "[point-6]",
        "[text-circle-6]",
        "[text-circle-hidden-6]",
        "[img-circle-6]",
        40,
        400
      );
      createAnimation(
        "[trigger-8]",
        "[line-circle-7]",
        "[point-7]",
        "[text-circle-7]",
        "[text-circle-hidden-7]",
        "[img-circle-7]",
        0,
        400
      );
      createAnimation(
        "[trigger-9]",
        "[line-circle-8]",
        "[point-8]",
        "[text-circle-8]",
        "[text-circle-hidden-8]",
        "[img-circle-8]",
        0,
        400
      );
    }
    initAfterDelay();
    initAfterDelay2();
    window.dispatchEvent(new Event("resize"));
  }
});
