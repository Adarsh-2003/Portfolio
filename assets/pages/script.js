document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("loading-logo").style.display = "block";
  setTimeout(function() {
      document.getElementById("loading-logo").style.display = "none";
      document.getElementById("content").classList.remove("hidden");
  }, 1800);
  });

document.getElementById('currentYear').textContent = new Date().getFullYear();

function cb(response) {
  document.getElementById('visits').innerText = response.value;
}

function showSideBar() {
    const mobileBar = document.querySelector('.mob-nav-popup');
    const allContent = document.querySelector('.main-container');
    allContent.style.display = 'none';
    mobileBar.style.display="block"
}

function closeSideBar() {
    const allContent = document.querySelector('.main-container');
    allContent.style.display = 'block';
    const mobileBar = document.querySelector('.mob-nav-popup');
    mobileBar.style.display="none"
}

function qualClick(){
    const qualBody = document.querySelector('.qual-body');
    const qualText = document.querySelector('.qual');
    const expText = document.querySelector('.exp');
    const expBody = document.querySelector('.exp-body');
    const qualIcon = document.querySelector('.qualcolor');
    const expIcon = document.querySelector('.expcolor');


    qualIcon.style.color= '#6D57E0';
    expIcon.style.color= 'white';
    qualText.style.color= '#6D57E0';
    expText.style.color= 'white';

    expBody.style.display= 'none';
    qualBody.style.display= 'block';

  setTimeout(() => {
    AOS.refresh();
  }, 100);

}

function expClick(){
    const qualBody = document.querySelector('.qual-body');
    const expBody = document.querySelector('.exp-body');
    const qualText = document.querySelector('.qual');
    const qualIcon = document.querySelector('.qualcolor');
    const expText = document.querySelector('.exp');
    const expIcon = document.querySelector('.expcolor');

    qualBody.style.display= 'none';
    expBody.style.display= 'block';

    qualIcon.style.color= 'white';
    expIcon.style.color= '#6D57E0';
    qualText.style.color= 'white';
    expText.style.color= '#6D57E0';

    setTimeout(() => {
    AOS.refresh();
  }, 100);
}



// Typing Animation using Typed JS
var typed = new Typed(".type", {
    strings: [ "Data Analysis", "DevOps", "Data Engineering" ],
    smartBackspace: true,
    startDelay: 1000,
    typeSpeed: 50,
    backDelay: 1000,
    backSpeed: 60,
    loop: true,
  });

// Formspree code
const form = document.getElementById("contact-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("alert");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      status.innerHTML = "Your message has been sent.";
      document.querySelector(".alert_style").style.display = "block";

      // hide alert after 3 seconds
      setTimeout(function () {
        document.querySelector(".alert_style").style.display = "none";
      }, 4000);
      form.reset();
    })
    .catch((error) => {
      status.innerHTML =
        "Oops! There was a problem delivering your message, please contact via other means.";
      document.querySelector(".alert_style").style.display = "block";

      // hide alert after 3 seconds
      setTimeout(function () {
        document.querySelector(".alert_style").style.display = "none";
      }, 4000);
    });
}
form.addEventListener("submit", handleSubmit);

// greeting logic

const currentTime = new Date().getHours();
const greet = document.getElementById("greet");

if (currentTime >= 5 && currentTime < 12) {
  greet.innerText = "Good morning !";
} else if (currentTime >= 12 && currentTime < 18) {
  greet.innerText = "Good afternoon !";
} else {
  greet.innerText = "Good evening !";
}       

// browser detection
if (navigator.brave) { 
  document.querySelector('.hitcounter').style.display = 'none';
}

if (navigator.userAgent.indexOf('Firefox') > -1) {
document.querySelector('.hitcounter').style.display = 'none';
}

const img = document.getElementById('hitcounter-img');
const countercontainer = document.getElementById('hitcounter');

img.onerror = function () {
  countercontainer.style.display= 'none';
  console.log("is an error");
  
};
