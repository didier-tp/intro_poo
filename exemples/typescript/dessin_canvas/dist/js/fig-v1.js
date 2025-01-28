export /*abstract*/ class Fig2D {
    constructor(lineColor = "black", lineWidth = 1, fillColor = null) {
        this.lineColor = lineColor;
        this.lineWidth = lineWidth;
        this.fillColor = fillColor;
    }
    toSvgString() {
        var _a;
        return ` stroke='${this.lineColor}' stroke-width='${this.lineWidth}' fill='${(_a = this.fillColor) !== null && _a !== void 0 ? _a : 'none'}' `;
    }
    /*abstract*/ toJsonString() {
        return JSON.stringify(this);
    }
}
export class Line extends Fig2D {
    constructor(x1 = 0, y1 = 0, x2 = 0, y2 = 0, lineColor = "black", lineWidth = 1) {
        super(lineColor, lineWidth);
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }
    toJsonString() {
        return "{line: " + JSON.stringify(this) + "}";
    }
    toSvgString() {
        let genericSvgPart = super.toSvgString();
        return `<line x1='${this.x1}' y1='${this.y1}' x2='${this.x2}' y2='${this.y2}' ${genericSvgPart} />`;
    }
}
export class Circle extends Fig2D {
    constructor(xC = 0, yC = 0, r = 0, lineColor = "black", lineWidth = 1, fillColor = null) {
        super(lineColor, lineWidth, fillColor);
        this.xC = xC;
        this.yC = yC;
        this.r = r;
    }
    toJsonString() {
        return "{circle: " + JSON.stringify(this) + "}";
    }
    toSvgString() {
        let genericSvgPart = super.toSvgString();
        return `<circle cx='${this.xC}' cy='${this.yC}' r='${this.r}' ${genericSvgPart} />`;
    }
}
export class Rectangle extends Fig2D {
    constructor(x1 = 0, y1 = 0, width = 0, height = 0, lineColor = "black", lineWidth = 1, fillColor = null) {
        super(lineColor, lineWidth, fillColor);
        this.x1 = x1;
        this.y1 = y1;
        this.width = width;
        this.height = height;
    }
    toJsonString() {
        return "{rectangle: " + JSON.stringify(this) + "}";
    }
    toSvgString() {
        let genericSvgPart = super.toSvgString();
        return `<rect x='${this.x1}' y='${this.y1}' width='${this.width}' height='${this.height}' ${genericSvgPart} />`;
    }
}
