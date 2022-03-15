import { createDiv } from "../helpFunctions/createDiv";

// Menu Images
import pizzaPic from "../src/images/menu/pizza.jpg";
import pastaPic from "../src/images/menu/pasta.jpg";
import chickenPic from "../src/images/menu/chicken.jpg";
import seaPic from "../src/images/menu/seafood.jpg";
import burgerPic from "../src/images/menu/burger.jpg";
import wafflePic from "../src/images/menu/waffles.jpg";
import desertPic from "../src/images/menu/desert.jpg";
import skewerPic from "../src/images/menu/skewer.jpg";
import fruitPic from "../src/images/menu/fruit.jpg";

const menuItems = {
  pizza: ["Pizza", "$10.99", "CHEESY CHEESY CHEESY", pizzaPic],
  pasta: ["Pasta", "$10.99", " still CHEESY CHEESY CHEESY", pastaPic],
  chicken: ["Chicken", "$10.99", " Not at all cheesy", chickenPic],
  seafood: ["Seafood", "$10.99", " Lets hope not", seaPic],
  burger: ["Burger", "$10.99", " kinda Cheesy", burgerPic],
  waffles: ["Waffles", "$10.99", " kinda Deleicios", wafflePic],
  desert: ["Desert", "$10.99", " Fluffy", desertPic],
  skewer: ["Skewer", "$10.99", " Somehting on a stick", skewerPic],
  fruit: ["Fruit Bowl", "$10.99", " Somehting on a stick", fruitPic],
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
