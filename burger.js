document.getElementById("navMenu-burger").style.right = "-100%";
function burger() {  
    var x = document.getElementById("navMenu-burger");
    x.style.transition = "1s"
    if (x.style.right === "-100%") {
      x.style.right = "0";
    } else {
      x.style.right = "-100%";
    }
  }

$(function() {
  $(window).resize(resizeBurger);
});

 function resizeBurger(){
  let widthWindow = document.documentElement.clientWidth;
  let logo_width = document.getElementById("mobilelogo").offsetWidth;
 let burger_width = widthWindow - logo_width;
  $("#navMenu-burger").width(burger_width);
 console.log(document.getElementById('navMenu-burger').style.width);
}