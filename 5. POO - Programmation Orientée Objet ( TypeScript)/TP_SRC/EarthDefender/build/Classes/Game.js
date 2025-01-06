import { Alien } from "./GameObjects/Alien.js";
import { Input } from "./Input.js";
import { Player } from "./GameObjects/Player.js";
import { Star } from "./GameObjects/Star.js";
import { Earth } from "./GameObjects/Earth.js";
import { Pomme } from "./GameObjects/Pomme.js";
var Game = /** @class */ (function () {
    /**
     *-- METHODS ----------------------------------------------
     */
    /**
     * PUBLIC
     */
    function Game() {
        /**
         * --ATTRIBUTS ----------------------------------
         */
        /**
         * PUBLIC
         */
        this.CANVAS_WIDTH = 1300;
        this.CANVAS_HEIGHT = 600;
        this.gameObjects = [];
        this.nbMaxAlien = 10;
        this.nbRemainingAlien = this.nbMaxAlien;
        var canvas = document.querySelector("canvas");
        canvas.height = this.CANVAS_HEIGHT;
        canvas.width = this.CANVAS_WIDTH;
        this.context = canvas.getContext("2d");
    }
    Game.GameObject = function (constructor) {
        console.log("GameObject decorator");
    };
    /**
     * Initialise le jeu
     */
    Game.prototype.start = function () {
        // Ajoute les étoiles de fond
        for (var i = 0; i < Math.random() * (100 - 20) + 20; i++) {
            this.instanciate(new Star(this));
        }
        // Ajoute la terre
        this.earth = new Earth(this);
        this.instanciate(this.earth);
        // Ajoute les aliens
        for (var i = 0; i < this.nbMaxAlien; i++) {
            this.instanciate(new Alien(this));
        }
        // Ajoute le joueur
        this.player = new Player(this);
        this.instanciate(this.player);
        this.instanciate(new Pomme(this));
        // Ecoute les input de l'utilisateur
        Input.listenPlayerInput();
        // Démarre la boucle de jeu
        this.gameLoop();
    };
    /**
     * Ajoute un gameobject dans le tableau de gameobject.
     * Le tableau est parcouru dans la gameloop tout les 10ms et les gameobjects sont affiché dans l'ordre d'ajout.
     * @param newGameObject Le GameObject à ajouter.
     */
    Game.prototype.instanciate = function (newGameObject) {
        this.gameObjects.push(newGameObject);
    };
    /**
     * Retire le gameobject du tableau de gameobject ainsi il ne sera plus pris en compte dans la gameloop et ne sera pas affiché.
     * @param gameObjectToDestroy Le gameobject à détruire
     */
    Game.prototype.destroy = function (gameObjectToDestroy) {
        var _this = this;
        this.gameObjects.forEach(function (gameObject, i) {
            if (gameObjectToDestroy === gameObject) {
                _this.gameObjects.splice(i, 1);
            }
        });
    };
    /**
     * Décrémente le compteur d'alien de 1.
     */
    Game.prototype.decreaseAlienCount = function () {
        this.nbRemainingAlien--;
        if (this.nbRemainingAlien <= 0) {
            // Si il n'y à plus d'alien le joueur à gagné.
            this.win();
        }
    };
    /**
     * Termine la partie et recharge la page après avoir informé le joueur de sa défaite.
     * @param reason Une string qui décris la raison de la victoire du joueur.
     */
    Game.prototype.over = function (reason) {
        if (reason === void 0) { reason = "You are bad at video game."; }
        alert("GAME OVER : " + reason);
        location.reload();
    };
    /**
     * Termine la partie et recharche la page après avoir informé le joueur de sa victoire.
     */
    Game.prototype.win = function () {
        alert("WIN !");
        location.reload();
    };
    //Getter and Setter
    Game.prototype.getGameObjects = function () {
        return this.gameObjects;
    };
    Game.prototype.getPlayer = function () {
        return this.player;
    };
    /**
     * PRIVATE
     */
    /**
     * Affiche un gameObject dans le canvas
     * @param gameObject Le gameobject à afficher
     */
    Game.prototype.draw = function (gameObject) {
        this.context.drawImage(gameObject.getImage(), gameObject.getPosition().x, gameObject.getPosition().y, gameObject.getWidth(), gameObject.getHeight());
    };
    /**
     * Execute la même suite d'action tout les 10ms. Ces actions sont :
     * - Mettre à jour les gameObjects avec leurs méthodes GameObject.prototype.update()
     * - Afficher les gameobjects
     * - Vérifie les collision entre gameObject et appel la fonction GameObject.prototype.collide quand une collision se produit.
     * - Met à jour l'UI.
     */
    Game.prototype.gameLoop = function () {
        var _this = this;
        // Défini un interval d'appel d'une fonction callback
        setInterval(function () {
            // Clear context
            _this.context.clearRect(0, 0, _this.CANVAS_WIDTH, _this.CANVAS_HEIGHT);
            _this.context.fillStyle = "#141414";
            _this.context.fillRect(0, 0, _this.CANVAS_WIDTH, _this.CANVAS_HEIGHT);
            // For each gameobjects
            _this.gameObjects.forEach(function (gameObject, i) {
                // Update the gameobject
                gameObject.callUpdate();
                // Draw the gameObject
                _this.draw(gameObject);
                // Check for collision 
                _this.checkCollisionBetweenAllGameobjectToOne(gameObject);
            });
            _this.updateUI();
        }, 10); // Appel de la fonction toute les 10ms, plus le délai est faible plus le jeu consomme de ressources.
    };
    /**
     * Check if the provided gameObject collide with any instanciate gameObjects.
     * @param gameObject
     */
    Game.prototype.checkCollisionBetweenAllGameobjectToOne = function (gameObject) {
        // Pour chaque gameObjects
        this.gameObjects.forEach(function (other) {
            // Si l'itérateur other n'est pas le gameObject fournit en paramètre.
            if (other !== gameObject) {
                // Si le gameObject superpose, même partiellement l'autre gameObject
                if (gameObject.overlap(other)) {
                    // Appel de la fonction GameObject.prototype.collide
                    gameObject.callCollide(other);
                }
            }
        });
    };
    /**
     * Met à jour l'UI
     */
    Game.prototype.updateUI = function () {
        var remainingAlien = document.querySelector(".remain_alien");
        if (remainingAlien)
            remainingAlien.innerText = "".concat(this.nbRemainingAlien, " / ").concat(this.nbMaxAlien);
        else
            throw Error("No html tag named remaining_alien.");
        var earthPvTag = document.querySelector(".earth_pv");
        if (earthPvTag)
            earthPvTag.innerText = this.earth.getPv().toString();
        else
            throw Error("No html tag for earth PV exist.");
    };
    return Game;
}());
export { Game };
