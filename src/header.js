import menu from "./menu.js";
import contact from "./contact.js";

let header = document.createElement("div");

header.className = "header";

let tab1 = document.createElement("div");
let tab2 = document.createElement("div");
tab1.className = "tab1";
tab1.textContent = "Menu";
tab1.setAttribute("data-active", "true");

tab2.className = "tab2";
tab2.textContent = "Contact";
tab2.setAttribute("data-active", "false");

tab1.addEventListener("click", (event) => {
  menu();
  event.target.dataset.active = true;
  tab2.dataset.active = false;
});

tab2.addEventListener("click", (event) => {
  contact();
  event.target.dataset.active = true;
  tab1.dataset.active = false;
});

header.appendChild(tab1)
header.appendChild(tab2)

export { header };
