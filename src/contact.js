import icon from "./my-image.png";

export default function contact() {
  let main = document.querySelector("main");

  main.textContent = "";

  let contact1 = document.createElement("div");
  contact1.className = "contact1";
  let paragraph = document.createElement("p");
  paragraph.textContent =
    "No.11 Southampton town lorem ipsum way off Broadway hilltop";

  let image = document.createElement("img");
  image.src = icon;

  contact1.appendChild(paragraph);
  contact1.appendChild(image);

  let contact2 = document.createElement("div");
  contact2.className = "contact2";
  let paragraph2 = document.createElement("p");
  paragraph2.textContent = "telephone: 0128743349 email: algoimter@gmail.com";

  let image2 = document.createElement("img");
  image2.src = icon;

  contact2.appendChild(paragraph2);
  contact2.appendChild(image2);

  main.appendChild(contact1);
  main.appendChild(contact2);
}
