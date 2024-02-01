export default function homeContent() {
  const divContent = document.getElementById("content");
  const h1 = document.createElement("h1");
  h1.textContent = "Welcome to our official PuyTato site!";
  const h2 = document.createElement("h2");
  h2.textContent = "Where You will find and order the best potatoes in the world of potatoes!!!";
  const divParagraph1 = document.createElement("div");
  divParagraph1.classList.add("paragraph");
  const paragraph1 = document.createElement("p");
  const divParagraph2 = divParagraph1.cloneNode(false);
  const h3 = document.createElement("h3");
  h3.textContent = "Working Hours";
  const ul = document.createElement("ul");
  const li1 = document.createElement("li");
  const li2 = li1.cloneNode(false);
  const li3 = li1.cloneNode(false);
  const li4 = li1.cloneNode(false);
  const li5 = li1.cloneNode(false);
  const li6 = li1.cloneNode(false);
  const li7 = li1.cloneNode(false);
  li1.textContent = "Sunday: 1pm - 12pm";
  li2.textContent = "Monday: 9am - 12pm";
  li3.textContent = "Tuesday: 9am - 12pm";
  li4.textContent = "Wednesday: 9am - 12pm";
  li5.textContent = "Thursday: 9am - 12pm";
  li6.textContent = "Friday: 11am - 12pm";
  li7.textContent = "Saturday: 11am - 12pm";
  const h3Ramadan = h3.cloneNode(false);
  h3Ramadan.textContent = "Working Hours In Ramadan";
  const ulRamadan = ul.cloneNode(false);
  const li1Ramadan = li1.cloneNode(false);
  const li2Ramadan = li1.cloneNode(false);
  const li3Ramadan = li1.cloneNode(false);
  const li4Ramadan = li1.cloneNode(false);
  const li5Ramadan = li1.cloneNode(false);
  const li6Ramadan = li1.cloneNode(false);
  const li7Ramadan = li1.cloneNode(false);
  li1Ramadan.textContent = "Sunday: 1pm - 3am";
  li2Ramadan.textContent = "Monday: 1pm - 3am";
  li3Ramadan.textContent = "Tuesday: 1pm - 3am";
  li4Ramadan.textContent = "Wednesday: 1pm - 3am";
  li5Ramadan.textContent = "Thursday: 1pm - 3am";
  li6Ramadan.textContent = "Friday: 1pm - 3am";
  li7Ramadan.textContent = "Saturday: 1pm - 3am";
  const divParagraph3 = divParagraph1.cloneNode(false);
  const h3Location = h3.cloneNode(false);
  h3Location.textContent = "Location";
  const pLocation = paragraph1.cloneNode(false);
  pLocation.textContent = "123 Bake Street, Building 2P, Ovenville, Los Kitchen, 12345";

  divContent.appendChild(h1);
  divContent.appendChild(h2);
  divContent.appendChild(divParagraph2);
  divParagraph2.appendChild(h3);
  divParagraph2.appendChild(ul);
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  ul.appendChild(li4);
  ul.appendChild(li5);
  ul.appendChild(li6);
  ul.appendChild(li7);
  divParagraph2.appendChild(h3Ramadan);
  divParagraph2.appendChild(ulRamadan);
  ulRamadan.appendChild(li1Ramadan);
  ulRamadan.appendChild(li2Ramadan);
  ulRamadan.appendChild(li3Ramadan);
  ulRamadan.appendChild(li4Ramadan);
  ulRamadan.appendChild(li5Ramadan);
  ulRamadan.appendChild(li6Ramadan);
  ulRamadan.appendChild(li7Ramadan);
  divContent.appendChild(divParagraph3);
  divParagraph3.appendChild(h3Location);
  divParagraph3.appendChild(pLocation);
}