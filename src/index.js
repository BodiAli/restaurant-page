import homeContent from "./home.js";
import menuContent from "./menu.js";
import aboutContent from "./about.js";
import "./reset.css"
import "./style.css"

const button1 = document.querySelector("button:nth-of-type(1)")
const button2 = document.querySelector("button:nth-of-type(2)")
const button3 = document.querySelector("button:nth-of-type(3)")
document.addEventListener("DOMContentLoaded", homeContent)
button1.addEventListener("click", generateHome)
button2.addEventListener("click",generateMenu)
button3.addEventListener("click", generateAbout)

function generateHome() {
  const divContent = document.getElementById("content")
  divContent.innerHTML = ""
  homeContent()  
}
function generateMenu(){
  const divContent = document.getElementById("content")
  divContent.innerHTML = ""
  menuContent()
}
function generateAbout() {
  const divContent = document.getElementById("content")
  divContent.innerHTML = ""
  aboutContent()
}