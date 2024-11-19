const closeIcon = document.querySelector(".fa-xmark");
const openIcon = document.querySelector(".fa-bars-staggered");
const navigationBar = document.querySelector(".links");
const navigationAnchors = document.querySelectorAll(".links ul li a");

//Opens the Header
function openHeader() {
  navigationBar.style.width = "100%";
}

//Closes the Header
function closeHeader() {
  navigationBar.style.width = 0;
}

//Adds an event listener to the Bar to open the Header
openIcon.addEventListener("click", openHeader);

//Adds an event listener to the Bar to close the Header
closeIcon.addEventListener("click", closeHeader);

//This closes the Navigation when any header anchor link is clicked
function closeNavigationBarOnclick() {
  if (window.innerWidth <= 767) {
    closeHeader();
  }
  return;
}

//This loops all the anchor element on the header and adds the closenavigationbaronclick function
navigationAnchors.forEach((a) => {
  a.addEventListener("click", closeNavigationBarOnclick);
});

//Listens to when the window resizes and apply the openHeader function
window.addEventListener("resize", (e) => {
  if (window.innerWidth >= 767) {
    openHeader();
  }
  return;
});
