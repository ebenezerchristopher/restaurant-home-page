import icon from "./my-image.png";

export default function menu() {
  let main = document.querySelector("main");

  main.textContent = "";

  let menu1 = document.createElement("div");
  menu1.className = "menu1";
  let paragraph = document.createElement("p");
  paragraph.textContent =
    "This restaurant is awesome, I really love it here, definitely coming back for more";

  let image = document.createElement("img");
  image.src = icon;

  menu1.appendChild(paragraph);
  menu1.appendChild(image);

  let menu2 = document.createElement("div");
  menu2.className = "menu2";
  let paragraph2 = document.createElement("p");
  paragraph2.textContent =
    "Why is the world full of beautiful people and all i can say is wow i love it hear";

  let image2 = document.createElement("img");
  image2.src = icon;

  menu2.appendChild(paragraph2);
  menu2.appendChild(image2);

  main.appendChild(menu1);
  main.appendChild(menu2);
}
