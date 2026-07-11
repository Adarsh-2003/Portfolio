(function () {
  "use strict";

  window.Portfolio = window.Portfolio || {};

  window.Portfolio.SOCIAL_LINKS = {
    linkedin: "https://www.linkedin.com/in/adarshgupta2003/",
    twitter: "https://twitter.com/adarshgupta_x",
    github: "https://github.com/adarsh-2003",
    medium: "https://medium.com/@gupta-adarsh",
    email: "mailto:adarshgupta.contact@gmail.com",
    instagram: "https://www.instagram.com/adarsh.guptaaaa/",
    reddit: "https://www.reddit.com/user/data-guy-x/",
    youtube: "https://www.youtube.com/@adarshgupta9776",
  };

  const ARIA_LABEL_MAP = {
    GitHub: "github",
    LinkedIn: "linkedin",
    Twitter: "twitter",
    Medium: "medium",
    Email: "email",
    Youtube: "youtube",
    Instagram: "instagram",
    Reddit: "reddit",
  };

  function applySocialLinks(root) {
    const links = window.Portfolio.SOCIAL_LINKS || {};
    const scope = root || document;

    scope.querySelectorAll("a[data-social]").forEach(function (anchor) {
      const key = anchor.getAttribute("data-social");
      const href = links[key];
      if (!href) return;

      anchor.href = href;
      if (key === "email") {
        anchor.removeAttribute("target");
        anchor.removeAttribute("rel");
      } else {
        anchor.target = "_blank";
        anchor.rel = "noopener noreferrer";
      }
    });

    scope.querySelectorAll("a[aria-label]").forEach(function (anchor) {
      const key = ARIA_LABEL_MAP[anchor.getAttribute("aria-label")];
      const href = key && links[key];
      if (!href) return;

      anchor.href = href;
      if (key === "email") {
        anchor.removeAttribute("target");
        anchor.removeAttribute("rel");
      } else {
        anchor.target = "_blank";
        anchor.rel = "noopener noreferrer";
      }
    });

    scope.querySelectorAll('a[href^="mailto:adarshgupta.contact@gmail.com"]').forEach(function (anchor) {
      anchor.href = links.email || anchor.href;
    });
  }

  window.Portfolio.applySocialLinks = applySocialLinks;
})();
