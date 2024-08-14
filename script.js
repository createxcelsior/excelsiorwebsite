function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }

  // Script for navbar from W3S: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_topnav