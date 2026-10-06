const newCharacter = document.createElement("article");
newCharacter.classList.add("character");

const newBackground = document.createElement("img");
newBackground.classList.add("background");
newBackground.src = "img/backgrounds/outdoor-1.jpg";
newBackground.alt = "";

const newPortrait = document.createElement("img");
newPortrait.classList.add("figure");
newPortrait.src = "img/adventurers/amisandra/1-f.png";
newPortrait.alt = "";

const newFooter = document.createElement("footer");

const newCharName = document.createElement("h3");
newCharName.innerText = "A'misandra";

newCharacter.appendChild(newBackground);
newCharacter.appendChild(newPortrait);
newCharacter.appendChild(newFooter);

newFooter.appendChild(newCharName);

const gallery = document.querySelector("#gallery");
gallery.appendChild(newCharacter);
