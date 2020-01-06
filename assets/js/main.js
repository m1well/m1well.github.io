window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("back-to-top").style.display = "block";
  } else {
    document.getElementById("back-to-top").style.display = "none";
  }
}

function scrollToTop() {
  const position = document.body.scrollTop || document.documentElement.scrollTop;
  let scrollAnimation = 0;
  if (position) {
    window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
    scrollAnimation = setTimeout("scrollToTop()", 20);
  } else {
    clearTimeout(scrollAnimation);
  }
}

let xmlHttp = new XMLHttpRequest();
xmlHttp.open('GET', 'https://hitcounter.pythonanywhere.com/count', false);
xmlHttp.send(null);
console.log(xmlHttp.responseText);
