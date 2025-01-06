import { Assets } from "../Assets.js";
import { GameObject } from "./GameObject.js";

export class Alien extends GameObject{
    // Called once
    protected init() : void{
        this.setImage(Assets.getAlien());
        const randomPosX = Math.random() * (this.getGame().CANVAS_WIDTH - this.getWidth());
        const randomPosY = -(Math.random() * this.getGame().CANVAS_HEIGHT);
        this.setPosition(
            randomPosX,
            randomPosY
        );
    }
    // Called each frame
    protected update() : void{
        this.getPosition().y+=this.getVitesse()*Math.random();
    }

    // Called when a gameobject collide
    protected collide(other : GameObject) : void {
        if(other == this.getGame().getPlayer()){
            console.log("Alien hits Player");
            this.getGame().over("An alien ate the last defender(the player).");
        }
    }

    public die() : void{
        this.destroy();
        this.getGame().decreaseAlienCount();
    }
}