// Get Burger Button
let burgerMenu = document.querySelector(".burger-menu");
let bodyElement = document.querySelector("body");
let backgroundItem = document.querySelector(".background");
let asideMenu = document.querySelector(".aside");

let portfolioMenu = document.querySelector(".portfolio-menu");
let portfolioImageWrapper = document.querySelector(".portfolio-image-wrapper");

let languangeWrapper = document.querySelector(".header-wrapper-language");

let allDataElements = document.querySelectorAll("[data-value]");

let themeChanger = document.querySelector(".theme-changer-wrapper");

let heroElement = document.querySelector(".hero");

// Data
const i18Obj = {
  'en': {
    'skills': 'Skills',
    'portfolio': 'Portfolio',
    'video': 'Video',
    'price': 'Price',
    'contacts': 'Contacts',
    'hero-title': 'Alexa Rise',
    'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
    'hire': 'Hire me',
    'skill-title-1': 'Digital photography',
    'skill-text-1': 'High-quality photos in the studio and on the nature',
    'skill-title-2': 'Video shooting',
    'skill-text-2': 'Capture your moments so that they always stay with you',
    'skill-title-3': 'Rotouch',
    'skill-text-3': 'I strive to make photography surpass reality',
    'skill-title-4': 'Audio',
    'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
    'winter': 'Winter',
    'spring': 'Spring',
    'summer': 'Summer',
    'autumn': 'Autumn',
    'price-description-1-span-1': 'One location',
    'price-description-1-span-2': '120 photos in color',
    'price-description-1-span-3': '12 photos in retouch',
    'price-description-1-span-4': 'Readiness 2-3 weeks',
    'price-description-1-span-5': 'Make up, visage',
    'price-description-2-span-1': 'One or two locations',
    'price-description-2-span-2': '200 photos in color',
    'price-description-2-span-3': '20 photos in retouch',
    'price-description-2-span-4': 'Readiness 1-2 weeks',
    'price-description-2-span-5': 'Make up, visage',
    'price-description-3-span-1': 'Three locations or more',
    'price-description-3-span-2': '300 photos in color',
    'price-description-3-span-3': '50 photos in retouch',
    'price-description-3-span-4': 'Readiness 1 week',
    'price-description-3-span-5': 'Make up, visage, hairstyle',
    'order': 'Order shooting',
    'contact-me': 'Contact me',
    'send-message': 'Send message'
  },
  'ru': {
    'skills': 'Навыки',
    'portfolio': 'Портфолио',
    'video': 'Видео',
    'price': 'Цены',
    'contacts': 'Контакты',
    'hero-title': 'Алекса Райс',
    'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
    'hire': 'Пригласить',
    'skill-title-1': 'Фотография',
    'skill-text-1': 'Высококачественные фото в студии и на природе',
    'skill-title-2': 'Видеосъемка',
    'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
    'skill-title-3': 'Ретушь',
    'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
    'skill-title-4': 'Звук',
    'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
    'winter': 'Зима',
    'spring': 'Весна',
    'summer': 'Лето',
    'autumn': 'Осень',
    'price-description-1-span-1': 'Одна локация',
    'price-description-1-span-2': '120 цветных фото',
    'price-description-1-span-3': '12 отретушированных фото',
    'price-description-1-span-4': 'Готовность через 2-3 недели',
    'price-description-1-span-5': 'Макияж, визаж',
    'price-description-2-span-1': 'Одна-две локации',
    'price-description-2-span-2': '200 цветных фото',
    'price-description-2-span-3': '20 отретушированных фото',
    'price-description-2-span-4': 'Готовность через 1-2 недели',
    'price-description-2-span-5': 'Макияж, визаж',
    'price-description-3-span-1': 'Три локации и больше',
    'price-description-3-span-2': '300 цветных фото',
    'price-description-3-span-3': '50 отретушированных фото',
    'price-description-3-span-4': 'Готовность через 1 неделю',
    'price-description-3-span-5': 'Макияж, визаж, прическа',
    'order': 'Заказать съемку',
    'contact-me': 'Свяжитесь со мной',
    'send-message': 'Отправить'
  }
};

// Set Theme
let getThemeName = localStorage.getItem("theme");
if(getThemeName === "white") {
  
  themeChangerDark(themeChanger);
} else if(getThemeName === "dark") {
  
  themeChangerWhite(themeChanger);
};
changeTheme(getThemeName);

// Set Language

let getLanguage = localStorage.getItem("language");
console.log(getLanguage);
if(getLanguage === "ru") {
  changeLanguageActive(document.querySelector(".header-wrapper-language__ru"));
  changeWebsiteLanguage("ru");
} else if (getLanguage === "en") {
  changeLanguageActive(document.querySelector(".header-wrapper-language__eng"));
  changeWebsiteLanguage("en");
}


// Functions
function showAsideMenu() {
  // Add Animation 
  let burgerItemChilds = Array.from(document.querySelector(".burger-menu").children);
  for(let i = 0; i < burgerItemChilds.length; i++) {
    burgerItemChilds[i].classList.toggle(`bg-item-${i + 1}`);
  }
  // Show Background 
  backgroundItem.classList.toggle("background-show");
  // Stop Body
  bodyElement.classList.toggle("body-stop");
  // Show Aside
  asideMenu.classList.toggle("aside-show");
};

