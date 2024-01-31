import homeContent from "./home.js";
import menuContent from "./menu.js";
import aboutContent from "./about.js";
import "./reset.css"
import "./style.css"
import icon from "./images/potato.png"

// Add an icon
const linkTag = document.createElement("link")
linkTag.rel = "icon"
linkTag.href = icon
const head = document.querySelector("head")
head.appendChild(linkTag)

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