import { Assets } from "../Assets.js";
import { Game } from "../Game.js";
import { Position } from "../../Interfaces/Position.js";

export class GameObject{

    //--ATTRIBUTS-----------------------------------

    /**
     * PRIVATE
     * Callable only by the class GameObject
     */

    private image : HTMLImageElement;
    private height : number;
    private width : number;
    private vitesse : number;
    private position : Position;
    private game : Game; 


    //--METHODS------------------------------------

    /**
     * PUBLIC
     * Callable by anybody 
     */

    constructor(game : Game){
        this.game = game;
        this.position = {x : 0, y: 0};      // Default position is on top left corner [0,0]
        this.vitesse = 2;
        this.setImage(Assets.getDefault());
        // Appel la méthode protected init, 
        // cette méthode est sensé être modifiée par les classes enfants (Alien, Player, ...)
        this.init();         
    }

    /**
     * Ask the game to destroy this gameObject
     */
    public destroy() : void{
        this.game.destroy(this);
    }
    /**
     * Check if the gameObject overlaps another gameobject.
     * @param other The GameObject to check the overlap with.
     * @returns True if the other GameObject overlaps, false otherwise.
     */
    public overlap(other : GameObject) : boolean{
        if(
            // Check x axis overlap
            (
                other.left() <= this.left() && this.left() <= other.right()
                ||
                other.left() <= this.right() && this.right() <= other.right()
                ||
                this.left() <= other.left() && other.left() <= this.right()
                ||
                this.left() <= other.right() && other.right() <= this.right()
            )
            &&
            (
                // check y axis overlap
                other.top() <= this.top() && this.top() <= other.bottom()
                ||
                other.top() <= this.bottom() && this.bottom() <= other.bottom()
                ||
                this.top() <= other.top() && other.top() <= this.bottom()
                ||
                this.top() <= other.bottom() && other.bottom() <= this.bottom()
            )
        )
        {
            return true;        // They overlap
        }
        else{
            return false;       // They do not overlap
        }
    }
    /**
     * Mise à jour du game object
     * Cette méthode sera appelée par l'objet Game à chaque tour de la boucle de jeu dans la fonction Game.prototype.gameLoop().
     */
    public callUpdate() : void{
        this.update();
    }
    /**
     * Averti le game object qu'un autre game object le touche et lui fournit ce game object.
     * 
     * @param other The other GameObject that collide this gameObject.
     */
    public callCollide(other : GameObject) : void{
        this.collide(other);
    }
    // Getter and setter 
    public getGame() : Game{
        return this.game;
    }
    public getImage() : HTMLImageElement{
        return this.image;
    }
    public setImage(image : HTMLImageElement) : void{
        this.image = image;
        this.height = this.image.height;
        this.width = this.image.width;
    }
    public getPosition() : Position{
        return this.position;
    }
    public setPosition(x : number,y:number) : void{
        this.position = {x,y};
    }
    public getWidth() : number{
        return this.width;
    }
    public setWidth(width : number) : void{
        this.width = width;
    }
    public getHeight() : number{
        return this.height;
    }
    public setHeight(height : number) : void{
        this.height = height;
    }
    public getVitesse() : number{
        return this.vitesse;
    }
    public setVitesse(vitesse : number) : void{
        this.vitesse = vitesse;
    }
    /**Utility methods for gameobject position */
    public top() : number{
        return this.position.y;
    }
    public bottom() : number{
        return this.position.y + this.getHeight();
    }
    public left() : number{
        return this.position.x;
    }
    public right() : number{
        return this.position.x + this.getWidth();
    }

    /**
     * PROTECTED
     * Callable only by the class GameObject and all its childs.
     */
    /**
     * Initialise le GameObject.
     * Par défaut, cette methode ne fait rien mais est appelée à la fin du constructeur de GameObject.
     * Cette méthode est pensée pour être modifier par polymorphisme par les classes enfants.
     */
    protected init() : void{}
    /**
     * Met à jour le GameObject
     * Cette methode est appelée régulièrement à chaque tour de la boucle de jeu.(Environ toutes les 10ms)
     * Par défaut ne fait rien mais cette méthode est pensée pour être modifier par polymorphisme par les classes enfants.
     */
    // Called each frame
    protected update() : void{}

    // Called on collition
    protected collide(other : GameObject) : void{}
}