import { Assets } from "../Assets.js";
import { Alien } from "./Alien.js";
import { GameObject } from "./GameObject.js";
import { Audio, Track } from "../Audio.js";

export class Laser extends GameObject{
    protected init(): void {
        this.setImage(Assets.getLaser());
        Audio.play(Track.LASER);
    }
    protected update() : void{
        // The laser moves
        this.getPosition().y-=this.getVitesse();
        //The laser is destroyed
        if(this.getPosition().y < 0){
            this.destroy();
        }
    }
    protected collide(other: GameObject): void {
        if(other instanceof Alien){
            const alien = <Alien>other;
            alien.die();
            // Destory laser
            this.destroy();
            console.log("Destroy laser");
        }
    }
}