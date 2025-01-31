import { Figure } from "./figure";

export class Circle extends Figure{
    xc :number; //x of center
    yc :number; //y of center
    //r :number;//rayon/radius  (par défaut tout est public en typescript)
    private _r : number ; //rayon privée (inacessible de l'exterieur )
    
    public get r() {
        return this._r;
    }

    public set r(rayon:number) {
        if(rayon>=0) { 
            this._r = rayon;  
        }
        else { 
            console.log(`rayon négatif ${rayon} inderdit et donc this._r ne change pas`);
         }
    }

    constructor(xcInitial:number=0,ycInitial=0,
               rInitial:number=0,
               cInitial:string="black"){
        super(cInitial);//nécessaire si héritage de Figure
        this.xc = xcInitial; this.yc = ycInitial;
        if(rInitial>=0)
            this._r = rInitial; 
        else this._r=0;
        //this._r=(rInitial>=0)?rInitial:0;
    }

    perimeter():number{
        return 2 * Math.PI * this.r;
    }

    move(dx:number,dy:number){
        //deplacement / translation
        this.xc = this.xc + dx;
        this.yc = this.yc + dy;
    }
    

    toSvgString(){
        return `<circle cx='${this.xc}' cy='${this.yc}' 
            r='${this.r}' stroke='${this.couleur}' fill='none' />`;
    }
         
}

