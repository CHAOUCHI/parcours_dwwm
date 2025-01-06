import { Assets } from "../Assets.js";
import { Game } from "../Game.js";
import { GameObject } from "./GameObject.js";

export class Star extends GameObject{
    protected init() : void{
        this.setImage(Assets.getStar());
        this.setPosition(
            Math.random() * this.getGame().CANVAS_WIDTH,
            Math.random() * this.getGame().CANVAS_HEIGHT
        );
        this.setVitesse(Math.random()*0.3);
    }

    protected update(): void {
        this.getPosition().y+=this.getVitesse();

        if(this.getPosition().y > this.getGame().CANVAS_HEIGHT){
            this.setPosition(
                Math.random() * this.getGame().CANVAS_WIDTH,
                -10
            );
        }
    }
}
