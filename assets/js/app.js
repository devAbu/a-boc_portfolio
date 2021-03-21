const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });

    burger.classList.toggle("toggle");
  });
};

navSlide();

const navbarLinks = document.querySelectorAll(".nav-links li a");
const btns = document.querySelectorAll(".knowUs .box button");

for (const link of navbarLinks) {
  link.addEventListener("click", smoothScroll);
}

for (const button of btns) {
  button.addEventListener("click", smoothScroll);
}

function smoothScroll(e) {
  e.preventDefault();
  const href = this.getAttribute("href") || this.getAttribute("class");
  console.log(href);
  const offsetTop = document.querySelector(href).offsetTop - 50;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
}
