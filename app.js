window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 670 || document.documentElement.scrollTop > 670) {
    document.getElementById("header").style.opacity = "1";
  } else {
    document.getElementById("header").style.opacity = "0";
  }
}
