export function createDiv(className, textContent = "") {
  const element = document.createElement("div");

  if (typeof className == "object") {
    for (let i = 0; i < className.length; i++) {
      element.classList.add(className[i]);
    }
  } else {
    element.classList.add(className);
  }

  element.textContent = textContent;

  return element;
}
