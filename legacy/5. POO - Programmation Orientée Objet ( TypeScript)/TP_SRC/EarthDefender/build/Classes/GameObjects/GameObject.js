import { Assets } from "../Assets.js";
var GameObject = /** @class */ (function () {
    //--METHODS------------------------------------
    /**
     * PUBLIC
     * Callable by anybody
     */
    function GameObject(game) {
        this.game = game;
        this.position = { x: 0, y: 0 }; // Default position is on top left corner [0,0]
        this.vitesse = 2;
        this.setImage(Assets.getDefault());
        // Appel la méthode protected init, 
        // cette méthode est sensé être modifiée par les classes enfants (Alien, Player, ...)
        this.init();
    }
    /**
     * Ask the game to destroy this gameObject
     */
    GameObject.prototype.destroy = function () {
        this.game.destroy(this);
    };
    /**
     * Check if the gameObject overlaps another gameobject.
     * @param other The GameObject to check the overlap with.
     * @returns True if the other GameObject overlaps, false otherwise.
     */
    GameObject.prototype.overlap = function (other) {
        if (
        // Check x axis overlap
        (other.left() <= this.left() && this.left() <= other.right()
            ||
                other.left() <= this.right() && this.right() <= other.right()
            ||
                this.left() <= other.left() && other.left() <= this.right()
            ||
                this.left() <= other.right() && other.right() <= this.right())
            &&
                (
                // check y axis overlap
                other.top() <= this.top() && this.top() <= other.bottom()
                    ||
                        other.top() <= this.bottom() && this.bottom() <= other.bottom()
                    ||
                        this.top() <= other.top() && other.top() <= this.bottom()
                    ||
                        this.top() <= other.bottom() && other.bottom() <= this.bottom())) {
            return true; // They overlap
        }
        else {
            return false; // They do not overlap
        }
    };
    /**
     * Mise à jour du game object
     * Cette méthode sera appelée par l'objet Game à chaque tour de la boucle de jeu dans la fonction Game.prototype.gameLoop().
     */
    GameObject.prototype.callUpdate = function () {
        this.update();
    };
    /**
     * Averti le game object qu'un autre game object le touche et lui fournit ce game object.
     *
     * @param other The other GameObject that collide this gameObject.
     */
    GameObject.prototype.callCollide = function (other) {
        this.collide(other);
    };
    // Getter and setter 
    GameObject.prototype.getGame = function () {
        return this.game;
    };
    GameObject.prototype.getImage = function () {
        return this.image;
    };
    GameObject.prototype.setImage = function (image) {
        this.image = image;
        this.height = this.image.height;
        this.width = this.image.width;
    };
    GameObject.prototype.getPosition = function () {
        return this.position;
    };
    GameObject.prototype.setPosition = function (x, y) {
        this.position = { x: x, y: y };
    };
    GameObject.prototype.getWidth = function () {
        return this.width;
    };
    GameObject.prototype.setWidth = function (width) {
        this.width = width;
    };
    GameObject.prototype.getHeight = function () {
        return this.height;
    };
    GameObject.prototype.setHeight = function (height) {
        this.height = height;
    };
    GameObject.prototype.getVitesse = function () {
        return this.vitesse;
    };
    GameObject.prototype.setVitesse = function (vitesse) {
        this.vitesse = vitesse;
    };
    /**Utility methods for gameobject position */
    GameObject.prototype.top = function () {
        return this.position.y;
    };
    GameObject.prototype.bottom = function () {
        return this.position.y + this.getHeight();
    };
    GameObject.prototype.left = function () {
        return this.position.x;
    };
    GameObject.prototype.right = function () {
        return this.position.x + this.getWidth();
    };
    /**
     * PROTECTED
     * Callable only by the class GameObject and all its childs.
     */
    /**
     * Initialise le GameObject.
     * Par défaut, cette methode ne fait rien mais est appelée à la fin du constructeur de GameObject.
     * Cette méthode est pensée pour être modifier par polymorphisme par les classes enfants.
     */
    GameObject.prototype.init = function () { };
    /**
     * Met à jour le GameObject
     * Cette methode est appelée régulièrement à chaque tour de la boucle de jeu.(Environ toutes les 10ms)
     * Par défaut ne fait rien mais cette méthode est pensée pour être modifier par polymorphisme par les classes enfants.
     */
    // Called each frame
    GameObject.prototype.update = function () { };
    // Called on collition
    GameObject.prototype.collide = function (other) { };
    return GameObject;
}());
export { GameObject };
