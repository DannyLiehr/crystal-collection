function switchMode(){
    let root = document.querySelector(':root');
    let modeSymbol = !root.classList.contains("darkmode") ? '☀️' : '🌙';
    if (root.classList.contains("darkmode")){
        root.classList.remove("darkmode");
        root.classList.add("lightmode");
    } else {
        root.classList.add("darkmode");
        root.classList.remove("lightmode");
    }
    document.querySelector("#switch-mode").textContent = modeSymbol;
}

// #region Crystal Info --------------------------------------------------------
const colours = {
    red: "red",
    orange: "orange",
    yellow: "yellow",
    green: "green",
    blue: "blue",
    lightBlue: "light-blue",
    cyan: "cyan",
    purple: "purple",
    pink: "pink",
    brown: "brown",
    grey: "grey",
    black: "black",
    white: "white",
    rainbow: "rainbow",
};

/**
 * Represents a crystal.
 */
class Crystal {
    /**
     * 
     * @param {string} name The name of the crystal.
     * @param {string} img An image URL of the crystal.
     * @param {string} desc A description of the crystal.
     * @param {string} colour The crystal's colour.
     * @param {boolean} natural If the crystal is natural or man-made.
     * @param {boolean} fave If this crystal is my favourite.
     * @param {number} number Number of crystals of this type that I own.
     * @param {number} fave_rating How much I like this crystal from a 1-5 scale.
     */
    constructor(name, img, desc, colour, natural, fave = false, quantity = 0, fave_rating = 2) {
        this.name = name;
        this.img = img;
        this.desc = desc;
        this.colour = colour;
        this.natural = natural;
        this.fave = fave;
        this.quantity = quantity;
        this.fave_rating = fave_rating;
    }

    displayImg() {
        return `<div style="width:100%; margin:auto; text-align:center;">
                    <img src="https://placehold.co/100" style="display:inline-block;">
                </div>`;
    }    

    /**
     * Displays information about the crystal.
     * @returns {string} A string with the crystal's information.
     */
    displayInfo() {
        // return `${this.name}: ${this.desc} | Natural: ${this.natural} | Favorite: ${this.fave} (Rating: ${this.fave_rating})`;
        return `<h3>${this.name}</h3>`
    }
    /**
     * Creates a rating string for this crystal.
     * @returns {string} A rating string of 1-5, with filled in stars to match.
     */
    showRating(){
        return `<span class="gold">${("⭑").repeat(this.fave_rating)}<span class="unfilled">${("⭑").repeat(5-this.fave_rating)}</span></span>`;
    }

    showNatural(){
        // 💚 vs 💔
        let symbol = this.natural ? "💎" : "🏭";
        let isNatural = this.natural ? "is" : "isn't";
        let isManMade = this.natural ? "forms naturally in the earth" : "is formed or modified through human processes";
        let chipClass = this.natural ? "success" : "error";

        return `<div class="chip ${chipClass}">${symbol} This crystal ${isNatural} natural. It ${isManMade}.</div>`;
    }
}

// Creating instances of Crystal
const crystals = [
    new Crystal("Agate", "", "", colours.brown, true, false, 1, 2),
    new Crystal("Amethyst", "", "", colours.purple, true, true, 13, 4),
    new Crystal("Angel Aura Quartz", "", "", colours.rainbow, false, false, 4, 1),
    new Crystal("Aquamarine", "", "", colours.lightBlue, true, true, 1, 5),
    new Crystal("Blue Aventurine", "", "", colours.lightBlue, true, false, 1, 3),
    new Crystal("Carnelian", "", "", colours.brown, true, false, 1, 3),
    new Crystal("Desert Rose", "", "This, like satin spar, is also made from selenite.", colours.white, true, false, 4, 3),
    new Crystal("Quartz (Clear)", "", "", colours.white, true, true, 9, 4),
    new Crystal("Emerald", "", "", colours.green, true, true, 4, 4),
    new Crystal("Geode", "", "", colours.white, true, true, 4, 5),
    new Crystal("Blue Goldstone", "", "", colours.blue, false, true, 6, 5),
    new Crystal("Red Goldstone", "", "", colours.red, false, false, 2, 3),
    new Crystal("Hematite", "", "", colours.black, true, false, 1, 2),
    new Crystal("Blue Labradorite", "", "", colours.blue, true, true, 1, 4),
    new Crystal("Lapis Lazuli", "", "", colours.blue, true, true, 2, 5),
    new Crystal("Obsidian", "", "", colours.black, true, false, 1, 4),
    new Crystal("Opalite", "", "", colours.rainbow, false, false, 6, 1),
    new Crystal("Pyrite", "", "", colours.yellow, true, true, 3, 4),
    new Crystal("Rainbow Moonstone", "", "", colours.rainbow, true, true, 1, 5),
    new Crystal("Red Jasper", "", "", colours.red, true, false, 1, 3),
    new Crystal("Rose Quartz", "", "", colours.pink, true, true, 2, 4),
    new Crystal("Sandstone", "", "", colours.brown, true, false, 1, 3),
    new Crystal("Satin Spar/Selenite", "", "", colours.white, true, true, 1, 5),
    new Crystal("Sodalite", "", "", colours.blue, true, true, 2, 4),
    new Crystal("Staurolite", "", "", colours.brown, true, false, 2, 3),
    new Crystal("Tiger's Eye", "", "", colours.orange, true, false, 11, 4),
];
// #endregion ------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#catalogue").innerHTML = "";
    crystals.forEach(crystal => {
        let card = document.createElement("div");
        card.innerHTML = `
        <div style="text-align:center; margin: auto;">
        ${crystal.displayInfo()}
        ${crystal.displayImg()}
        ${crystal.showRating()}
        </div>
        ${crystal.showNatural()}
        `;
        card.classList.add("card")
        card.classList.add(crystal.colour);
        document.querySelector("#catalogue").appendChild(card);
    });
    document.querySelector("#crystal-inv").textContent = crystals.length;
});
