import { createDiv } from "../helpFunctions/createDiv";
import { createTitle } from "../helpFunctions/makeTitle";

export function genAbout() {
  const container = createDiv(["aboutContainer", "wrapper"]);
  const address = createDiv("aboutAddress");
  address.innerHTML = "217 King St W,<br>Kitchener,<br>ON N2G 1B1";

  const map = createDiv("map");
  map.innerHTML =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2896.456812919935!2d-80.49542228450879!3d43.45105937912883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf4f367fea66d%3A0xb30ae8df8d7aa041!2sKinkaku%20Izakaya!5e0!3m2!1sen!2sca!4v1647386333329!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';

  const addressCon = createDiv("addressCon");
  addressCon.append(address, map);

  const title = createTitle("Our Address");

  const missionTitle = createTitle("Our Mission");
  const mission = createDiv(
    "mission",
    "Is to provide the best tasting food and most comfortable dinign experience ever!"
  );

  container.append(title, addressCon, missionTitle, mission);
  return container;
}
