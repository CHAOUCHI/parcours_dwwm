var Input = /** @class */ (function () {
    function Input() {
    }
    /**
     *
     * @returns True si le joueur appuie sur la touche de tire
     */
    Input.getIsShooting = function () {
        return Input.isShooting;
    };
    /**
     *
     * @returns Un Axis indiquant la direction vers laquelle le joueur souhaite aller.
     */
    Input.getAxisX = function () {
        return Input.axisX;
    };
    /**
     * Lance l'écoute des inputs du joueur.
     */
    Input.listenPlayerInput = function () {
        // Key Down
        document.addEventListener("keydown", function (event) {
            switch (event.key) {
                // Go right
                case "d":
                case "D":
                    Input.axisX = 1;
                    break;
                // Go left
                case "q":
                case "Q":
                    Input.axisX = -1;
                    break;
                // Shoot
                case " ": // La caractère espace, soit la touche espace.
                    Input.isShooting = true;
                    break;
                default:
                    break;
            }
        });
        // Key Realeased
        document.addEventListener("keyup", function (event) {
            switch (event.key) {
                // Player Stops
                case "d":
                case "D":
                case "q":
                case "Q":
                    Input.axisX = 0;
                    break;
                case " ":
                    Input.isShooting = false;
                    break;
                default:
                    break;
            }
        });
    };
    Input.axisX = 0;
    Input.isShooting = false;
    return Input;
}());
export { Input };
