import { Figure } from "./figure";

export class Line extends Figure {
    x1 :number;
    x2 :number;
    y1 :number;
    y2 :number;

    constructor(x1Initial:number=0,y1Initial=0,
               x2Initial:number=0,y2Initial=0,
               couleurInitiale:string="black"){
        super(couleurInitiale); //ou bien super() nécessaire car héritage
        //this.couleur = couleurInitiale;
        this.x1 = x1Initial; this.y1 = y1Initial;
        this.x2 = x2Initial; this.y2 = y2Initial;
    }

    toSvgString(){
        return `<line x1='${this.x1}' y1='${this.y1}' 
                     x2='${this.x2}' y2='${this.y2}' stroke='${this.couleur}' />`;
    }

    length():number{
        return Math.sqrt ( Math.pow(this.x2 - this.x1,2) 
                         + Math.pow(this.y2 - this.y1,2) );
    }

    move(dx:number,dy:number){
        //deplacement / translation
        this.x1 = this.x1 + dx ;
        this.x2 = this.x2 + dx;
        this.y1 = this.y1 + dy;
        this.y2 = this.y2 + dy;
    }
}

