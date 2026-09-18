(function () {
  "use strict";

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
      });
    });
  }

  var form = document.querySelector(".mailto-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var nameEl = document.getElementById("name");
      var msgEl = document.getElementById("message");
      var name = nameEl ? nameEl.value.trim() : "";
      var message = msgEl ? msgEl.value.trim() : "";
      if (!name || !message) return;

      var body =
        "Name: " + name + "\n\n" +
        "Message:\n" + message;

      var href =
        "mailto:juarez1980md@gmail.com" +
        "?subject=" + encodeURIComponent("Cyber Fleet Miami inquiry") +
        "&body=" + encodeURIComponent(body);

      window.location.href = href;
    });
  }
})();
