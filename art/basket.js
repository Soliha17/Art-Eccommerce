// codes for gallery section
var button = document.getElementById("slide");
var back = document.getElementById("slideBack");
button.onclick = function () {
  var container = document.getElementById("container");
  sideScroll(container, "right", 25, 300, 150);
  back.style.display = "block";
  button.style.display = "none";
};

back.onclick = function () {
  var container = document.getElementById("container");
  sideScroll(container, "left", 25, 300, 150);
  back.style.display = "none";
  button.style.display = "block";
};

function sideScroll(element, direction, speed, distance, step) {
  scrollAmount = 0;
  var slideTimer = setInterval(function () {
    if (direction == "left") {
      element.scrollLeft -= step;
    } else {
      element.scrollLeft += step;
    }
    scrollAmount += step;
    if (scrollAmount >= distance) {
      window.clearInterval(slideTimer);
    }
  }, speed);
}
