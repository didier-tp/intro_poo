
export /*abstract*/ class Fig2D {
  constructor(public lineColor : string = "black",
              public lineWidth : number = 1,
              public fillColor : string | null= null){
  }
  toSvgString() : string { 
    return ` stroke='${this.lineColor}' stroke-width='${this.lineWidth}' fill='${this.fillColor??'none'}' `; 
  }
/*abstract*/  toJsonString() : string { 
        return JSON.stringify(this);
      }
}

export class Line  extends Fig2D{
  constructor(public x1:number = 0 ,  public y1:number = 0 ,
              public x2:number = 0 ,  public y2:number = 0,
              lineColor : string = "black",
              lineWidth : number = 1){
                 super(lineColor,lineWidth);
  }

  toJsonString(): string {
      return "{line: " + JSON.stringify(this) +"}"
  }
  toSvgString() : string {
     let genericSvgPart = super.toSvgString();
     return `<line x1='${this.x1}' y1='${this.y1}' x2='${this.x2}' y2='${this.y2}' ${genericSvgPart} />`;
    }
}

export class Circle  extends Fig2D{
  constructor(public xC:number = 0 ,
              public yC:number = 0  ,
              public r:number = 0,
              lineColor : string = "black",
              lineWidth : number = 1,
              fillColor : string | null= null){
                 super(lineColor,lineWidth,fillColor);
  }
  
  toJsonString(): string {
    return "{circle: " + JSON.stringify(this) +"}"
}
toSvgString() : string {
   let genericSvgPart = super.toSvgString();
   return `<circle cx='${this.xC}' cy='${this.yC}' r='${this.r}' ${genericSvgPart} />`;
  }
}

export class Rectangle  extends Fig2D{
  constructor(public x1:number = 0 ,
              public y1:number = 0 ,
              public width:number = 0 ,
              public height:number = 0,
              lineColor : string = "black",
              lineWidth : number = 1,
              fillColor : string | null = null){
                 super(lineColor,lineWidth,fillColor);
  }
  
  toJsonString(): string {
    return "{rectangle: " + JSON.stringify(this) +"}"
}
toSvgString() : string {
   let genericSvgPart = super.toSvgString();
   return `<rect x='${this.x1}' y='${this.y1}' width='${this.width}' height='${this.height}' ${genericSvgPart} />`;
  }
}
