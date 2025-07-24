// src/index.js
import "./styles.css";
import { buildHomePage } from "./homepage.js";
import { buildMenuPage } from "./menu.js";
import { buildAboutPage } from "./about.js";

buildHomePage();

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        switchPage(button.id);
    })
})

function switchPage(page) {
    clearContent();
    switch(page) {
        case "home":
            buildHomePage();
            break;
        case "menu":
            buildMenuPage();
            break;
        case "about":
            buildAboutPage();
            break;
    }
}

function clearContent() {
    const content = document.querySelector("#content");
    content.innerHTML = "";
}