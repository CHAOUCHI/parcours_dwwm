// 
// 
/**
 * Les variables qui ont pour type Axis ne peuvent avoir pour valeur exlusivement : -1, 0 ou 1.
 * -1 : signifie l'appuie sur la gauche, en fonction des commandes ça peut être la touche Q la fleche de gauche ou même un joystick
 * 1 : signifie l'appuie sur la droite : touche D ou fleche de droite
 * 0 : signifie l'absence de direction, le joueur n'appuie sur aucune touche directionnel.
 */

export type Axis = -1 | 0 | 1;  
