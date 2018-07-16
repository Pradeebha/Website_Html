
window.onscroll = function() {myFunction()};

var fixed_nav = document.getElementById("fixed_nav");
var sticky = fixed_nav.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    fixed_nav.classList.add("sticky")
  } else {
    fixed_nav.classList.remove("sticky");
  }
}
