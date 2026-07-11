(function () {
  "use strict";

  window.Portfolio = window.Portfolio || {};

  function getFieldValue(form, fieldName) {
    const field = form.querySelector('[name="' + fieldName + '"]');
    return field ? field.value.trim() : "";
  }

  function showStatus(statusEl, type, message) {
    if (!statusEl) return;
    statusEl.hidden = false;
    statusEl.className = "contact-form-status contact-form-status--" + type;
    statusEl.textContent = message;
  }

  function clearStatus(statusEl) {
    if (!statusEl) return;
    statusEl.hidden = true;
    statusEl.className = "contact-form-status";
    statusEl.textContent = "";
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

  function ensureHiddenIframe() {
    const iframeName = "contact-form-iframe";
    let iframe = document.getElementById(iframeName);

    if (!iframe) {
      iframe = document.createElement("iframe");
      iframe.id = iframeName;
      iframe.name = iframeName;
      iframe.title = "Form submission";
      iframe.setAttribute("aria-hidden", "true");
      iframe.tabIndex = -1;
      iframe.style.cssText =
        "position:absolute;width:0;height:0;border:0;visibility:hidden;";
      iframe.src = "about:blank";
      document.body.appendChild(iframe);
    }

    return iframe;
  }

  function ensureHelperForm() {
    const helperId = "contact-form-helper";
    let helperForm = document.getElementById(helperId);

    if (!helperForm) {
      helperForm = document.createElement("form");
      helperForm.id = helperId;
      helperForm.style.display = "none";
      helperForm.setAttribute("aria-hidden", "true");
      document.body.appendChild(helperForm);
    }

    return helperForm;
  }

  /**
   * Google Apps Script web apps return a 302 redirect on POST, which breaks
   * fetch() + response.json(). A native form POST into a hidden iframe avoids that.
   */
  function submitToGoogleSheet(scriptUrl, payload) {
    return new Promise(function (resolve, reject) {
      const iframe = ensureHiddenIframe();
      const helperForm = ensureHelperForm();
      const iframeName = iframe.name;

      helperForm.innerHTML = "";
      helperForm.action = scriptUrl;
      helperForm.method = "POST";
      helperForm.target = iframeName;
      helperForm.acceptCharset = "UTF-8";

      payload.forEach(function (value, key) {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = value;
        helperForm.appendChild(input);
      });

      let settled = false;
      let waitingForResponse = false;

      function finish(ok) {
        if (settled) return;
        settled = true;
        window.clearTimeout(timeoutId);
        iframe.removeEventListener("load", onLoad);
        if (ok) resolve();
        else reject(new Error("Submission failed"));
      }

      function onLoad() {
        if (!waitingForResponse) return;
        finish(true);
      }

      const timeoutId = window.setTimeout(function () {
        if (!waitingForResponse) return;
        finish(true);
      }, 10000);

      iframe.addEventListener("load", onLoad);
      waitingForResponse = true;
      helperForm.submit();
    });
  }

  function initContactForm() {
    const form = document.querySelector("[data-contact-form]");
    if (!form) return;

    const statusEl = form.querySelector("[data-form-status]");
    const submitBtn = form.querySelector(".contact-submit");
    const scriptUrl = (form.dataset.scriptUrl || "").trim();

    form.addEventListener("submit", async function (event) {
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

      const payload = new URLSearchParams();
      payload.append("name", getFieldValue(form, "name"));
      payload.append("email", getFieldValue(form, "email"));
      payload.append("subject", getFieldValue(form, "subject"));
      payload.append("message", getFieldValue(form, "message"));

      try {
        await submitToGoogleSheet(scriptUrl, payload);
        showStatus(statusEl, "success", "Message sent — I'll get back to you soon.");
        form.reset();
      } catch (_err) {
        showStatus(
          statusEl,
          "error",
          "Message not sent. Please try again or email me directly."
        );
      } finally {
        setSubmitLoading(submitBtn, false, originalBtnHtml);
      }
    });
  }

  window.Portfolio.initContactForm = initContactForm;
})();
