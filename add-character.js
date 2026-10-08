function addCharacter(characterName) {
  const characterSlug = characterName.toLowerCase().replace("'", "");

  const newCharacter = document.createElement("article");
  newCharacter.classList.add("character");

  const newBackground = document.createElement("img");
  newBackground.classList.add("background");
  newBackground.src = "img/backgrounds/outdoor-1.jpg";
  newBackground.alt = "";

  const newPortrait = document.createElement("img");
  newPortrait.classList.add("figure");
  newPortrait.src = "img/adventurers/" + characterSlug + "/1-f.png";
  newPortrait.alt = "";

  const newFooter = document.createElement("footer");

  const newCharName = document.createElement("h3");
  newCharName.innerText = characterName;

  newCharacter.appendChild(newBackground);
  newCharacter.appendChild(newPortrait);
  newCharacter.appendChild(newFooter);

  newFooter.appendChild(newCharName);

  const gallery = document.querySelector("#gallery");
  gallery.appendChild(newCharacter);
}

const adventurers = ["A'misandra", "Lewto", "Nazuna", "Olber", "Zaldor"];

for (let i = 0; i < adventurers.length; i++) {
  addCharacter(adventurers[i]);
}

for (let adventurer of adventurers) {
  addCharacter(adventurer);
}

const buttonTag = document.querySelector("button");
buttonTag.addEventListener("click", function () {
  const inputTag = document.querySelector("input");
  addCharacter(inputTag.value);
});
