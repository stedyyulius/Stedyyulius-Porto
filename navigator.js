import * as spline from "https://esm.run/@splinetool/runtime";

const mapCanvas = document.getElementById("map");

mapCanvas.width = window.innerWidth;
mapCanvas.height = window.innerHeight;

const map = new spline.Application(mapCanvas);

await map.load("https://prod.spline.design/EaimB9ms4DH6wWiU/scene.splinecode");

const pressButton = (direction) => {
    const element = document.getElementsByClassName(direction)[0];
    if (element) {
        element.classList.add("pressed");
        setTimeout(() => {
            element.classList.remove("pressed");
        }, 200);
    }

};

const movePixel = 50;

const directions = {
    UP: "ArrowUp",
    DOWN: "ArrowDown",
    RIGHT: "ArrowRight",
    LEFT: "ArrowLeft"
}

const fatCat = map.findObjectByName('Cat');
const catBody = map.findObjectByName('CatBody');

document.onkeydown = (e) => {

    pressButton(e.key);

    if (e.key === directions.UP) {
        fatCat.position.x += movePixel;
        fatCat.position.z -= (movePixel * 2 / 5);
        catBody.rotation.z -= (movePixel * 5 / 5);
    } else if (e.key === directions.DOWN) {
        fatCat.position.x -= movePixel;
        fatCat.position.z += (movePixel * 2 / 5);
        catBody.rotation.z += (movePixel * 5 / 5);
    } else if (e.key === directions.LEFT) {
        fatCat.position.z -= movePixel;
        fatCat.position.x -= (movePixel * 2 / 5);
        catBody.rotation.y -= (movePixel * 5 / 5);
    } else if (e.key === directions.RIGHT) {
        fatCat.position.z += movePixel;
        fatCat.position.x += (movePixel * 2 / 5);
        catBody.rotation.y += (movePixel * 5 / 5);
    }

};

map.onwheel = (event) => {
    event.preventDefault();
};

map.onmousewheel = (event) => {
    event.preventDefault();
};