function changeImages(textToChange) {
  let portfolioImageWrapperChildrens = Array.from(portfolioImageWrapper.children);
  portfolioImageWrapper.innerHTML = "";
  for(let i = 1; i < 7; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("portfolio-image-wrapper-item");
    let newImg = document.createElement("img");
    newImg.classList.add("portfolio-image-wrapper-item__src");
    newImg.src = `images/${textToChange}/${i}.jpg`;
    newDiv.appendChild(newImg);
    portfolioImageWrapper.appendChild(newDiv);
  };
}

function changeActivePortfolioLink(element) {
  let portfolioChildrens = Array.from(portfolioMenu.children);
  portfolioChildrens.map(item => {
    item.classList.remove("portfolio-menu__active");
  });
  element.classList.add("portfolio-menu__active");
}

function changeWebsiteLanguage(language) {
  Array.from(allDataElements).map(item => {
    item.textContent = i18Obj[language][item.getAttribute("data-value")];
  });
}

function changeLanguageActive(element) {
  let allLanguangeChildren = Array.from(languangeWrapper.children);
  allLanguangeChildren.map(item => item.classList.remove("language-active"));
  element.classList.add("language-active");
}

function changeTheme(theme) {
  if(theme === "white") {
    document.body.style.backgroundColor = "white";
    Array.from(allDataElements).map(item => {
      if(!item.classList.contains("section-title")  && !item.classList.contains("contacts-info-title")) {
        // item.style.color = "black";
        item.classList.remove("color-white");
        item.classList.add("color-black");
      } else if (item.classList.contains("section-title")) {
        item.style.color = "black";
        item.style.backgroundColor = "white";
      };
    });
    Array.from(document.querySelectorAll("[data-change]")).map(item => {
      item.style.color = "black";
    });
    document.querySelector(".aside").style.backgroundColor = "white";
    Array.from(document.querySelectorAll(".burger-menu-item")).map(item => {
      item.classList.remove("bg-item-background-color-white");
      item.classList.add("bg-item-background-color-black");
    });
    document.querySelector(".header-wrapper-logo").classList.add("white-logo");
  } else if (theme === "black"){
    document.body.style.backgroundColor = "black";
    Array.from(allDataElements).map(item => {
      if (!item.classList.contains("section-title") && !item.classList.contains("contacts-info-title")) {
        // item.style.color = "white";
        item.classList.remove("color-black");
        item.classList.add("color-white");
      }
      else if (item.classList.contains("section-title")) {
        item.style.color = "white";
        item.style.backgroundColor = "black";
      };
    });
    Array.from(document.querySelectorAll("[data-change]")).map(item => {
      item.style.color = "white";
    });
    document.querySelector(".aside").style.backgroundColor = "black";
    Array.from(document.querySelectorAll(".burger-menu-item")).map(item => {
      item.classList.remove("bg-item-background-color-black");
      item.classList.add("bg-item-background-color-white");
    });
    document.querySelector(".header-wrapper-logo").classList.remove("white-logo");
  }
};

function themeChangerDark(e) {
  localStorage.setItem("theme", "white");
    heroElement.classList.remove("hero-image-1");
    heroElement.classList.add("hero-image-2");
    e.removeAttribute("data-inner");
    e.setAttribute("data-inner", "light");
    e.children[0].remove();
    e.style.backgroundColor = "black";
    e.innerHTML = `
      <div class="light-theme">
        <i class="fa-solid fa-sun"></i>
      </div>
    `;
    e.children[0].style.color = "white";
    changeTheme("white");
    Array.from(document.querySelectorAll(".header-wrapper-menu-list__item-link")).map(item => {
      item.style.color = "black";
    });
}

function themeChangerWhite(e) {
  localStorage.setItem("theme", "dark");
    heroElement.classList.remove("hero-image-2");
    heroElement.classList.add("hero-image-1");
    e.removeAttribute("data-inner");
    e.setAttribute("data-inner", "dark");
    e.children[0].remove();
    e.style.backgroundColor = "white";
    e.innerHTML = `
      <div div class="dark-theme">
        <i class="fa-solid fa-moon"></i>
      </div>
    `;
    changeTheme("black");
    Array.from(document.querySelectorAll(".header-wrapper-menu-list__item-link")).map(item => {
      item.style.color = "white";
    });
}

// changeTheme("black");

// Events
burgerMenu.addEventListener("click", showAsideMenu);
backgroundItem.addEventListener("click", showAsideMenu);

let asideMenuLinks = Array.from(document.querySelectorAll(".aside-menu-item"));

asideMenuLinks.map(item => {
  item.addEventListener("click", showAsideMenu);
});

portfolioMenu.addEventListener("click", (e) => {
  e.preventDefault();
  let text = e.target.getAttribute("data-value");
  if(e.target.classList.contains("portfolio-menu__link")) {
    changeActivePortfolioLink(e.target);
    changeImages(text.toLowerCase());
  };
});



languangeWrapper.addEventListener("click", (e) => {
  if(e.target.tagName === "SPAN") {
    if(e.target.textContent === "ru") {
      localStorage.setItem("language", "ru")
      changeLanguageActive(e.target);
      changeWebsiteLanguage("ru");
    } else if (e.target.textContent === "en") {
      localStorage.setItem("language", "en")
      changeLanguageActive(e.target);
      changeWebsiteLanguage("en");
    }
  };
});

themeChanger.addEventListener("click", (e) => {
  if(e.currentTarget.getAttribute("data-inner") === "dark") {
    themeChangerDark(e.currentTarget);
  } else if (e.currentTarget.getAttribute("data-inner") === "light") {
    themeChangerWhite(e.currentTarget);
  };
});

// Local Storage

