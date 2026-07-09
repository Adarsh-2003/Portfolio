(function () {
  "use strict";

  window.Portfolio = window.Portfolio || {};

  const POEMS = [
    {
      id: "life",
      title: "Life",
      tag: "Life",
      date: "May 18, 2025",
      excerpt:
        "Live your life\nWho knows how long you'd survive\n\nGet outta your mobile phone\nStep out and dont be lone",
      body: `Live your life
Who knows how long you'd survive

Get outta your mobile phone
Step out and dont be lone

You could find joy in smallest thing
Can dream to fly even if you dont have wings

Step out an do explore
Try new things more and more

Collect memories and keep'em storing
Else life could seem to you boring

One day you'll leave this world behind
There's meaning in life you need to find.

~ Adarsh Gupta`,
    },
    {
      id: "deeds",
      title: "Deeds",
      tag: "Society",
      date: "Mar 12, 2025",
      excerpt:
        "You know my area\nYou know my deeds\nIts was where i was bowed as seed\nPeoples struggling to fulfil there needs",
      body: `You know my area
You know my deeds
Its was where i was bowed as seed
Peoples struggling to fulfil there needs
Sweat and Eat and a family to feed

Some get themselves down by smokes and weeds
Knowingly unknowing to what consequences it leads

Days and nights here passes by
Some push there limits where some enjoy

This is life... Mere bhai
Live to the fullest dont be shy

~ Adarsh Gupta`,
    },
    {
      id: "soldier",
      title: "Soldier",
      tag: "Patriotism",
      date: "Jan 26, 2025",
      excerpt:
        "For the people and for country\nThey fight near our country's boundry\n\nWith guns in their hand\nDay and night thet stand",
      body: `For the people and for country
They fight near our country's boundry

With guns in their hand
Day and night thet stand

In the winters or in summers
They protect us from terrorist commers

Six days or Seven night
And are always ready to fight

They maintain our nation's peace
For our motherland to death they kiss.

~ Adarsh Gupta`,
    },
    {
      id: "the-tunnel",
      title: "The tunnel",
      tag: "Reflection",
      date: "Nov 8, 2024",
      excerpt:
        "I went inside a tunnel filled with dark\nHoping i would see light at the end\n\nThe journey was long i was searching for a spark",
      body: `I went inside a tunnel filled with dark
Hoping i would see light at the end

The journey was long i was searching for a spark
Searching for a friend who could comprehend

In the midst of tunnel, dark all the way
Tired of the hope i couldn't hold my pray

I realised soon i have to mould
I knew , it could make me cold

I decided to blend , blend with the dark
The tunnel was about to end and so was my arc

The light stinged , it stinged my eyes
Its wasn't about me its 'bout journey i emphasize

Now it doesn't matter if i'm at the terminal
Coz now i'm the part of tunnel

~ Adarsh Gupta`,
    },
    {
      id: "hows",
      title: "How's",
      tag: "Science",
      date: "Aug 22, 2024",
      excerpt:
        "How every matter has its antimatter\nHow sky appears blue coz light scatter\n\nHow every positive has negative",
      body: `How every matter has its antimatter
How sky appears blue coz light scatter

How every positive has negative
How under different frame of reference time is relative

And
For every right there's wrong
For every cause there's reason along

For every birth there's death
And for love there's hate

For every happiness there's sadness And for brightness there's sadness

How everything has its opposite How complex this universe is yet so composite

~ Adarsh Gupta`,
    },
  ];

  const BLOGS = [
    {
      title: "Building Reliable CI/CD Pipelines from Scratch",
      category: "DevOps",
      readTime: "6 min read",
      date: "Apr 14, 2025",
      excerpt: "A practical walkthrough of designing automated test, build, and deploy workflows for production-grade applications.",
      image: "assets/archive/blog-devops.svg",
      url: "https://medium.com/",
    },
    {
      title: "AWS Architecture Patterns for Scalable Systems",
      category: "Cloud",
      readTime: "8 min read",
      date: "Feb 3, 2025",
      excerpt: "Exploring fault-tolerant design, cost optimization, and service selection when building on AWS.",
      image: "assets/archive/blog-cloud.svg",
      url: "https://medium.com/",
    },
    {
      title: "From Raw Data to Insights with Modern ETL",
      category: "Data",
      readTime: "5 min read",
      date: "Dec 18, 2024",
      excerpt: "How I approach data pipelines, cleaning workflows, and analytics dashboards for real-world problems.",
      image: "assets/archive/blog-data.svg",
      url: "https://medium.com/",
    },
  ];

  const PHOTOS = [
    {
      title: "Milky Way Over Peaks",
      location: "Ladakh, India",
      image: "assets/archive/photo-milkyway.svg",
    },
    {
      title: "Golden Hour Horizon",
      location: "Rajasthan, India",
      image: "assets/archive/photo-sunset.svg",
    },
    {
      title: "Mountain Retreat",
      location: "Himachal Pradesh, India",
      image: "assets/archive/photo-mountain.svg",
    },
    {
      title: "City Lights at Dusk",
      location: "Mumbai, India",
      image: "assets/archive/photo-city.svg",
    },
    {
      title: "Coastal Calm",
      location: "Goa, India",
      image: "assets/archive/photo-beach.svg",
    },
    {
      title: "Night Sky Reflection",
      location: "Pune, India",
      image: "assets/archive/photo-night.svg",
    },
  ];

  const VIEWS = ["landing", "poems", "blogs", "photos"];

  function $(sel, root) {
    return (root || document).querySelector(sel);
  }

  function $$(sel, root) {
    return Array.from((root || document).querySelectorAll(sel));
  }

  function setView(view) {
    const app = $("#archive-app");
    const valid = VIEWS.includes(view);
    const target = valid ? view : "landing";

    closePoemPopup();
    closePhotoLightbox();

    if (app) {
      $$(".archive-panel", app).forEach((panel) => {
        panel.hidden = panel.dataset.view !== target;
      });
    }

    $$("[data-archive-nav]").forEach((link) => {
      link.classList.toggle("is-active", link.dataset.archiveNav === target);
    });

    const brand = $(".archive-sidebar__brand");
    if (brand) {
      brand.classList.toggle("is-active", target === "landing");
    }

    document.body.classList.toggle("archive--subview", target !== "landing");

    if (valid && target !== "landing") {
      history.replaceState(null, "", `#${target}`);
    } else if (target === "landing") {
      history.replaceState(null, "", window.location.pathname);
    }
  }

  function openPoemPopup(poem) {
    const popup = $("#poem-popup");
    const backdrop = $("#archive-backdrop");
    if (!popup || !poem) return;

    $("[data-poem-date]", popup).textContent = poem.date;
    $("[data-poem-tag]", popup).textContent = poem.tag;
    $("[data-poem-title]", popup).textContent = poem.title;
    $("[data-poem-body]", popup).textContent = poem.body;

    popup.hidden = false;
    backdrop.hidden = false;
    popup.dataset.open = "true";
    document.body.classList.add("archive--modal-open");
  }

  function closePoemPopup() {
    const popup = $("#poem-popup");
    const backdrop = $("#archive-backdrop");
    if (!popup) return;
    popup.hidden = true;
    popup.dataset.open = "false";
    if (!$("#photo-lightbox") || $("#photo-lightbox").hidden) {
      backdrop.hidden = true;
      document.body.classList.remove("archive--modal-open");
    }
  }

  let photoIndex = 0;

  function openPhotoLightbox(index) {
    const lightbox = $("#photo-lightbox");
    const backdrop = $("#archive-backdrop");
    if (!lightbox || !PHOTOS[index]) return;

    photoIndex = index;
    renderPhotoLightbox();

    lightbox.hidden = false;
    backdrop.hidden = false;
    lightbox.dataset.open = "true";
    document.body.classList.add("archive--modal-open");
  }

  function renderPhotoLightbox() {
    const photo = PHOTOS[photoIndex];
    const lightbox = $("#photo-lightbox");
    if (!photo || !lightbox) return;

    const img = $("[data-photo-lightbox-img]", lightbox);
    const title = $("[data-photo-lightbox-title]", lightbox);
    const location = $("[data-photo-lightbox-location]", lightbox);
    const counter = $("[data-photo-lightbox-counter]", lightbox);

    if (img) {
      img.src = photo.image;
      img.alt = photo.title;
    }
    if (title) title.textContent = photo.title;
    if (location) location.textContent = photo.location;
    if (counter) counter.textContent = `${photoIndex + 1} / ${PHOTOS.length}`;
  }

  function closePhotoLightbox() {
    const lightbox = $("#photo-lightbox");
    const backdrop = $("#archive-backdrop");
    if (!lightbox) return;
    lightbox.hidden = true;
    lightbox.dataset.open = "false";
    if (!$("#poem-popup") || $("#poem-popup").hidden) {
      backdrop.hidden = true;
      document.body.classList.remove("archive--modal-open");
    }
  }

  function navigatePhoto(dir) {
    photoIndex = (photoIndex + dir + PHOTOS.length) % PHOTOS.length;
    renderPhotoLightbox();
  }

  function renderPoemCards() {
    const grid = $("#poems-grid");
    if (!grid) return;

    grid.innerHTML = POEMS.map(
      (poem) => `
      <button class="archive-poem-card" type="button" data-poem-id="${poem.id}" aria-label="Read poem: ${poem.title}">
        <span class="archive-poem-card__bookmark" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
          </svg>
        </span>
        <h3 class="archive-poem-card__title">${poem.title}</h3>
        <p class="archive-poem-card__excerpt">${poem.excerpt.replace(/\n/g, "<br>")}</p>
        <div class="archive-poem-card__meta">
          <time>${poem.date}</time>
          <span class="archive-poem-card__tag">${poem.tag}</span>
        </div>
      </button>`
    ).join("");

    grid.querySelectorAll("[data-poem-id]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const poem = POEMS.find((p) => p.id === btn.dataset.poemId);
        openPoemPopup(poem);
      });
    });
  }

  function renderBlogCards() {
    const grid = $("#blogs-grid");
    if (!grid) return;

    grid.innerHTML = BLOGS.map(
      (blog) => `
      <a class="archive-blog-card" href="${blog.url}" target="_blank" rel="noopener noreferrer">
        <img class="archive-blog-card__image" src="${blog.image}" alt="" width="400" height="220" loading="lazy" />
        <div class="archive-blog-card__body">
          <div class="archive-blog-card__meta">
            <span class="archive-blog-card__category">${blog.category}</span>
            <span class="archive-blog-card__read">${blog.readTime}</span>
          </div>
          <h3 class="archive-blog-card__title">${blog.title}</h3>
          <p class="archive-blog-card__excerpt">${blog.excerpt}</p>
          <div class="archive-blog-card__footer">
            <time>${blog.date}</time>
            <span class="archive-blog-card__external" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <path d="M15 3h6v6"/>
                <path d="M10 14 21 3"/>
              </svg>
            </span>
          </div>
        </div>
      </a>`
    ).join("");
  }

  function renderPhotoCards() {
    const grid = $("#photos-grid");
    if (!grid) return;

    grid.innerHTML = PHOTOS.map(
      (photo, i) => `
      <button class="archive-photo-card" type="button" data-photo-index="${i}" aria-label="View photo: ${photo.title}">
        <img class="archive-photo-card__image" src="${photo.image}" alt="${photo.title}" width="300" height="420" loading="lazy" />
        <div class="archive-photo-card__overlay">
          <h3 class="archive-photo-card__title">${photo.title}</h3>
          <p class="archive-photo-card__location">${photo.location}</p>
        </div>
      </button>`
    ).join("");

    grid.querySelectorAll("[data-photo-index]").forEach((btn) => {
      btn.addEventListener("click", () => {
        openPhotoLightbox(Number(btn.dataset.photoIndex));
      });
    });
  }

  function bindSwordToggle() {
    const btn = $("#archive-sword-btn");
    if (!btn) return;

    btn.addEventListener("click", () => {
      const active = document.body.classList.toggle("archive--sword-cursor");
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
      btn.setAttribute("aria-label", active ? "Put away your sword" : "Get your sword");
    });
  }

  function bindEvents() {
    $$("[data-archive-go]").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        setView(el.dataset.archiveGo);
      });
    });

    $$("[data-archive-nav]").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        setView(el.dataset.archiveNav);
      });
    });

    const poemClose = $("[data-poem-close]");
    if (poemClose) {
      poemClose.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        closePoemPopup();
      });
    }

    const photoClose = $("[data-photo-close]");
    if (photoClose) {
      photoClose.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        closePhotoLightbox();
      });
    }

    const photoPrev = $("[data-photo-prev]");
    const photoNext = $("[data-photo-next]");
    if (photoPrev) photoPrev.addEventListener("click", () => navigatePhoto(-1));
    if (photoNext) photoNext.addEventListener("click", () => navigatePhoto(1));

    const backdrop = $("#archive-backdrop");
    if (backdrop) {
      backdrop.addEventListener("click", () => {
        closePoemPopup();
        closePhotoLightbox();
      });
    }

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closePoemPopup();
        closePhotoLightbox();
      }
      const lightbox = $("#photo-lightbox");
      if (lightbox && !lightbox.hidden) {
        if (e.key === "ArrowLeft") navigatePhoto(-1);
        if (e.key === "ArrowRight") navigatePhoto(1);
      }
    });
  }

  function initFromHash() {
    const hash = window.location.hash.replace("#", "");
    if (VIEWS.includes(hash) && hash !== "landing") {
      setView(hash);
    } else {
      setView("landing");
    }
  }

  window.Portfolio.initArchive = function () {
    renderPoemCards();
    renderBlogCards();
    renderPhotoCards();
    bindEvents();
    bindSwordToggle();
    closePoemPopup();
    closePhotoLightbox();
    initFromHash();
    window.addEventListener("hashchange", initFromHash);
  };
})();
