(function () {
  "use strict";

  window.Portfolio = window.Portfolio || {};

  function getCurrentPageKey() {
    const classes = document.body.classList;
    if (classes.contains("page--home")) return "home";
    if (classes.contains("page--work")) return "work";
    if (classes.contains("page--about")) return "about";
    if (classes.contains("page--archive")) return "archive";
    if (classes.contains("page--contact")) return "contact";
    return "home";
  }

  function ensureNavbar(navbarEl) {
    if (!navbarEl || navbarEl.childElementCount > 0) return;

    const pageKey = getCurrentPageKey();
    const isActive = (key) => key === pageKey;

    navbarEl.innerHTML = `
      <div class="nav-glass nav-inner container">
        <a class="nav-brand" href="index.html" aria-label="Adarsh Gupta home">ADARSH&nbsp;GUPTA</a>

        <nav class="nav-menu nav-menu--desktop" aria-label="Primary navigation">
          <a class="nav-link ${isActive("home") ? "is-active" : ""}" href="index.html">HOME</a>
          <a class="nav-link ${isActive("work") ? "is-active" : ""}" href="work.html">WORK</a>
          <a class="nav-link ${isActive("about") ? "is-active" : ""}" href="about.html">ABOUT</a>
          <a class="nav-link ${isActive("archive") ? "is-active" : ""}" href="archive.html">ARCHIVE</a>
          <a class="nav-link ${isActive("contact") ? "is-active" : ""}" href="contact.html">CONTACT</a>
        </nav>

        <button class="nav-toggle" type="button" data-nav-toggle aria-label="Open menu" aria-expanded="false">
          <span class="hamburger" aria-hidden="true">
            <span></span><span></span><span></span>
          </span>
        </button>

        <div class="nav-mobile-backdrop" data-nav-backdrop data-open="false" aria-hidden="true"></div>

        <div class="nav-mobile-drawer" id="nav-drawer" data-nav-menu aria-hidden="true" data-open="false">
          <div class="nav-drawer-inner">
            <div class="nav-drawer-header">
              <button class="nav-drawer-close" type="button" data-nav-close aria-label="Close menu"></button>
            </div>
            <div class="nav-drawer-links" role="menu" aria-label="Mobile navigation">
              <a class="nav-drawer-link" href="index.html" role="menuitem">
                <span>HOME</span>
                <span class="nav-drawer-dot ${isActive("home") ? "is-active" : ""}" aria-hidden="true"></span>
              </a>
              <a class="nav-drawer-link" href="work.html" role="menuitem">
                <span>WORK</span>
                <span class="nav-drawer-dot ${isActive("work") ? "is-active" : ""}" aria-hidden="true"></span>
              </a>
              <a class="nav-drawer-link" href="about.html" role="menuitem">
                <span>ABOUT</span>
                <span class="nav-drawer-dot ${isActive("about") ? "is-active" : ""}" aria-hidden="true"></span>
              </a>
              <a class="nav-drawer-link" href="archive.html" role="menuitem">
                <span>ARCHIVE</span>
                <span class="nav-drawer-dot ${isActive("archive") ? "is-active" : ""}" aria-hidden="true"></span>
              </a>
              <a class="nav-drawer-link" href="contact.html" role="menuitem">
                <span>CONTACT</span>
                <span class="nav-drawer-dot ${isActive("contact") ? "is-active" : ""}" aria-hidden="true"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function ensureFooter(footerEl) {
    if (!footerEl || footerEl.childElementCount > 0) return;

    const links = (window.Portfolio && window.Portfolio.SOCIAL_LINKS) || {};
    const github = links.github || "#";
    const linkedin = links.linkedin || "#";
    const email = links.email || "mailto:adarshgupta.contact@gmail.com";
    const year = new Date().getFullYear();

    footerEl.innerHTML = `
      <div class="container">
        <div class="footer-bar">
          <div class="footer-tagline">
            <span class="footer-dot" aria-hidden="true"></span>
            <span>Code. Cloud. Curiosity.</span>
          </div>

          <div class="footer-social" aria-label="Social links">
            <a class="footer-social-link" href="${github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 24" aria-hidden="true">
                <path d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.305.763-1.605-2.665-.303-5.467-1.332-5.467-5.93 0-1.31.467-2.382 1.235-3.222-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.018.005 2.044.137 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.233 1.913 1.233 3.222 0 4.61-2.807 5.624-5.48 5.921.431.372.816 1.103.816 2.222 0 1.606-.015 2.902-.015 3.297 0 .321.216.694.825.576C20.565 22.092 24 17.596 24 12.297 24 5.67 18.627.297 12 .297z"/>
              </svg>
            </a>
            <span class="footer-divider" aria-hidden="true"></span>
            <a class="footer-social-link" href="${linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.85-3.037-1.852 0-2.135 1.445-2.135 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.604 0 4.268 2.372 4.268 5.455v6.286zM5.337 7.433a2.063 2.063 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126zM7.119 20.452H3.555V9h3.564v11.452z"/>
              </svg>
            </a>
            <span class="footer-divider" aria-hidden="true"></span>
            <a class="footer-social-link footer-social-link--stroke" href="${email}" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2"/>
                <path d="M3 7l9 6 9-6"/>
              </svg>
            </a>
          </div>

          <div class="footer-copy">© ${year} Adarsh Gupta</div>
        </div>
      </div>
    `;
  }

  function initWorkCounts() {
    if (!document.body.classList.contains("page--work")) return;

    const projectCount = document.querySelectorAll(".work-project-card").length;
    const certCount = document.querySelectorAll(".work-cert-card").length;

    const projectEl = document.querySelector("[data-work-project-count]");
    if (projectEl) {
      projectEl.textContent = `${projectCount} PROJECT${projectCount === 1 ? "" : "S"}`;
    }

    const certEl = document.querySelector("[data-work-cert-count]");
    if (certEl) {
      certEl.textContent = `${certCount} Certification${certCount === 1 ? "" : "s"} Earned`;
    }
  }

  function safeInit() {
    const initNavbar = window.Portfolio.initNavbar;
    const initAnimations = window.Portfolio.initAnimations;
    const initArchive = window.Portfolio.initArchive;
    const initContactForm = window.Portfolio.initContactForm;

    ensureNavbar(document.querySelector("#site-navbar"));
    ensureFooter(document.querySelector("#site-footer"));

    if (typeof window.Portfolio.applySocialLinks === "function") {
      window.Portfolio.applySocialLinks();
    }

    if (typeof initNavbar === "function") initNavbar();
    if (typeof initAnimations === "function") initAnimations();
    if (typeof initArchive === "function") initArchive();
    if (typeof initContactForm === "function") initContactForm();
    initWorkCounts();

    if (typeof window.Portfolio.initIcons === "function") {
      window.Portfolio.initIcons();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", safeInit, { once: true });
  } else {
    safeInit();
  }
})();

