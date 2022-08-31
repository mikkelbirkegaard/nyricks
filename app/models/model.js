 import Inventory from "../utils/inventoryClass.js";

 export default class Model {
    constructor(){
        this.guitarList = new Inventory
        this.guitarList.addGuitar("34-343", 3125.76, "Gibson", "Les Paul", "Electric", "Mable", "Walnut");

        this.guitarList.addGuitar("54-343", 1500.00, "Gibson", "Les Paul", "Electric", "Mable", "Walnut");

        this.guitarList.addGuitar("84-343", 4550.76, "Gibson", "Les Paul", "Electric", "Mable", "Walnut");

        this.guitarList.addGuitar("94-343", 2122.76, "Fender", "Les Paul", "Electric", "Mable", "Walnut");

        this.guitarList.addGuitar("35-643", 8000.00, "Gibson", "Les Paul", "Electric", "Mable", "Walnut");

        this.guitarList.addGuitar("24-343", 5800.00, "Yamaha", "Les Paul", "Electric", "Mable", "Walnut");

        this.guitarList.addGuitar("14-343", 5000.00, "Fender", "Les Paul", "Electric", "Mable", "Walnut");
    }
 }