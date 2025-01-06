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
import { Alien } from "./Alien.js";
import { GameObject } from "./GameObject.js";
import { Audio, Track } from "../Audio.js";
var Laser = /** @class */ (function (_super) {
    __extends(Laser, _super);
    function Laser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Laser.prototype.init = function () {
        this.setImage(Assets.getLaser());
        Audio.play(Track.LASER);
    };
    Laser.prototype.update = function () {
        // The laser moves
        this.getPosition().y -= this.getVitesse();
        //The laser is destroyed
        if (this.getPosition().y < 0) {
            this.destroy();
        }
    };
    Laser.prototype.collide = function (other) {
        if (other instanceof Alien) {
            var alien = other;
            alien.die();
            // Destory laser
            this.destroy();
            console.log("Destroy laser");
        }
    };
    return Laser;
}(GameObject));
export { Laser };
