import { createDiv } from "../helpFunctions/createDiv";

// Menu Images
import pizzaPic from "../src/images/menu/pizza.jpg";
import pastaPic from "../src/images/menu/pasta.jpg";
import chickenPic from "../src/images/menu/chicken.jpg";
import seaPic from "../src/images/menu/seafood.jpg";

const menuItems = {
  pizza: ["Pizza", "$10.99", "CHEESY CHEESY CHEESY", pizzaPic],
  pasta: ["Pasta", "$10.99", " still CHEESY CHEESY CHEESY", pastaPic],
  chicken: ["Chicken", "$10.99", " Not at all cheesy", chickenPic],
  seafood: ["Seafood", "$10.99", " Not at all cheesy", seaPic],
};

function makeItem(name, price, desc, pic) {
  const container = createDiv("menuItem");

  const image = new Image();
  image.src = pic;

  const info = createDiv("menuText");
  const infoTitle = createDiv("menuTitle", name);
  const infoPrice = createDiv("menuPrice", price);
  const infoDesc = createDiv("menyDesc", desc);

  const button = document.createElement("button");
  button.innerText = "Add to Cart";

  info.append(infoTitle, infoPrice, infoDesc, button);

  container.append(image, info);

  return container;
}

export function genMenu() {
  let container = createDiv(["menuContainer", "wrapper"]);

  for (const item in menuItems) {
    container.append(makeItem(...menuItems[item]));
  }

  return container;
}
