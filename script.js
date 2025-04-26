// Basic JavaScript
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
     * @param {number} fave_rating How much I like this crystal from a 1-5 scale.
     */
    constructor(name, img, desc, colour, natural, fave = false, fave_rating = 2) {
        this.name = name;
        this.img = img;
        this.desc = desc;
        this.colour = colour;
        this.natural = natural;
        this.fave = fave;
        this.fave_rating = fave_rating;
    }

    /**
     * Displays information about the crystal.
     * @returns {string} A string with the crystal's information.
     */
    displayInfo() {
        return `${this.name}: ${this.desc} | Natural: ${this.natural} | Favorite: ${this.fave} (Rating: ${this.fave_rating})`;
    }
}

// Creating instances of Crystal
const crystals = [
    new Crystal("Agate", "", "", colours.brown, true, false, 1),
    new Crystal("Amethyst", "", "", colours.purple, true, true, 4),
    new Crystal("Angel Aura Quartz", "", "", colours.rainbow, false, false, 1),
    new Crystal("Aquamarine", "", "", colours.lightBlue, true, true, 5),
    new Crystal("Blue Aventurine", "", "", colours.lightBlue, true, false, 3),
    new Crystal("Carnelian", "", "", colours.brown, true, false, 3),
    new Crystal("Quartz (Clear)", "", "", colours.white, true, true, 4),
    new Crystal("Emerald", "", "", colours.green, true, true, 4),
    new Crystal("Geode", "", "", colours.white, true, true, 5),
    new Crystal("Blue Goldstone", "", "", colours.blue, false, true, 5),
    new Crystal("Red Goldstone", "", "", colours.red, false, false, 3),
    new Crystal("Hematite", "", "", colours.black, true, false, 2),
    new Crystal("Blue Labradorite", "", "", colours.blue, true, true, 4),
    new Crystal("Lapis Lazuli", "", "", colours.blue, true, true, 5),
    new Crystal("Obsidian", "", "", colours.black, true, false, 4),
    new Crystal("Opalite", "", "", colours.rainbow, false, false, 1),
    new Crystal("Pyrite", "", "", colours.yellow, true, true, 4),
    new Crystal("Rainbow Moonstone", "", "", colours.rainbow, true, true, 5),
    new Crystal("Red Jasper", "", "", colours.red, true, false, 3),
    new Crystal("Rose Quartz", "", "", colours.pink, true, true, 4),
    new Crystal("Sandstone", "", "", colours.brown, true, false, 3),
    new Crystal("Satin Spar/Selenite", "", "", colours.white, true, true, 5),
    new Crystal("Sodalite", "", "", colours.blue, true, true, 4),
    new Crystal("Staurolite", "", "", colours.brown, true, false, 3),
    new Crystal("Tiger's Eye", "", "", colours.orange, true, false, 4),
    new Crystal("Turquoise", "", "", colours.cyan, true, false, 4)
];
// #endregion ------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#list").innerHTML = "";
    crystals.forEach(crystal => {
        let list = document.createElement("li");
        list.textContent = crystal.displayInfo();
        list.classList.add(crystal.colour);
        document.querySelector("#list").appendChild(list);
    });
    document.querySelector("#crystal-inv").textContent = crystals.length;
});
