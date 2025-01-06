import { Alien } from "./GameObjects/Alien.js";
import { GameObject } from "./GameObjects/GameObject.js";
import { Input } from "./Input.js";
import { Player } from "./GameObjects/Player.js";
import { Star } from "./GameObjects/Star.js";
import { Earth } from "./GameObjects/Earth.js";
import {Pomme} from "./GameObjects/Pomme.js";
export class Game{
    /**
     * --ATTRIBUTS ----------------------------------
     */
    /**
     * PUBLIC
     */
    public readonly CANVAS_WIDTH : number = 1300;
    public readonly CANVAS_HEIGHT : number = 600;
    
    /**
     * PRIVATE
     */
    private context: CanvasRenderingContext2D;
    private gameObjects : Array<GameObject> = [];
    private player : Player;
    private earth : Earth;
    private nbMaxAlien : number = 10;
    private nbRemainingAlien : number = this.nbMaxAlien;
    
    /**
     *-- METHODS ----------------------------------------------
     */

    /**
     * PUBLIC
     */

    constructor(){
        const canvas = document.querySelector("canvas");
        canvas.height = this.CANVAS_HEIGHT;
        canvas.width = this.CANVAS_WIDTH;
        this.context = canvas.getContext("2d");
    }

    public static GameObject(constructor : Function){
        console.log("GameObject decorator")
    }
    /**
     * Initialise le jeu
     */
    public start() : void{
        // Ajoute les étoiles de fond
        for (let i = 0; i < Math.random()*(100-20)+20; i++) {
            this.instanciate(new Star(this));
        }

        // Ajoute la terre
        this.earth = new Earth(this);
        this.instanciate(this.earth);

        // Ajoute les aliens
        for (let i = 0; i < this.nbMaxAlien; i++) {
            this.instanciate(new Alien(this));
        }

        // Ajoute le joueur
        this.player = new Player(this);
        this.instanciate(this.player);

        //this.instanciate(new Pomme(this));
       
        // Ecoute les input de l'utilisateur
        Input.listenPlayerInput();

        // Démarre la boucle de jeu
        this.gameLoop();
    }

    /**
     * Ajoute un gameobject dans le tableau de gameobject.
     * Le tableau est parcouru dans la gameloop tout les 10ms et les gameobjects sont affiché dans l'ordre d'ajout.
     * @param newGameObject Le GameObject à ajouter.
     */
    public instanciate(newGameObject : GameObject) : void{
        this.gameObjects.push(newGameObject);
    }

    /**
     * Retire le gameobject du tableau de gameobject ainsi il ne sera plus pris en compte dans la gameloop et ne sera pas affiché.
     * @param gameObjectToDestroy Le gameobject à détruire
     */
    public destroy(gameObjectToDestroy : GameObject) : void{
        this.gameObjects.forEach((gameObject,i)=>{
            if(gameObjectToDestroy === gameObject){
                this.gameObjects.splice(i,1);
            }
        });
    }

    /**
     * Décrémente le compteur d'alien de 1.
     */
    public decreaseAlienCount() : void{
        this.nbRemainingAlien--;
        if(this.nbRemainingAlien <= 0){
            // Si il n'y à plus d'alien le joueur à gagné.
            this.win();
        }
    }

    /**
     * Termine la partie et recharge la page après avoir informé le joueur de sa défaite.
     * @param reason Une string qui décris la raison de la victoire du joueur.
     */
    public over(reason : string = "You are bad at video game.") : void{
        alert("GAME OVER : "+reason);
        location.reload();
    }
    /**
     * Termine la partie et recharche la page après avoir informé le joueur de sa victoire.
     */
    public win() : void{
        alert("WIN !");
        location.reload();
    }

    //Getter and Setter
    public getGameObjects() : readonly GameObject[]{
        return this.gameObjects; 
    } 
    public getPlayer() : Player{
        return this.player;
    }

    /**
     * PRIVATE
     */

    /**
     * Affiche un gameObject dans le canvas
     * @param gameObject Le gameobject à afficher
     */
    private draw(gameObject : GameObject){
        this.context.drawImage(
            gameObject.getImage(),
            gameObject.getPosition().x,
            gameObject.getPosition().y,
            gameObject.getWidth(),
            gameObject.getHeight()
        );
    }
    /**
     * Execute la même suite d'action tout les 10ms. Ces actions sont :
     * - Mettre à jour les gameObjects avec leurs méthodes GameObject.prototype.update()
     * - Afficher les gameobjects
     * - Vérifie les collision entre gameObject et appel la fonction GameObject.prototype.collide quand une collision se produit.
     * - Met à jour l'UI.
     */
    private gameLoop(){
        // Défini un interval d'appel d'une fonction callback
        setInterval(()=>{
            // Clear context
            this.context.clearRect(0,0,this.CANVAS_WIDTH,this.CANVAS_HEIGHT);
            this.context.fillStyle = "#141414";
            this.context.fillRect(0,0,this.CANVAS_WIDTH,this.CANVAS_HEIGHT);

            // For each gameobjects
            this.gameObjects.forEach((gameObject,i)=>{
                // Update the gameobject
                gameObject.callUpdate();
                // Draw the gameObject
                this.draw(gameObject);
                // Check for collision 
                this.checkCollisionBetweenAllGameobjectToOne(gameObject);
            });

            this.updateUI();
        },10); // Appel de la fonction toute les 10ms, plus le délai est faible plus le jeu consomme de ressources.
    }

    /**
     * Check if the provided gameObject collide with any instanciate gameObjects.
     * @param gameObject 
     */
    private checkCollisionBetweenAllGameobjectToOne(gameObject : GameObject){
        // Pour chaque gameObjects
        this.gameObjects.forEach((other)=>{
            // Si l'itérateur other n'est pas le gameObject fournit en paramètre.
            if(other !== gameObject){
                // Si le gameObject superpose, même partiellement l'autre gameObject
                if(gameObject.overlap(other)){
                    // Appel de la fonction GameObject.prototype.collide
                    gameObject.callCollide(other);
                }
            }
        });
    }

    /**
     * Met à jour l'UI
     */
    private updateUI(){
        const remainingAlien = <HTMLElement>document.querySelector(".remain_alien");
        if(remainingAlien)
            remainingAlien.innerText = `${this.nbRemainingAlien} / ${this.nbMaxAlien}`;
        else
            throw Error("No html tag named remaining_alien.");

            const earthPvTag = <HTMLElement>document.querySelector(".earth_pv");
        if(earthPvTag)
            earthPvTag.innerText = this.earth.getPv().toString();
        else
            throw Error("No html tag for earth PV exist.");
    }
}