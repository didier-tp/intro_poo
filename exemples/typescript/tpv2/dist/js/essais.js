"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const circle_1 = require("./circle");
const dessin_1 = require("./dessin");
const file_util_1 = require("./file-util");
const line_1 = require("./line");
let dessin = new dessin_1.Dessin();
dessin.parties.push(new line_1.Line(12, 34, 345, 343, "green"));
dessin.parties.push(new circle_1.Circle(200, 200, 100, "blue"));
let sousDessin1 = new dessin_1.Dessin();
sousDessin1.parties.push(new line_1.Line(20, 134, 245, 243, "red"));
sousDessin1.parties.push(new circle_1.Circle(300, 300, 50, "orange"));
dessin.parties.push(sousDessin1);
let nomFichier = "dessin.svg";
let ligne1 = "<svg xmlns='http://www.w3.org/2000/svg' height='400' width='500'>";
let derniereLigne = "</svg>";
let contenu = ligne1;
contenu = ligne1 + dessin.toSvgString() + derniereLigne;
(0, file_util_1.writeInFile)(nomFichier, contenu);
