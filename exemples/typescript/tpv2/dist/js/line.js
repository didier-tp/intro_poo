"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Line = void 0;
const figure_1 = require("./figure");
class Line extends figure_1.Figure {
    constructor(x1Initial = 0, y1Initial = 0, x2Initial = 0, y2Initial = 0, couleurInitiale = "black") {
        super(couleurInitiale); //ou bien super() nécessaire car héritage
        //this.couleur = couleurInitiale;
        this.x1 = x1Initial;
        this.y1 = y1Initial;
        this.x2 = x2Initial;
        this.y2 = y2Initial;
    }
    toSvgString() {
        return `<line x1='${this.x1}' y1='${this.y1}' 
                     x2='${this.x2}' y2='${this.y2}' stroke='${this.couleur}' />`;
    }
    length() {
        return Math.sqrt(Math.pow(this.x2 - this.x1, 2)
            + Math.pow(this.y2 - this.y1, 2));
    }
    move(dx, dy) {
        //deplacement / translation
        this.x1 = this.x1 + dx;
        this.x2 = this.x2 + dx;
        this.y1 = this.y1 + dy;
        this.y2 = this.y2 + dy;
    }
}
exports.Line = Line;
