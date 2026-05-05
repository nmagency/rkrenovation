(function () {
  var toggle = document.querySelector(".nav-toggle");
  var mobile = document.querySelector(".nav-mobile");
  var mobileLinks = mobile ? mobile.querySelectorAll("a") : [];

  function setOpen(open) {
    if (!toggle || !mobile) return;
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    mobile.classList.toggle("is-open", open);
    document.body.style.overflow = open ? "hidden" : "";
  }

  if (toggle && mobile) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      setOpen(!open);
    });
  }

  mobileLinks.forEach(function (a) {
    a.addEventListener("click", function () {
      setOpen(false);
    });
  });

  var form = document.getElementById("form-devis");
  var statusEl = document.getElementById("form-status");

  if (form && statusEl) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = new FormData(form);
      if (!data.get("rgpd")) {
        statusEl.textContent = "Veuillez accepter la politique de confidentialité pour envoyer le message.";
        return;
      }
      var emailTo = form.getAttribute("data-email") || "renardkovou@icloud.com";
      var nom = data.get("nom") || "";
      var tel = data.get("tel") || "";
      var email = data.get("email") || "";
      var service = data.get("service") || "";
      var message = data.get("message") || "";
      var subject = encodeURIComponent("Demande de devis — RK Rénovation");
      var body = encodeURIComponent(
        "Nom : " + nom + "\nTéléphone : " + tel + "\nE-mail : " + email + "\nService : " + service + "\n\nMessage :\n" + message + "\n",
      );
      statusEl.textContent = "Ouverture de votre messagerie…";
      window.location.href = "mailto:" + emailTo + "?subject=" + subject + "&body=" + body;
    });
  }
})();
