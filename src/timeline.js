window.Webflow ||= [];
window.Webflow.push(() => {
  const elementos = document.querySelectorAll("[content-tab]");
  const divsColor = document.querySelectorAll("[years]");
  const yearText = document.querySelectorAll("[year-text]");
  const colorLine = document.querySelectorAll(".line-color");

  let indice = 0;

  divsColor.forEach((elemento, index) => {
    elemento.addEventListener("click", () => {
      console.log(index, "indedx");
      animarElementos(index);
    });
  });
  let tl;

  function animarElementos(indice) {
    const elementoActual = elementos[indice];
    const divColor = divsColor[indice];
    const year = yearText[indice];
    const color = colorLine[indice];

    elementoActual.classList.add("is-active");
    divColor.classList.add("is-active");
    year.classList.add("is-active");
    color.classList.add("is-active");

    elementos.forEach((elemento, index) => {
      if (index !== indice) {
        elemento.classList.remove("is-active");
      }
    });
    divsColor.forEach((elemento, index) => {
      if (index !== indice) {
        gsap.to(elemento, {
          duration: 1,
          width: "10em",
        });
        elemento.classList.remove("is-active");
      }
    });
    yearText.forEach((elemento, index) => {
      if (index !== indice) {
        elemento.classList.remove("is-active");
      }
    });
    colorLine.forEach((elemento, index) => {
      if (index !== indice) {
        gsap.set(elemento, { width: "" });
        elemento.classList.remove("is-active");
      }
    });

    // Crear un nuevo timeline
    // Detener el timeline actual si existe
    if (tl) {
      tl.kill(); // Detener el timeline
      tl = null; // Reiniciar tl
    }

    // Resto del código omitido por brevedad...

    // Crear un nuevo timeline
    tl = gsap.timeline();

    // Agregar animaciones al timeline
    tl.to(divColor, { duration: 1, width: "100%", ease: "power2.out" }, 0)
      .to(color, { duration: 5, width: "100%", ease: "power2.out" }, 0) // Comienza esta animación 0.5 segundos antes de que finalice la anterior
      .fromTo(elementoActual, { opacity: 0 }, { opacity: 1, duration: 0.8 }, 0) // Comienza esta animación 3 segundos antes de que finalice la anterior
      .to(
        elementoActual,
        {
          duration: 5,
          // onComplete: () => {
          //  // siguienteElemento();
          // },
        },
        0
      );

    // Reproducir el timeline
    tl.play();

    // // Función para pasar al siguiente elemento
    // function siguienteElemento() {
    //   // Incrementar el índice
    //   indice++;

    //   // Si el índice supera el número de elementos, vuelve al principio
    //   if (indice === elementos.length) {
    //     indice = 0;
    //   }
    //   if (indice === divsColor.length) {
    //     indice = 0;
    //   }
    //   if (indice === yearText.length) {
    //     indice = 0;
    //   }

    //   if (indice === colorLine.length) {
    //     indice = 0;
    //   }

    //   // Llama nuevamente a la función para el siguiente elemento
    //   animarElementos(indice);
    // }
    // Función para avanzar al siguiente elemento
  }
  function avanzarElemento(indice) {
    tl.pause();
    let siguienteIndice = indice + 1;
    if (siguienteIndice === elementos.length) {
      siguienteIndice = 0;
    }
    animarElementos(siguienteIndice);
    return siguienteIndice; // Devolver el nuevo índice actualizado
  }

  function retrocederElemento(indice) {
    tl.pause();
    let indiceAnterior = indice - 1;
    if (indiceAnterior < 0) {
      indiceAnterior = elementos.length - 1;
    }
    animarElementos(indiceAnterior);
    return indiceAnterior; // Devolver el nuevo índice actualizado
  }

  // Agregar event listeners fuera de la función animarElementos
  document.querySelector("[next]").addEventListener("click", function () {
    indice = avanzarElemento(indice);
  });
  document.querySelector("[prev]").addEventListener("click", function () {
    indice = retrocederElemento(indice);
  });

  function verificarSeccionTimeline() {
    const seccionTimeline = document.querySelector("[section-timeline]");
    const seccionPosicion = seccionTimeline.getBoundingClientRect().top;
    const pantallaAltura = window.innerHeight;

    // Si la parte superior de la sección está dentro de la ventana gráfica, iniciar la animación
    if (seccionPosicion < pantallaAltura) {
      animarElementos(0);
      // Eliminar el listener para evitar iniciar la animación más de una vez
      window.removeEventListener("scroll", verificarSeccionTimeline);
    }
  }

  // Agregar un listener para el evento de scroll
  window.addEventListener("scroll", verificarSeccionTimeline);
});
