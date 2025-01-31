"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const figure_1 = require("./figure");
class Circle extends figure_1.Figure {
    get r() {
        return this._r;
    }
    set r(rayon) {
        if (rayon >= 0) {
            this._r = rayon;
        }
        else {
            console.log(`rayon négatif ${rayon} inderdit et donc this._r ne change pas`);
        }
    }
    constructor(xcInitial = 0, ycInitial = 0, rInitial = 0, cInitial = "black") {
        super(cInitial); //nécessaire si héritage de Figure
        this.xc = xcInitial;
        this.yc = ycInitial;
        if (rInitial >= 0)
            this._r = rInitial;
        else
            this._r = 0;
        //this._r=(rInitial>=0)?rInitial:0;
    }
    perimeter() {
        return 2 * Math.PI * this.r;
    }
    move(dx, dy) {
        //deplacement / translation
        this.xc = this.xc + dx;
        this.yc = this.yc + dy;
    }
    toSvgString() {
        return `<circle cx='${this.xc}' cy='${this.yc}' 
            r='${this.r}' stroke='${this.couleur}' fill='none' />`;
    }
}
exports.Circle = Circle;
