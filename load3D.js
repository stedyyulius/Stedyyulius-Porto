import * as splinetoolruntime from "https://esm.run/@splinetool/runtime";

const canvas = document.getElementById("canvas3d");
const app = new splinetoolruntime.Application(canvas);
app.load("https://prod.spline.design/EaimB9ms4DH6wWiU/scene.splinecode");