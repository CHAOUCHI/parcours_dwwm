var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Assets } from "../Assets.js";
import { GameObject } from "./GameObject.js";
var Alien = /** @class */ (function (_super) {
    __extends(Alien, _super);
    function Alien() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Called once
    Alien.prototype.init = function () {
        this.setImage(Assets.getAlien());
        var randomPosX = Math.random() * (this.getGame().CANVAS_WIDTH - this.getWidth());
        var randomPosY = -(Math.random() * this.getGame().CANVAS_HEIGHT);
        this.setPosition(randomPosX, randomPosY);
    };
    // Called each frame
    Alien.prototype.update = function () {
        this.getPosition().y += this.getVitesse() * Math.random();
    };
    // Called when a gameobject collide
    Alien.prototype.collide = function (other) {
        if (other == this.getGame().getPlayer()) {
            console.log("Alien hits Player");
            this.getGame().over("An alien ate the last defender(the player).");
        }
    };
    Alien.prototype.die = function () {
        this.destroy();
        this.getGame().decreaseAlienCount();
    };
    return Alien;
}(GameObject));
export { Alien };
