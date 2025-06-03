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
import { Alien } from "./Alien.js";
var Earth = /** @class */ (function (_super) {
    __extends(Earth, _super);
    function Earth() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pv = 100;
        return _this;
    }
    Earth.prototype.init = function () {
        this.setImage(Assets.getEarth());
        this.setVitesse(0);
        this.setWidth(this.getGame().CANVAS_WIDTH);
        this.setPosition(0, this.getGame().CANVAS_HEIGHT - this.getHeight());
    };
    Earth.prototype.collide = function (other) {
        if (other instanceof Alien) {
            this.hit();
            if (this.pv <= 0) {
                this.getGame().over("Earth have been DESTROYED !");
            }
            var alien = other;
            alien.die();
        }
    };
    Earth.prototype.hit = function () {
        this.pv--;
    };
    Earth.prototype.getPv = function () {
        return this.pv;
    };
    return Earth;
}(GameObject));
export { Earth };
