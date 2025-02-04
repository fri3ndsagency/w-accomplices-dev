document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth <= 767) {
    var videos = document.querySelectorAll("[no-mobile]");
    var desktop = document.querySelectorAll("[no-mobile-bg]");
    videos.forEach(function (video) {
      // console.log("eliminados", video);
      video.removeAttribute("src");
    });
    desktop.forEach(function (element) {
      element.remove();
    });
    var elementoEliminar = document.querySelector(".html-embed-15");
    //elementoEliminar.remove();
  }

  if (window.innerWidth >= 767) {
    var desktopOnly = document.querySelectorAll("[no-desktop]");
    desktopOnly.forEach(function (element) {
      element.remove();
    });
  }
  if (window.innerWidth <= 767) {
    const elements = document.querySelectorAll("[videos-wrapper-private]");
    elements.forEach((element, i) => {
      if (i >= 5 && i <= 7) {
      } else {
        const iframes = element.querySelectorAll("iframe");
        iframes.forEach((iframe) => {
          // Eliminar el atributo 'src' del iframe
          iframe.removeAttribute("src");
        });
      }
    });
    const elementsPublic = document.querySelectorAll("[videos-wrapper-public]");
    elementsPublic.forEach((element, i) => {
      //  console.log(element[i], i, "eso");
      if (i >= 5 && i <= 7) {
      } else {
        element.style.display = "none";
      }
    });
  }
});
