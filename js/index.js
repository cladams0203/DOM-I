const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);



const nava = document.querySelectorAll('a');

const h1 = document.querySelector('h1');

const button = document.querySelector('button');

const ctaImg = document.querySelector('#cta-img');

const h4 = document.querySelectorAll('.main-content h4');

const text = document.querySelectorAll('.text-content p');

const midImg = document.querySelector('#middle-img');

const contactH4 = document.querySelector('.contact h4');

const contactText = document.querySelectorAll('.contact p');

const footer = document.querySelector('footer p');

const h1br = document.createElement('br');

const h1br2 = document.createElement('br');

const h1text = siteContent['cta']['h1'].split(' ');

nava[0].textContent = siteContent["nav"]["nav-item-1"];
nava[1].textContent = siteContent["nav"]["nav-item-2"];
nava[2].textContent = siteContent["nav"]["nav-item-3"];
nava[3].textContent = siteContent["nav"]["nav-item-4"];
nava[4].textContent = siteContent["nav"]["nav-item-5"];
nava[5].textContent = siteContent["nav"]["nav-item-6"];

const newA2 = document.createElement('a');
newA2.setAttribute('href', '#');
newA2.textContent = 'Why Us';

const newA1 = document.createElement('a');
newA1.setAttribute('href', '#');
newA1.textContent = 'Home';

const nav = document.querySelector('nav');

nav.append(newA1);
nav.prepend(newA2);

// h1.textContent = siteContent["cta"]['h1'];
h1.append(h1br);
h1.prepend(h1text[0]);
h1.append(h1text[1]);
h1.append(h1br2);
h1.append(h1text[2]);



button.textContent = siteContent['cta']['button'];

ctaImg.setAttribute('src', siteContent['cta']['img-src']);

h4[0].textContent = siteContent['main-content']['features-h4'];
h4[1].textContent = siteContent['main-content']['about-h4'];
h4[2].textContent = siteContent['main-content']['services-h4'];
h4[3].textContent = siteContent['main-content']['product-h4'];
h4[4].textContent = siteContent['main-content']['vision-h4'];

text[0].textContent = siteContent['main-content']['features-content'];
text[1].textContent = siteContent['main-content']['about-content'];
text[2].textContent = siteContent['main-content']['services-content'];
text[3].textContent = siteContent['main-content']['product-content'];
text[4].textContent = siteContent['main-content']['vision-content'];

midImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

contactH4.textContent = siteContent['contact']['contact-h4'];

contactText[0].textContent = siteContent['contact']['address'];
contactText[1].textContent = siteContent['contact']['phone'];
contactText[2].textContent = siteContent['contact']['email'];

footer.textContent = siteContent['footer']['copyright'];

document.querySelectorAll('a').forEach((element) => {
  element.style.color = 'green';
});
console.log(h1br);







