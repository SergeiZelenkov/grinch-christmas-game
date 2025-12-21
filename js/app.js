const blender = document.querySelector(".blender");
const satz = document.querySelector(".satz");
// skanword start
const cells = [...document.querySelectorAll(".cell")];
let activeCell = null;

// Klick auf eine Zelle
cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    // alte Auswahl entfernen
    if (activeCell) activeCell.classList.remove("active");

    // neue Auswahl setzen
    activeCell = cell;
    cell.classList.add("active");
  });
});

// Tastatureingaben abfangen
document.addEventListener("keydown", (e) => {
  if (!activeCell) return; // nichts gewählt

  // Nur 1 Zeichen pro Zelle
  if (e.key.length === 1 && e.key.match(/[A-Za-z0-9]/)) {
    activeCell.textContent = e.key.toUpperCase();
  }

  // Löschen
  if (e.key === "Backspace" || e.key === "Delete") {
    activeCell.textContent = "";
  }
});

// skanword finish
const body = document.querySelector(".body");

const inputCode = document.querySelector(".input-code");
const codeSenden = document.querySelector(".code-senden");

const buttonTitle = document.querySelector(".button-grinch-title");
const grinchTitle = document.querySelector(".grinch-title");

const winTitle = document.querySelector(".win-title");

buttonTitle.addEventListener("click", (e) => {
  e.preventDefault();

  grinchTitle.classList.toggle("grinch-title");

  setTimeout(() => {
    satz.innerHTML = `
    "Menschen… was für ein wunderbarer Grund, Weihnachten zu hassen"
    <img class="img-blender" 
         src="https://www.pngall.com/wp-content/uploads/14/The-Grinch-PNG-Images-HD.png" 
         alt="">
  `;
  }, 15000);

  setTimeout(() => {
    satz.innerHTML = `
    
    <img class="img-blender" 
         src="https://s2.gifyu.com/images/GRCH_cg-s_grinch_09.png" 
         alt="">"Das Geräusch, das ihr hört, ist der Klang meiner Geduld, die zu Ende geht"
  `;
  }, 30000);
});

const kugeln = [...document.querySelectorAll(".button")];
kugeln.forEach((kugel) =>
  setInterval(() => {
    (kugel.style.opacity = kugel.style.opacity == 0.5 ? 1 : 0.5), 2000;
  })
);

setInterval(() => {
  (codeSenden.style.opacity = codeSenden.style.opacity == 0.5 ? 1 : 0.5), 2000;
});

codeSenden.addEventListener("click", function () {
  const wert = inputCode.value;
  if (wert.toLowerCase() === "kisulik") {
    /*winTitle.classList.toggle("hide-title-win")*/
    winTitle.classList.remove("hide-title-win"); /*???*/
    inputCode.value = "";
    cells.forEach((cell) => {
      if (cell.className === "cell") {
        cell.textContent = "";
      }

      satz.innerHTML = `"Oh, schaut mal. Freude. Wie originell"<img class="img-blender" src="https://www.pngall.com/wp-content/uploads/14/The-Grinch-PNG-Images-HD.png" alt="">`;
    });
    setTimeout(() => {
      satz.innerHTML = `
    "Ich brauche Urlaub… von allen"
    <img class="img-blender" 
         src="https://www.pngall.com/wp-content/uploads/14/The-Grinch-PNG-Images-HD.png" 
         alt="">
  `;
    }, 15000);

    setTimeout(() => {
      satz.innerHTML = `
    "Max! Ich brauche ein Rentier… sofort"
    <img class="img-blender" 
         src="https://www.pngall.com/wp-content/uploads/14/The-Grinch-PNG-Images-HD.png" 
         alt="">
  `;
    }, 28000);
  }
});

const resetGame = function () {
  winTitle.classList.add("hide-title-win");
  grinchTitle.classList.toggle("grinch-title");
  satz.innerHTML = `<img class="img-blender" src="https://s2.gifyu.com/images/GRCH_cg-s_grinch_09.png" alt="">"Ich hab ein wunderbares, schreckliches Gefühl!"`;
};

winTitle.addEventListener("click", resetGame);

blender.addEventListener("click", resetGame);

setInterval(() => {
  (satz.style.opacity = satz.style.opacity == 0.5 ? 1 : 0.5), 5000;
});
