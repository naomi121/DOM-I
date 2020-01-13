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
logo.setAttribute('src', siteContent["nav"]["img-src"])


let midImg = document.getElementById("middle-img");
midImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);



//Navigation
let navItems = document.querySelectorAll("a")
navItems[0].textContent = siteContent["nav"] ["nav-item-1"]
navItems[1].textContent = siteContent["nav"] ["nav-item-2"]
navItems[2].textContent = siteContent["nav"] ["nav-item-3"]
navItems[3].textContent = siteContent["nav"] ["nav-item-4"]
navItems[4].textContent = siteContent["nav"] ["nav-item-5"]
navItems[5].textContent = siteContent["nav"] ["nav-item-6"]


navItems.forEach(function(currentValue) {
  currentValue.style.color= "green"
});

let nav = document.querySelector("nav");
const newTag = document.createElement("a");
newATag.textContent = "prepend";
nav.prepend(newATag);


const newATag2 = document.createElement("a");
newATag2.textContent = "Append";
nav.appendChild(newATag2);


newATag2.style.color = "green";
newATag2.style.color = "pointer";
newATag.style.color = "green";
newATag.style.cursor = "pointer";


//cta

let headImg = document.getElementById("cta-img");
headImg.setAttribute("src", siteContent["cta"]["img-src"]);

let ctaHeader = document.querySelector("h1");
ctaHeader.innerHTML = siteContent["cta"]["h1"].split(" ").join(`<br>`);

let ctaBtn = document.querySelector("button");
ctaBtn.innerHTML = siteContent["cta"]["button"];

let ctaBtnT = document.querySelector(".cta-text");
ctaBtnT.style.letterSpacing = 0;


//Main-Content

//H4's
let mainH4 = document.querySelectorAll(".main-content .text-content h4");
mainH4[0].textContent = siteContent["main-content"]["features-h4"];
mainH4[1].textContent = siteContent["main-content"]["about-h4"];
mainH4[2].textContent = siteContent["main-content"]["services-h4"];
mainH4[3].textContent = siteContent["main-content"]["product-h4"];
mainH4[4].textContent = siteContent["main-content"]["vision-h4"];

//P tags

let mainParagraphs = document.querySelectorAll(".main-content .text-content p");
mainParagraphs[0].textContent = siteContent["main-content"]["features-content"];
mainParagraphs[1].textContent = siteContent["main-content"]["about-content"];
mainParagraphs[2].textContent = siteContent["main-content"]["services-content"];
mainParagraphs[3].textContent = siteContent["main-content"]["product-content"];
mainParagraphs[4].textContent = siteContent["main-content"]["vision-content"];
