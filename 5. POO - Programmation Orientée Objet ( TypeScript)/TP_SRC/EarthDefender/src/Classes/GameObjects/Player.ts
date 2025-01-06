import { Input } from "../Input.js";
import { Assets } from "../Assets.js";
import { GameObject } from "./GameObject.js";

import { Laser } from "./Laser.js";

export class Player extends GameObject{
    private lastTimeShoot : number = 0;        
    private shootTimeInterval : number = 200;  // Minimum time between 2 laser shoots in ms.

    protected init():void{
        this.setImage(Assets.getPlayer());
        this.setVitesse(this.getVitesse()*4);
        this.setPosition(
            this.getGame().CANVAS_WIDTH/2-this.getWidth()/2,
            this.getGame().CANVAS_HEIGHT - this.getHeight() - 10
        );
    }

    protected update(): void{
        this.movesListener();
        this.shootLaserListener();
    }

    private movesListener() : void{
        //this.getPosition().x+=this.getVitesse() * Input.getAxisX();
        this.getPosition().x += this.getVitesse() * Math.random()*10 * Input.getAxisX();
    }
    
    private shootLaserListener() : void{
        if(
            Input.getIsShooting() 
            && 
            (
                (Date.now() - this.lastTimeShoot) >= this.shootTimeInterval
            )
        ){
            const laser = new Laser(this.getGame());
            laser.setPosition(
                this.getPosition().x + this.getWidth()/2,
                this.getPosition().y
            );
            this.getGame().instanciate(laser);
            this.lastTimeShoot = Date.now();
        }
    }

}