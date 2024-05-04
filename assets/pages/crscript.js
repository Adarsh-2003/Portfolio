var blogs = document.querySelector('.blogs');
var poems = document.querySelector('.poems');
var quotes = document.querySelector('.quotes');

var blogsContent = document.querySelector('.blogsContent');
var poemsContent = document.querySelector('.poemsContent');
var quotesContent = document.querySelector('.quotesContent');


function poemClick(){
    poems.style.color= '#6D57E0';
    blogs.style.color= 'white';
    quotes.style.color= 'white';

    blogsContent.style.display= 'none';
    // poemsContent.style.display= 'block';
    poemsContent.classList.remove("hidden");
    quotesContent.style.display= 'none';
    setTimeout(function() {
        AOS.init({
            offset: 300,
            duration: 1000,
        });
    }, 100);
    AOS.refresh();
}

function blogClick(){
    poems.style.color= 'white';
    blogs.style.color= '#6D57E0';
    quotes.style.color= 'white';

    blogsContent.style.display= 'flex';
    // poemsContent.style.display= 'none';
    poemsContent.classList.add("hidden");
    quotesContent.style.display= 'none';
}

function quoteClick(){
    poems.style.color= 'white';
    blogs.style.color= 'white';
    quotes.style.color= '#6D57E0';

    blogsContent.style.display= 'none';
    // poemsContent.style.display= 'none';
    poemsContent.classList.add("hidden");
    quotesContent.style.display= 'flex';
}