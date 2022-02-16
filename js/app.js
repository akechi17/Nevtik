// javascript untuk progress bar
const skills_wrap = document.querySelector(".skills");
const skills_bars = document.querySelectorAll(".skill-progress");

window.addEventListener("scroll", () => {
  skillsEffect();
});

function checkScroll(el) {
  let rect = el.getBoundingClientRect();
  if (window.innerHeight >= rect.top + el.offsetHeight) return true;
  return false;
}

function skillsEffect() {
  if (!checkScroll(skills_wrap)) return;
  skills_bars.forEach((skill) => (skill.style.width = skill.dataset.progress));
}

// js untuk loading screen
window.onload = () => {

  if (window.scrollY > 80) {
    document.querySelector('.header .navigation').classList.add('active');
  } else {
    document.querySelector('.header .navigation').classList.remove('active');
  }

  fadeOut();

}

function loader() {
  document.querySelector('.loader-container').classList.add('active');
}

function fadeOut() {
  setTimeout(loader, 700);
}

//hamburger menu
const hamburger_menu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector("header nav");
const links = document.querySelectorAll(".links a");

function closeMenu() {
  navbar.classList.remove("open");
  document.body.classList.remove("stop-scrolling");
}

hamburger_menu.addEventListener("click", () => {
  if (!navbar.classList.contains("open")) {
    navbar.classList.add("open");
    document.body.classList.add("stop-scrolling");
  } else {
    closeMenu();
  }
});

links.forEach((link) => link.addEventListener("click", () => closeMenu()));