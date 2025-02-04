$videoPreviewWrapper = $("[videos-wrapper-public]");
$videoPreviewWrapper.each(function (index) {
  $(this).attr("data-index", index);
});

$videoPreviewClick = $("[btn-video-public]");
$videoPreviewClick.each(function (index) {
  $(this).attr("data-index", index);
});

$videoCloseClick = $("[btn-close-public]");
$videoCloseClick.each(function (index) {
  $(this).attr("data-index", index);
});

$videoPreviewClick.on("click", function () {
  // Obtener el índice del elemento clickeado
  var index = $(this).data("index");
  console.log(index, "private");
  // Agregar la clase "is active" al elemento $videoPreviewWrapper correspondiente
  var $videoPreviewWrapper = $("[videos-wrapper-public]");
  $videoPreviewWrapper.removeClass("is active"); // Remover la clase de todos los elementos
  $videoPreviewWrapper.hide().eq(index).fadeIn().addClass("is-active");
  // Agregar la clase al elemento con el índice correspondiente
  $("[nav]").css("z-index", 0);
});

$videoCloseClick.on("click", function () {
  // Obtener el índice del elemento clickeado
  var index = $(this).data("index");
  // Obtener todos los elementos con el atributo "videos-wrapper-public"
  var $videoPreviewWrapper = $("[videos-wrapper-public]");

  $videoPreviewWrapper.filter(".is-active").fadeOut(function () {
    $(this).removeClass("is-active");
  });
  $("[nav]").css("z-index", 9);
});

$videoPreviewWrapperPrivate = $("[videos-wrapper-private]");
$videoPreviewWrapperPrivate.each(function (index) {
  $(this).attr("data-index", index);
});

$videoPreviewClickPrivate = $("[btn-video-private]");
$videoPreviewClickPrivate.each(function (index) {
  $(this).attr("data-index", index);
});

$videoCloseClickPrivate = $("[btn-close-private]");
$videoCloseClickPrivate.each(function (index) {
  $(this).attr("data-index", index);
});

$videoPreviewClickPrivate.on("click", function () {
  // Obtener el índice del elemento clickeado
  var index = $(this).data("index");
  //console.log(index);
  // Agregar la clase "is active" al elemento $videoPreviewWrapper correspondiente
  var $videoPreviewWrapperPrivate = $("[videos-wrapper-private]");
  $videoPreviewWrapperPrivate.removeClass("is active"); // Remover la clase de todos los elementos
  $videoPreviewWrapperPrivate.hide().eq(index).fadeIn().addClass("is-active");
  $("[nav]").css("z-index", 0);

  // Agregar la clase al elemento con el índice correspondiente
});

$videoCloseClickPrivate.on("click", function () {
  // Obtener el índice del elemento clickeado
  var index = $(this).data("index");
  //console.log(index);
  // Obtener todos los elementos con el atributo "videos-wrapper-public"
  var $videoPreviewWrapperPrivate = $("[videos-wrapper-private]");
  $videoPreviewWrapperPrivate.filter(".is-active").fadeOut(function () {
    $(this).removeClass("is-active");
  });
  $("[nav]").css("z-index", 9);
});

function populateVimeoThumbs() {
  const galleryItems = document.querySelectorAll("[videos-preview-stacking]");

  Array.from(galleryItems).forEach((item) => {
    const id = item.querySelector(".url-vimeo").innerHTML.replace(/\D/g, "");

    fetch(`https://vimeo.com/api/v2/video/${id}.json`)
      .then((t) => t.json())
      .then((t) => {
        const thumb = t[0].thumbnail_large;
        //console.log(thumb);
        item.querySelector(".bg-card").src = thumb;
      });
  });
}

function populateVimeoThumbs2() {
  const galleryItems = document.querySelectorAll("[img-preview-stacking-2]");

  Array.from(galleryItems).forEach((item) => {
    const id = item.querySelector(".url-vimeo-2").innerHTML.replace(/\D/g, "");
    //console.log(id);
    fetch(`https://vimeo.com/api/v2/video/${id}.json`)
      .then((t) => t.json())
      .then((t) => {
        const thumb = t[0].thumbnail_large;
        //console.log(thumb);

        item.querySelector(".bg-card-2").src = thumb;
      });
  });
}
populateVimeoThumbs();
populateVimeoThumbs2();

$videoPreviewClick.on("click", function () {
  // Obtener el índice del elemento clickeado
  var index = $(this).data("index");
  console.log(index);

  // Obtener el video wrapper correspondiente al índice
  var $videoWrapper = $("[videos-wrapper-public][data-index='" + index + "']");

  // Mostrar el video wrapper correspondiente y ocultar los demás
  $("[videos-wrapper-public]")
    .not($videoWrapper)
    .removeClass("is-active")
    .hide();
  $videoWrapper.addClass("is-active").fadeIn();
});
