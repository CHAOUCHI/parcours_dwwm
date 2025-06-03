import { Assets } from "../Assets.js";
import { GameObject } from "./GameObject.js";

export class Pomme extends GameObject{
    protected init(){
        this.setPosition(this.getGame().CANVAS_WIDTH/2,10);
        this.setImage(Assets.getPomme());
    }

    protected update(){
        this.setPosition(this.getPosition().x,++this.getPosition().y);
    }

    protected collide(other: GameObject): void {
        
    }
}