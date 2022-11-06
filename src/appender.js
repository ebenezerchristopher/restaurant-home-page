import menu from "./menu.js"


export default function appender(...element) {

    console.log("called")
    let content = document.querySelector("#content");

    for (let item of element) {
      content.appendChild(item);
    }

menu();

}
