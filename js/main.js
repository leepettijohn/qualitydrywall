/* ===========================================================
   Quality Drywall Construction — site scripts
   =========================================================== */

(function () {
  "use strict";

  // Mobile nav toggle
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.getElementById("nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  // Footer year
  var yr = document.getElementById("yr");
  if (yr) {
    yr.textContent = new Date().getFullYear();
  }
})();
