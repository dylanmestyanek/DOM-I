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

// Nav
let nav = document.querySelector('nav');
let navItems = nav.querySelectorAll('a');
let prependLink = document.createElement('a'); 
prependLink.textContent = "Prepended!";
let appendLink = document.createElement('a');
appendLink.textContent = "Appended!";
nav.prepend(prependLink);
nav.append(appendLink);

navItems.forEach((item, index) => {
  item.textContent = siteContent['nav'][`nav-item-${index + 1}`],
  item.style.color = "green";
});

// Great Idea Logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Header and CTA
let ctaSection = document.querySelector('.cta');
let ctaTextContainer = ctaSection.querySelector('.cta-text');
let ctaHeader = ctaTextContainer.querySelector('h1');
let ctaButton = ctaTextContainer.querySelector('button');
let ctaImg = ctaSection.querySelector('#cta-img');

ctaHeader.textContent = siteContent['cta']['h1'];
ctaButton.textContent = siteContent['cta']['button'];
ctaImg.src = siteContent['cta']['img-src'];

// Top Content - First Two Paragraphs
let topContentHeadlines = document.querySelectorAll('.top-content .text-content h4');
let topContentText = document.querySelectorAll('.top-content .text-content p');
topContentHeadlines[0].textContent = siteContent['main-content']['features-h4'];
topContentHeadlines[1].textContent = siteContent['main-content']['about-h4'];
topContentText[0].textContent = siteContent['main-content']['features-content'];
topContentText[1].textContent = siteContent['main-content']['about-content'];

// Middle Image on Page
let middleImg = document.querySelector('.middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];

// Bottom Content - Last Three Paragraphs
let bottomContentHeadlines = document.querySelectorAll('.bottom-content .text-content h4');
let bottomContentText = document.querySelectorAll('.bottom-content .text-content p');

bottomContentHeadlines[0].textContent = siteContent['main-content']['services-h4'];
bottomContentHeadlines[1].textContent = siteContent['main-content']['product-h4'];
bottomContentHeadlines[2].textContent = siteContent['main-content']['vision-h4'];
bottomContentText[0].textContent = siteContent['main-content']['services-content'];
bottomContentText[1].textContent = siteContent['main-content']['product-content'];
bottomContentText[2].textContent = siteContent['main-content']['vision-content'];

// Contact Section
let contactSection = document.querySelector('.contact');
let contactHeadline = contactSection.querySelector('h4');
let contactText = contactSection.querySelectorAll('p');

contactHeadline.textContent = siteContent['contact']['contact-h4'];
contactText[0].textContent = siteContent['contact']['address'];
contactText[1].textContent = siteContent['contact']['phone'];
contactText[2].textContent = siteContent['contact']['email'];

// Footer
let footer = document.querySelector('footer');
footer.textContent = siteContent['footer']['copyright'];

//  ==================== STRETCH STUFF ==================== //
let newContent = {
  cta: {
    h1: 'Prototypes Suck!',
    button: "Don't click me!"
  },
  "main-content": {
    "features-h4": 'Swag!',
    "about-h4": 'Yeehaw!'
  }
}

let flag = true; 
let modifierButton = document.createElement('button');
modifierButton.textContent = "Don't click me :)";
modifierButton.style.backgroundColor = "pink";
ctaTextContainer.append(modifierButton);

function changeContent(){
  flag = !flag;
  if (flag) {
    ctaHeader.textContent = newContent.cta.h1;
    topContentHeadlines[0].textContent = newContent['main-content']['features-h4'];
    topContentHeadlines[1].textContent = newContent['main-content']['about-h4'];
   } else {
    ctaHeader.textContent = siteContent['cta']['h1'];
    topContentHeadlines[0].textContent = siteContent['main-content']['features-h4'];
    topContentHeadlines[1].textContent = siteContent['main-content']['about-h4'];
   };
}

modifierButton.addEventListener('click', changeContent);

