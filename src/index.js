import "./style.css";
import { home } from "./home";
import { menu } from "./menu";
import { contact } from "./contact";

const template = document.querySelector(".template");
home(template);

document.addEventListener("click", (e)=>{
    if (e.target.id == "home"){
        home(template);
    } else if (e.target.id == "menu"){
        menu(template);
    } else if (e.target.id == "contact"){
        contact(template)
    }
})