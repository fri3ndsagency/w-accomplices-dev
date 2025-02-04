gsap.registerPlugin(ScrollTrigger);

var $videoWrapper = $(".click-trigger");
$videoWrapper.each(function (index) {
  $(this).attr("data-index", index);
});
var $videoWrapperDiv = $(".video-wrapper");
$videoWrapperDiv.each(function (index) {
  $(this).attr("data-index", index);
});
var $videos = $(".video-rounded");
$videos.each(function (index) {
  $(this).attr("data-index", "1");
});
var $videosFrame = $("[video]");
$videosFrame.each(function (index) {
  $(this).attr("data-index", index);
});

const hoverElement = document.querySelector(".click-trigger");
const elemento = document.querySelector(".video-wrapper");

const videoGrow = document.querySelector(".video-rounded");
var video = document.getElementById("video-hover");

function pausarVideo() {
  video.pause();
}
function playVideo() {
  video.play();
}

$(".click-trigger").on("click", function () {
  var $videoRounded = $(".video-rounded");
  var $videoWrapper = $(".video-wrapper");
  var videoFrame = document.querySelector(".video-frame");
  var videoFrame2 = document.querySelector(".video-2");

  videoFrame.play();
  videoFrame2.play();
  const tlvideo = gsap.timeline();

  tlvideo.to($videoRounded, 0.2, {
    //scale: 0,
    width: "100%",
    height: "100%",
    borderRadius: "5%",
    transformOrigin: "center",
  });

  gsap.to($videoWrapper, { position: "absolute" });
  $videoWrapper.css("z-index", "99999");
});

$(".video-rounded").on("click", function () {
  var index = $(this).data("index");
 // console.log(index);
  var $videoRounded = $(".video-rounded");
  var $videoWrapper = $(".video-wrapper");
  var videoFrame = document.querySelector(".video-frame");
  var videoFrame2 = document.querySelector(".video-2");
  videoFrame.pause();
  videoFrame2.pause();

  const tlvideo = gsap.timeline();

  tlvideo.to($videoRounded, 0.2, {
    width: "30em",
    height: "30em",
    borderRadius: "100%",
    transformOrigin: "center",
  });
  gsap.to($videoWrapper, { position: "absolute" });
  $videoWrapper.css("z-index", "0");
});
