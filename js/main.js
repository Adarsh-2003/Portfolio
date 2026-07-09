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

        <div class="nav-mobile-drawer" id="nav-drawer" data-nav-menu aria-hidden="true" data-open="false">
          <div class="nav-drawer-inner">
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

    footerEl.innerHTML = `
      <div class="container footer-inner">
        <div class="footer-brand">
          <div class="footer-title">ADARSH GUPTA</div>
          <div class="footer-desc">
            Cloud & DevOps Engineer<br />
            Building systems that scale.
          </div>
          <div class="social-row" aria-label="Social links">
            <!-- TODO: replace href with your real GitHub URL -->
            <a class="icon-btn" href="#" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M15 22v-4a4 4 0 0 0-1-3v0a4 4 0 0 0 3-3c0-1.5-.5-2.5-1-3a3 3 0 0 0-2-.5 3 3 0 0 0-2 .5 3 3 0 0 0-2-.5 3 3 0 0 0-2 .5c-.5.5-1 1.5-1 3a4 4 0 0 0 3 3v0a4 4 0 0 0-1 3v4"/>
              </svg>
            </a>
            <!-- TODO: replace href with your real LinkedIn URL -->
            <a class="icon-btn" href="#" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6Z"/>
                <path d="M2 9h4v12H2z"/>
                <path d="M4 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
              </svg>
            </a>
            <!-- TODO: replace href with your real Medium URL -->
            <a class="icon-btn" href="#" aria-label="Medium">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M4 7l4 10 4-10 4 10 4-10"/>
                <path d="M2 5h20"/>
              </svg>
            </a>
            <!-- TODO: replace href with your real email link (if different from mailto below) -->
            <a class="icon-btn" href="#" aria-label="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M4 4h16v16H4z" opacity="0"/>
                <path d="M4 6h16v12H4z"/>
                <path d="M4 7l8 6 8-6"/>
              </svg>
            </a>
          </div>
        </div>

        <div class="footer-links">
          <div class="footer-title">Navigation</div>
          <div class="footer-links">
            <a class="footer-link link" href="index.html">Home</a>
            <a class="footer-link link" href="work.html">Work</a>
            <a class="footer-link link" href="about.html">About</a>
            <a class="footer-link link" href="archive.html">Archive</a>
            <a class="footer-link link" href="contact.html">Contact</a>
          </div>
        </div>

        <div class="footer-links">
          <div class="footer-title">Work</div>
          <div class="footer-links">
            <a class="footer-link link" href="work.html">Projects</a>
            <a class="footer-link link" href="work.html">Case Studies</a>
            <a class="footer-link link" href="work.html">Tech Stack</a>
            <a class="footer-link link" href="work.html">Experience</a>
          </div>
        </div>

        <div class="footer-links">
          <div class="footer-title">Resources</div>
          <div class="footer-links">
            <a class="footer-link link" href="archive.html">Blog</a>
            <a class="footer-link link" href="archive.html">Poems</a>
            <a class="footer-link link" href="archive.html">Photography</a>
            <a class="footer-link link" href="archive.html">Notes</a>
          </div>
        </div>

        <div class="footer-links">
          <div class="footer-title">Let's Connect</div>
          <div class="footer-links">
            <a class="footer-link link" href="mailto:adarshgupta.work@gmail.com">adarshgupta.work@gmail.com</a>
            <div class="footer-link" style="color: var(--text-1);">Pune, India</div>
          </div>
        </div>
      </div>

      <div class="container footer-bottom">
        <span>© 2025 Adarsh Gupta. All rights reserved.</span>
        <span class="footer-tagline">
          Built with discipline. Driven by curiosity.
          <span class="footer-accent-dot" aria-hidden="true"></span>
        </span>
      </div>
    `;
  }

  function safeInit() {
    const initNavbar = window.Portfolio.initNavbar;
    const initAnimations = window.Portfolio.initAnimations;
    const initArchive = window.Portfolio.initArchive;

    ensureNavbar(document.querySelector("#site-navbar"));
    ensureFooter(document.querySelector("#site-footer"));

    if (typeof initNavbar === "function") initNavbar();
    if (typeof initAnimations === "function") initAnimations();
    if (typeof initArchive === "function") initArchive();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", safeInit, { once: true });
  } else {
    safeInit();
  }
})();

