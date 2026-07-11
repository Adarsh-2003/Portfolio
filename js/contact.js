(function () {
  "use strict";

  window.Portfolio = window.Portfolio || {};

  function showStatus(statusEl, type, message) {
    if (!statusEl) return;

    const iconName = type === "success" ? "check" : "alert-circle";
    statusEl.hidden = false;
    statusEl.className = "contact-form-status contact-form-status--" + type;
    statusEl.innerHTML =
      '<i data-lucide="' +
      iconName +
      '" class="contact-form-status-icon" aria-hidden="true"></i>' +
      "<span>" +
      message +
      "</span>";

    if (typeof window.Portfolio.initIcons === "function") {
      window.Portfolio.initIcons();
    }
  }

  function clearStatus(statusEl) {
    if (!statusEl) return;
    statusEl.hidden = true;
    statusEl.className = "contact-form-status";
    statusEl.innerHTML = "";
  }

  function setSubmitLoading(button, isLoading, originalHtml) {
    if (!button) return;
    button.disabled = isLoading;
    button.setAttribute("aria-busy", isLoading ? "true" : "false");

    if (isLoading) {
      button.innerHTML =
        'SENDING<span class="contact-submit-spinner" aria-hidden="true"></span>';
      return;
    }

    if (originalHtml) {
      button.innerHTML = originalHtml;
      if (typeof window.Portfolio.initIcons === "function") {
        window.Portfolio.initIcons();
      }
    }
  }

  function initContactForm() {
    const form = document.forms["form-to-google-sheet"];
    if (!form) return;

    const statusEl = form.querySelector("[data-form-status]");
    const submitBtn = form.querySelector(".contact-submit");
    const scriptUrl = (form.dataset.scriptUrl || "").trim();

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      clearStatus(statusEl);

      if (!form.reportValidity()) return;

      if (!scriptUrl) {
        showStatus(
          statusEl,
          "error",
          "Form is not connected yet. Add your Google Script URL to contact.html."
        );
        return;
      }

      const originalBtnHtml = submitBtn ? submitBtn.innerHTML : "";
      setSubmitLoading(submitBtn, true);

      fetch(scriptUrl, { method: "POST", body: new FormData(form) })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          if (data && data.result === "success") {
            showStatus(
              statusEl,
              "success",
              "Message sent — I'll get back to you soon."
            );
            form.reset();
          } else {
            showStatus(
              statusEl,
              "error",
              "Message not delivered. Please try again or email me directly."
            );
          }
        })
        .catch(function () {
          showStatus(
            statusEl,
            "error",
            "Message not delivered. Please try again or email me directly."
          );
        })
        .finally(function () {
          setSubmitLoading(submitBtn, false, originalBtnHtml);
        });
    });
  }

  window.Portfolio.initContactForm = initContactForm;
})();
