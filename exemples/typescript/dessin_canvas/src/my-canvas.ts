import { Circle, Fig2D, Line, Rectangle } from "./fig-v1";

export class CanvasDraw  {
    private _canvasElement : any = null;
    private _ctx : any = null; //2d (svg) context in html5 canvas
    constructor(public canvasId : string){
      this._canvasElement = document.getElementById(canvasId);
      this._ctx = this._canvasElement.getContext("2d");
    }

    drawCircle( c : Circle) : void {
       this._ctx.beginPath();
       this._ctx.arc(c.xC, c.yC, c.r, 0, 2 * Math.PI, false);
       if(c.fillColor != null){
           this._ctx.fillStyle = c.fillColor;
          this._ctx.fill();
         }
       this._ctx.lineWidth = c.lineWidth;
       this._ctx.strokeStyle =  c.lineColor;//'#003300';
       this._ctx.stroke();
    }
    drawLine( l : Line) : void {
      this._ctx.beginPath();
      this._ctx.moveTo(l.x1,l.y1);
      this._ctx.lineTo(l.x2,l.y2);
      this._ctx.strokeStyle =  l.lineColor;
      this._ctx.lineWidth = l.lineWidth;
      this._ctx.stroke();
    }
  
    drawRectangle( r : Rectangle) : void {
      this._ctx.beginPath();
      this._ctx.rect(r.x1,r.y1,r.width,r.height);
      if(r.fillColor != null){
           this._ctx.fillStyle = r.fillColor;
           this._ctx.fill();
         }
      this._ctx.strokeStyle =  r.lineColor;
      this._ctx.lineWidth = r.lineWidth;
      this._ctx.stroke();
    }
  }

export function drawTabFigInCanvas(){

    let tabFig : Fig2D[] = new Array<Fig2D>();
    tabFig.push(new Line(20,20,180,200,"red"));
    tabFig.push(new Circle(100,100,50,"blue"));
    tabFig.push(new Circle(250,200,50,"black",1,"blue"));
    tabFig.push(new Rectangle(200,100,50,60,"green"));
    tabFig.push(new Rectangle(20,100,50,60,"black",1,"green"));  

  let canvasDraw = new CanvasDraw("myCanvas"); 
    for( let f  of tabFig){
      {
        if(f instanceof Line){ canvasDraw.drawLine(f); }
        if(f instanceof Rectangle){ canvasDraw.drawRectangle(f); }
        if(f instanceof Circle){ canvasDraw.drawCircle(f); }
      }
    }
}

var lastXc : number|undefined = undefined;
var lastYc : number|undefined = undefined;

window.onload = function(){


  document.querySelector('#btnClear')?.addEventListener('click',function(){
    console.log("clear");
    clear_canvas();
  });

  document.querySelector('#btnTest')?.addEventListener('click',function(){
   console.log("test");
   drawTabFigInCanvas();
 });

 document.querySelector('#myCanvas')?.addEventListener('click',function(evt){
   log_coords(<MouseEvent>evt);
  });
    
}

function clear_canvas(){
  var canvasElement :any = document.getElementById("myCanvas");
  var ctx  = canvasElement.getContext("2d");
      ctx.clearRect ( 0 , 0 , canvasElement.width, canvasElement.height );
  lastXc=undefined; lastYc=undefined;//reset last coord for next line
}

function log_coords(evt : MouseEvent){
  var canvasElement :any = document.getElementById("myCanvas");
  var xC = evt.pageX - canvasElement.offsetLeft; //xC = x relative to canvas
  var yC = evt.pageY - canvasElement.offsetTop; //yC = relative to canvas
  var msg="click at x=" + xC + " y=" + yC;
  console.log(msg);
  const spanMsgElt = document.querySelector("#spanMsg");
    if(spanMsgElt!=null) spanMsgElt.innerHTML=msg;

  var ctx  = canvasElement.getContext("2d");
  if(lastXc == null &&  lastYc == null){
    lastXc=xC; lastYc=yC;
  }
  ctx.beginPath();
  ctx.moveTo(lastXc,lastYc);//from last x,y
  ctx.lineTo(xC,yC);//to new xC,yC
  //ctx.closePath();

  lastXc=xC; lastYc=yC;//store last coord for next line
  ctx.stroke();
};