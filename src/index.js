import "./style.css";
import { genHome } from "./home";
import { genMenu } from "./menu";
import { createDiv } from "../helpFunctions/createDiv";

const content = document.getElementById("content");
genHome();

function wipeMain() {
  const mainCon = document.querySelector("main");

  while (mainCon.firstChild) {
    mainCon.removeChild(mainCon.firstChild);
  }
}

function reRender(node = "home") {
  wipeMain();

  const main = document.querySelector("main");

  let content;
  if (node == "about") {
    // Generate About
    content = genHome();
    console.log("About Page Gen");
  } else if (node == "menu") {
    // Generate Menu
    content = genMenu();
    console.log("Menu Page Gen");
  } else {
    content = genHome();
  }

  main.appendChild(content);
}

function renderNav() {
  const navbar = document.createElement("nav");

  // Create Nav Logo
  const navLogo = createDiv("nav-log", "LOGO here");

  // Create Nav Button List
  const navList = createDiv("nav-btn-list");

  const navBtnHome = createDiv(["nav-btn", "navHome", "navSelected"], "Home"); // Home Btn
  navBtnHome.addEventListener("click", () => {
    reRender("home");
  });

  const navBtnMenu = createDiv(["nav-btn", "navMenu"], "Menu"); // Menu Button
  navBtnMenu.addEventListener("click", () => {
    reRender("menu");
  });

  const navBtnAbout = createDiv(["nav-btn", "navAbout"], "About"); // About Button
  navBtnAbout.addEventListener("click", () => {
    reRender("about");
  });

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
  const content = genHome();

  mainContainer.append(content);
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
reRender("about");
