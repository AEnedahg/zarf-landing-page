const hamburger_menu = document.getElementById('hamburger-menu');
const cancel_icon = document.getElementById('cancel-icon');
const mobile_nav = document.getElementsByClassName('mobile-nav')[0];
const ulElement = document.getElementsByClassName('nav__list')[0]

hamburger_menu.addEventListener('click', () => {
  mobile_nav.style.display="flex";
  hamburger_menu.classList.toggle('bi-list');
  hamburger_menu.classList.toggle('bi-x-lg');
  cancel_icon.style.display = "inline";
});

cancel_icon.addEventListener('click', () => {
  mobile_nav.style.display="none";
  hamburger_menu.classList.toggle('bi-list');
  hamburger_menu.classList.toggle('bi-x-lg');
  cancel_icon.style.display = "none";
});

function changeText() {
  const hero_headline = document.getElementById('hero-headline');
  const hero_headline_span = document.getElementById('hero-headline-span');
  if(window.innerWidth > 319 && window.innerWidth < 1281) {
    hero_headline.innerText="Fashion \n Show";
    hero_headline_span.style.display="none";
  } else {
    hero_headline.innerHTML= "Reimagined <br><span>CLASSICS</span"
  }
}
changeText()
window.addEventListener('resize',changeText);

function changeArrow () {
  const wavy_arrow = document.getElementById('wavy-arrow');
  if (window.innerWidth > 319 && window.innerWidth < 641) {
    wavy_arrow.src= "https://res.cloudinary.com/dmrr92p4s/image/upload/v1703671895/zarf-landing-page/mobile-hero-wavy-arrow_hzkxar.svg";
  } else {
    wavy_arrow.src= "https://res.cloudinary.com/dmrr92p4s/image/upload/v1703604589/zarf-landing-page/hero-wavy-arrow_pc7qu9.svg";
  }
}

changeArrow();
window.addEventListener('resize',changeArrow)