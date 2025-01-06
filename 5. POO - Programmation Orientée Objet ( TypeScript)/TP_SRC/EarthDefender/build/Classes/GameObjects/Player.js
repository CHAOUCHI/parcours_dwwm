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
import { Input } from "../Input.js";
import { Assets } from "../Assets.js";
import { GameObject } from "./GameObject.js";
import { Laser } from "./Laser.js";
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lastTimeShoot = 0;
        _this.shootTimeInterval = 200; // Minimum time between 2 laser shoots in ms.
        return _this;
    }
    Player.prototype.init = function () {
        this.setImage(Assets.getPlayer());
        this.setVitesse(this.getVitesse() * 4);
        this.setPosition(this.getGame().CANVAS_WIDTH / 2 - this.getWidth() / 2, this.getGame().CANVAS_HEIGHT - this.getHeight() - 10);
    };
    Player.prototype.update = function () {
        this.movesListener();
        this.shootLaserListener();
    };
    Player.prototype.movesListener = function () {
        this.getPosition().x += this.getVitesse() * Input.getAxisX();
    };
    Player.prototype.shootLaserListener = function () {
        if (Input.getIsShooting()
            &&
                ((Date.now() - this.lastTimeShoot) >= this.shootTimeInterval)) {
            var laser = new Laser(this.getGame());
            laser.setPosition(this.getPosition().x + this.getWidth() / 2, this.getPosition().y);
            this.getGame().instanciate(laser);
            this.lastTimeShoot = Date.now();
        }
    };
    return Player;
}(GameObject));
export { Player };
