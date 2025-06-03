import { Assets } from "../Assets.js";
import { GameObject } from "./GameObject.js";
import { Alien } from "./Alien.js";

export class Earth extends GameObject{
    private pv : number = 100;
    
    protected init(): void {
        this.setImage(Assets.getEarth());
        this.setVitesse(0);
        this.setWidth(this.getGame().CANVAS_WIDTH);
        this.setPosition(
            0,
            this.getGame().CANVAS_HEIGHT - this.getHeight()
        );
    }

    protected collide(other: GameObject): void {
        if(other instanceof Alien){
            this.hit();
            if(this.pv <= 0){
                this.getGame().over("Earth have been DESTROYED !");
            }
            const alien = <Alien>other;
            alien.die();
        }
    }

    private hit() : void{
        this.pv--;
    }
    public getPv() : number{
        return this.pv;
    }
}