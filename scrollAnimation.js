const aboutDivs = document.querySelectorAll(".about-texts div");
const portfolioAnchors = document.querySelectorAll(".portfolios a");

//Header
ScrollReveal().reveal(".header", {
  distance: "50%",
  origin: "top",
  duration: 1000,
});

//Hero
ScrollReveal().reveal(".hero", {
  opacity: 0,
  duration: 2000,
});

//Hero Texts
ScrollReveal().reveal(".hero-texts", {
  distance: "50%",
  origin: "left",
  duration: 2000,
  delay: 200,
});

//Hero Image
ScrollReveal().reveal(".hero-img", {
  distance: "50%",
  origin: "right",
  duration: 2000,
});

//About Image
ScrollReveal().reveal(".about-img", {
  opacity: 0,
  duration: 2000,
});

//About Divs
ScrollReveal().reveal(aboutDivs, {
  opacity: 0,
  duration: 2000,
});

//Services Image
ScrollReveal().reveal(".services-img", {
  distance: "100%",
  origin: "left",
  duration: 2000,
});

//Services Text
ScrollReveal().reveal(".services-text", {
  distance: "100%",
  origin: "right",
  duration: 2000,
  delay: 200,
});

//Portfolio Heading 2
ScrollReveal().reveal(".portfolio-h2", {
  scale: 0,
  duration: 2000,
});

//Portfolio-1
ScrollReveal().reveal(".portfolio-1", {
  distance: "150%",
  origin: "bottom",
  duration: 2000,
  delay: 100,
});

//Portfolio-2
ScrollReveal().reveal(".portfolio-2", {
  distance: "150%",
  origin: "bottom",
  duration: 2000,
  delay: 200,
});

//Portfolio-3
ScrollReveal().reveal(".portfolio-3", {
  distance: "150%",
  origin: "bottom",
  duration: 2000,
  delay: 300,
});

//Portfolio-4
ScrollReveal().reveal(".portfolio-4", {
  distance: "150%",
  origin: "bottom",
  duration: 2000,
  delay: 400,
});

//Blog Head
ScrollReveal().reveal(".blog-head", {
  distance: "100%",
  origin: "top",
  duration: 2000,
});

//Blog Details
ScrollReveal().reveal(".blog-details", {
  distance: "100%",
  origin: "bottom",
  duration: 2000,
});

//Message Text
ScrollReveal().reveal(".message-text", {
  distance: "100%",
  origin: "left",
  duration: 2000,
  delay: 200,
});

//Message Form
ScrollReveal().reveal(".message-form", {
  distance: "100%",
  origin: "right",
  duration: 2000,
});

//Footer
ScrollReveal().reveal(".footer", {
  opacity: 0,
  duration: 2000,
});
