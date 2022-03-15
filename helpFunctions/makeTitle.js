import { createDiv } from "./createDiv";

export function createTitle(title) {
  const titleBox = createDiv("titleBox");
  titleBox.innerText = title;

  return titleBox;
}
