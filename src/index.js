import "./style.css";

const content = document.getElementById("content");

function createDiv(className, textContent = "") {
  const element = document.createElement("div");
  element.classList.add(className);
  element.textContent = textContent;

  return element;
}

function renderNav() {
  const navbar = document.createElement("nav");

  // Create Nav Logo
  const navLogo = createDiv("nav-log", "LOGO here");

  // Create Nav Button List
  const navList = createDiv("nav-btn-list");

  const navBtnHome = createDiv("nav-btn", "Home"); // Home Btn

  const navBtnMenu = createDiv("nav-btn", "Menu"); // Menu Button

  const navBtnAbout = createDiv("nav-btn", "About"); // About Button

  // Add buttons to navList
  navList.append(navBtnHome, navBtnMenu, navBtnAbout);

  // Create Social Buttons
  const navSocials = createDiv("nav-socials");
  const socialFace = createDiv("social-btn", "f");
  const socialTwit = createDiv("social-btn", "t");
  const socialInst = createDiv("social-btn", "i");

  navSocials.append(socialFace, socialTwit, socialInst);

  // Add Elements to navbar
  navbar.append(navLogo, navList, navSocials);

  // Return Navbar
  return navbar;
}

function renderMain() {
  const mainContainer = document.createElement("main");

  return mainContainer;
}

function renderFooter() {
  const footer = document.createElement("footer");

  return footer;
}

function renderContainer() {
  const content = document.getElementById("content");
  content.append(renderNav(), renderMain(), renderFooter());
}

renderContainer();

// TODO
// - Make Helper functions for adding elements to dom
//
