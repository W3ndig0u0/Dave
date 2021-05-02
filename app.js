window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 670 || document.documentElement.scrollTop > 670) {
    document.getElementById("header").style.opacity = "1";
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.opacity = "0";
    document.getElementById("header").style.top = "-10%";
  }
}


var text = ['“What did the 5 fingers say to the face. S L A P!”', '“Hey hey hey, smoke weed everyday”'];

textSequence(0);
function textSequence(i) {

    if (text.length > i) {
        setTimeout(function() {
            document.getElementById("sequence").innerHTML = text[i];
            textSequence(++i);
        }, 4000);

    } else if (text.length == i) {
        textSequence(0);
    }
}