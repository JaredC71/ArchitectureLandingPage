const menuBtn = document.getElementById("menuBtn");
const closeMenuBtn = document.getElementById("closeMenuBtn");
const menu = document.getElementById("menu");
const navLinks = document.getElementsByClassName("nav-items");

const descriptionContainer = document.getElementById("descriptionContainer");
const specificationContainer = document.getElementById(
  "specificationContainer"
);
const reviewContainer = document.getElementById("reviewsContainer");

const description = document.getElementById("description");
const specifications = document.getElementById("specifications");
const reviews = document.getElementById("reviews");
const content = document.getElementById("content");

function closeMenu() {
  menu.style.width = "0%";
  // menu.style.display = "none";
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].style.display = "none";
  }
}

function openMenu() {
  menu.style.width = "40%";

  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].style.display = "block";
  }
}
closeMenuBtn.addEventListener("click", closeMenu);
menuBtn.addEventListener("click", openMenu);


function displayDescription() {
    descriptionContainer.style.display = "flex";
    specificationContainer.style.display = "none";
    reviewContainer.style.display = "none";
}
function displaySpecifications() {
    descriptionContainer.style.display = "none";
    specificationContainer.style.display = "flex";
    reviewContainer.style.display = "none";
}
function displayReviews() {
    descriptionContainer.style.display = "none";
    specificationContainer.style.display = "none";
    reviewContainer.style.display = "block";
}
description.addEventListener("click", displayDescription)
specifications.addEventListener("click", displaySpecifications)
reviews.addEventListener("click", displayReviews)