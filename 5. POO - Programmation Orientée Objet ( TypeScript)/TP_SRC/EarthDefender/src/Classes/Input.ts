import { Axis } from "../Types/Axis.js";

export class Input{
    private static axisX : Axis = 0;
    private static isShooting : boolean = false;

    /**
     * 
     * @returns True si le joueur appuie sur la touche de tire
     */
    public static getIsShooting() : boolean{
        return Input.isShooting;
    }
    /**
     * 
     * @returns Un Axis indiquant la direction vers laquelle le joueur souhaite aller.
     */
    public static getAxisX() : Axis{
        return Input.axisX;
    }

    /**
     * Lance l'écoute des inputs du joueur.
     */
    public static listenPlayerInput() : void{
        // Key Down
        document.addEventListener("keydown",(event)=>{
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
                case " ":   // La caractère espace, soit la touche espace.
                    Input.isShooting = true;
                break;
            
                default:
                    break;
            }
        });

        // Key Realeased
        document.addEventListener("keyup",(event)=>{
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
    }
}