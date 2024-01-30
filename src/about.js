export default function aboutContent() {
  const divContent = document.getElementById("content");
  const h1 = document.createElement("h1");
  h1.textContent = "About";
  const pAbout = document.createElement("p");
  pAbout.textContent =
    "PuyTato was invented in 1988, it got it's popularity from the taste of it's unique and delicious potatoes";
  const h2 = document.createElement("h2");
  h2.textContent = "Contact Us";
  const divParagraph = document.createElement("div");
  const spanAbout = document.createElement("span");
  spanAbout.textContent = "Email:";
  const pContact = pAbout.cloneNode(false);
  pContact.textContent = "totallyrealemail@notfake.com";
  const spanAbout2 = spanAbout.cloneNode(false);
  spanAbout2.textContent = "Number:";
  const pContact2 = pAbout.cloneNode(false);
  pContact2.textContent = "555-555-5555";
  const spanAbout3 = spanAbout.cloneNode(false);
  spanAbout3.textContent = "Find Us At:";
  const pContact3 = document.createElement("a");
  pContact3.textContent = '"https://github.com/BodiAli/restaurant-page"';
  pContact3.setAttribute("href", "https://github.com/BodiAli/restaurant-page");
  pContact3.setAttribute("target", "_blank");
  h1.classList.add("about");
  pAbout.classList.add("p-about");
  divParagraph.classList.add("content-about");
  divContent.appendChild(h1);
  divContent.appendChild(pAbout);
  divContent.appendChild(h2);
  divParagraph.appendChild(spanAbout);
  divParagraph.appendChild(pContact);
  divParagraph.appendChild(spanAbout2);
  divParagraph.appendChild(pContact2);
  divParagraph.appendChild(spanAbout3);
  divParagraph.appendChild(pContact3);
  divContent.appendChild(divParagraph);
}
