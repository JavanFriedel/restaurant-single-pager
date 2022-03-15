import { createDiv } from "./createDiv";

export function genForm() {
  const form = document.createElement("form");

  // --- First Name ---
  const nameLabel = document.createElement("label");
  nameLabel.innerText = "First Name:";
  nameLabel.setAttribute("for", "formName");
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.id = "formName";

  const firstRow = createDiv("nameRow");
  firstRow.append(nameLabel, nameInput);

  // --- Last Name ---
  const lastLabel = document.createElement("label");
  lastLabel.innerText = "Last Name:";
  lastLabel.setAttribute("for", "formLast");
  const lastInput = document.createElement("input");
  lastInput.type = "text";
  lastInput.id = "formLast";

  const lastRow = createDiv("lastRow");
  lastRow.append(lastLabel, lastInput);

  // --- Email ---
  const emailLabel = document.createElement("label");
  emailLabel.innerText = "Email:";
  emailLabel.setAttribute("for", "emailInput");
  const emailInput = document.createElement("input");
  emailInput.type = "text";
  emailInput.id = "emailInput";

  const emailRow = createDiv("emailRow");
  emailRow.append(emailLabel, emailInput);

  // --- Phone Number ---
  const phoneLabel = document.createElement("label");
  phoneLabel.innerText = "Phone:";
  phoneLabel.setAttribute("for", "phoneInput");
  const phoneInput = document.createElement("input");
  phoneInput.type = "number";
  phoneInput.id = "phoneInput";

  const phoneRow = createDiv("phoneRow");
  phoneRow.append(phoneLabel, phoneInput);

  // --- Submit Button ---
  const button = document.createElement("button");
  button.innerText = "Reserve";
  form.append(firstRow, lastRow, emailRow, phoneRow, button);
  return form;
}
