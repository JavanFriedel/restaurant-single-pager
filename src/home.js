import { createDiv } from "../helpFunctions/createDiv";
import { createTitle } from "../helpFunctions/makeTitle";
import { genForm } from "../helpFunctions/genForm";
import testImage from "./images/FancyPlate1.jpg";
import seatingImage from "./images/seating.jpg";

function genHero() {
  const row = createDiv(["row", "heroRow"]);
  // const imageDoc = document.createElement("img");
  const myImage = new Image();
  myImage.src = testImage;

  const textHolder = createDiv("heroTextContainer");
  const title = createDiv("heroTitle", "New Menu Items");
  const desc = createDiv(
    "heroText",
    "All new menu items for you to explore! Vestibulum vehicula ante ut tincidunt commodo. Nam dapibus feugiat dapibus. Nam venenatis sollicitudin condimentum. Donec ac sodales leo. Praesent non facilisis turpis. Curabitur ac sem accumsan, varius nibh a, luctus quam."
  );

  const btn = document.createElement("button");
  btn.classList.add("heroBtn");
  btn.innerText = "Menu";

  textHolder.append(title, desc, btn);

  row.append(textHolder, myImage);
  return row;
}

export function genInfo() {
  const row = createDiv("row");
  const divider = createTitle("Info");
  const content = createDiv("storeContent");

  const storeHours = createDiv("storeHours", "Store Hours");
  const storeHourspara = document.createElement("p");
  storeHourspara.innerHTML =
    "Sunday: 12PM - 12AM<br>Monday: 12PM - 12AM<br>Tuesday: 12PM - 12AM <br>Wednesday: 12PM - 12AM<br>Thursday: 12PM - 12AM<br>Friday: 12PM - 12AM<br>Saturday: 12PM - 12AM";

  storeHours.append(storeHourspara);

  const storeLocation = createDiv("storeLocation", "Store Location");
  const storeLocationPara = document.createElement("p");
  storeLocationPara.innerHTML = "217 King St W,<br>Kitchener,<br>ON N2G 1B1";

  storeLocation.append(storeLocationPara);

  content.append(storeHours, storeLocation);
  row.append(divider, content);
  return row;
}

function genTesti() {
  const row = createDiv(["row", "testiRow"]);
  const testimonial = createDiv(
    "testimonial",
    "THIS IS THE BEST PLACE EVER. TAKE EVERYONE HERE!"
  );
  const testiAuthor = createDiv("testiAuthor", "-Some Random Guy");

  row.append(testimonial, testiAuthor);
  return row;
}

function genReservation() {
  const row = createDiv("row");
  const container = createDiv("reserveRow");
  const image = new Image();
  image.src = seatingImage;
  const divider = createTitle("Reservations");

  const form = genForm();

  container.append(form, image);
  row.append(divider, container);
  return row;
}

export function genHome() {
  const wrapper = createDiv("wrapper");

  const heroRow = genHero();
  const infoRow = genInfo();
  const testiRow = genTesti();
  const reserveRow = genReservation();

  //append content and return Node
  wrapper.append(heroRow, infoRow, testiRow, reserveRow);
  return wrapper;
}
