/**
 * La classe Assets contient simple des getter static qui renvoi les asset sous la forme de balise HTMLImageElement
 */
export class Assets{
    public static getLaser() : HTMLImageElement{
        const image = <HTMLImageElement>document.querySelector("img#asset_laser");
        if(image == null){
            throw Error("L'asset n'existe pas.");
        }
        return image;
    }

    public static getEarth() : HTMLImageElement{
        const image = <HTMLImageElement>document.querySelector("img#asset_earth");
        if(image == null){
            throw Error("L'asset n'existe pas.");
        }
        return image;
    }
    

    public static getDefault(): HTMLImageElement{
        const image = <HTMLImageElement>document.querySelector("img#asset_player");
        if(image == null){
            throw Error("L'asset n'existe pas.");
        }
        return image;
    }

    public static getPlayer(): HTMLImageElement{
        const image = <HTMLImageElement>document.querySelector("img#asset_player");
        if(image == null){
            throw Error("L'asset n'existe pas.");
        }
        return image;
    }

    public static getAlien() : HTMLImageElement{
        const image = <HTMLImageElement>document.querySelector("img#asset_alien");
        if(image == null){
            throw Error("L'asset n'existe pas.");
        }
        return image;

    }

    public static getPomme() : HTMLImageElement{
        const image = <HTMLImageElement>document.querySelector("img#asset_pomme");
        if(image == null){
            throw Error("L'asset n'existe pas.");
        }
        return image;
    }

    public static getStar(): HTMLImageElement{
        const image = <HTMLImageElement>document.querySelector("img#asset_star");
        if(image == null){
            throw Error("L'asset n'existe pas.");
        }
        return image;
    }
    
}