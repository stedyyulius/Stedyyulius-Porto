import * as splinetoolruntime from "https://esm.run/@splinetool/runtime";

const mapCanvas = document.getElementById("map");

mapCanvas.width = window.innerWidth;
mapCanvas.height = window.innerHeight;

const map = new splinetoolruntime.Application(mapCanvas);

map.load("https://prod.spline.design/EaimB9ms4DH6wWiU/scene.splinecode");