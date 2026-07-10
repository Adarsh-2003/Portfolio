(function () {
  "use strict";

  window.Portfolio = window.Portfolio || {};

  window.Portfolio.initIcons = function (root) {
    if (typeof lucide === "undefined" || typeof lucide.createIcons !== "function") return;
    lucide.createIcons({
      attrs: {
        "stroke-width": 1.75,
        "aria-hidden": "true",
      },
      nameAttr: "data-lucide",
      root: root || document,
    });
  };
})();
