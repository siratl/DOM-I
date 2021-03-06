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
    "h1": "DOM<br>Is<br> Awesome",
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
    "address" : "123 Way 456 Street<br> Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo


// HEADER AND NAV
let logo = document.querySelector("#logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"])

const homeLink = document.createElement("a");
const faqLink = document.createElement("a");

const navElement = document.querySelector("nav")

navElement.prepend(homeLink);
navElement.append(faqLink);

let tagElements = document.querySelectorAll("a");

tagElements[0].innerHTML = "Home";
tagElements[1].innerHTML = siteContent["nav"]["nav-item-1"];
tagElements[2].innerHTML = siteContent["nav"]["nav-item-2"];
tagElements[3].innerHTML = siteContent["nav"]["nav-item-3"];
tagElements[4].innerHTML = siteContent["nav"]["nav-item-4"];
tagElements[5].innerHTML = siteContent["nav"]["nav-item-5"];
tagElements[6].innerHTML = "FAQs";


for (let i = 0; i < tagElements.length; i++) {
  tagElements[i].style.color = "green";
};

 // CTA
let ctaImg = document.querySelector("#cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"])
 let ctaHeader = document.querySelector("h1");
ctaHeader.innerHTML = siteContent["cta"]["h1"];
 let button = document.querySelector("button");
button.innerHTML = siteContent["cta"]["button"];

 // MAIN CONTENT
let middleImg = document.querySelector("#middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"])
 let h4Elements = document.querySelectorAll("h4");
h4Elements[0].innerHTML = siteContent["main-content"]["features-h4"];
h4Elements[1].innerHTML = siteContent["main-content"]["about-h4"];
h4Elements[2].innerHTML = siteContent["main-content"]["services-h4"];
h4Elements[3].innerHTML = siteContent["main-content"]["product-h4"];
h4Elements[4].innerHTML = siteContent["main-content"]["vision-h4"];
 let textContent = document.querySelectorAll(".text-content p");
textContent[0].innerHTML = siteContent["main-content"]["features-content"];
textContent[1].innerHTML = siteContent["main-content"]["about-content"];
textContent[2].innerHTML = siteContent["main-content"]["services-content"];
textContent[3].innerHTML = siteContent["main-content"]["product-content"];
textContent[4].innerHTML = siteContent["main-content"]["vision-content"];

 // CONTACT
h4Elements[5].innerHTML = siteContent["contact"]["contact-h4"];
 let contactStuff = document.querySelectorAll(".contact p");
contactStuff[0].innerHTML = siteContent["contact"]["address"];
contactStuff[1].innerHTML = siteContent["contact"]["phone"];
contactStuff[2].innerHTML = siteContent["contact"]["email"];

 // FOOTER
let footer = document.querySelector("footer p");
footer.innerHTML = siteContent["footer"]["copyright"];

