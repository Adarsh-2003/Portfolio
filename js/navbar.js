(function () {
  "use strict";

  window.Portfolio = window.Portfolio || {};

  const SELECTORS = {
    navbar: "#site-navbar",
    toggle: "[data-nav-toggle]",
    menu: "[data-nav-menu]",
  };

  function setupMobile(navbarEl) {
    const toggleBtn = navbarEl.querySelector(SELECTORS.toggle);
    const menuEl = navbarEl.querySelector(SELECTORS.menu);
    if (!toggleBtn || !menuEl) return;

    function setExpanded(expanded) {
      toggleBtn.setAttribute("aria-expanded", expanded ? "true" : "false");
      menuEl.dataset.open = expanded ? "true" : "false";
      menuEl.setAttribute("aria-hidden", expanded ? "false" : "true");

      const backdrop = document.querySelector("[data-nav-backdrop]");
      if (backdrop) {
        backdrop.dataset.open = expanded ? "true" : "false";
        backdrop.setAttribute("aria-hidden", expanded ? "false" : "true");
      }

      document.body.classList.toggle("nav-menu-open", expanded);
    }

    toggleBtn.addEventListener("click", () => {
      const expanded = toggleBtn.getAttribute("aria-expanded") === "true";
      setExpanded(!expanded);
    });

    // Close menu when a link is clicked.
    menuEl.addEventListener("click", (e) => {
      const target = e.target;
      if (!(target instanceof Element)) return;
      const link = target.closest("a");
      if (!link) return;
      setExpanded(false);
    });

    // Start closed.
    setExpanded(false);
  }

  function setupScroll(navbarEl) {
    let lastY = window.scrollY || 0;
    let ticking = false;

    function applyVisibility({ hidden, scrolled }) {
      navbarEl.dataset.hidden = hidden ? "true" : "false";
      navbarEl.dataset.scrolled = scrolled ? "true" : "false";
      navbarEl.classList.toggle("is-hidden", hidden);
      navbarEl.classList.toggle("is-scrolled", scrolled);
    }

    function update() {
      ticking = false;
      const y = window.scrollY || 0;

      const scrolled = y > 2;
      const scrollingDown = y > lastY + 2;
      const scrollingUp = y < lastY - 2;

      // Hide on deliberate scroll down, show earlier on scroll up.
      const hidden = scrollingDown && y > 44 && scrollingUp === false;
      applyVisibility({ hidden, scrolled });

      lastY = y;
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    }

    applyVisibility({ hidden: false, scrolled: false });
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  window.Portfolio.initNavbar = function () {
    const navbarEl = document.querySelector(SELECTORS.navbar);
    if (!navbarEl) return;

    setupScroll(navbarEl);
    setupMobile(navbarEl);
  };
})();

