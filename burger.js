function burger() {
    var x = document.getElementById("navMenu-burger");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }