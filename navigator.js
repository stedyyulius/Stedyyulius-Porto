import * as spline from "https://esm.run/@splinetool/runtime";

const mapCanvas = document.getElementById("map");

mapCanvas.width = window.innerWidth;
mapCanvas.height = window.innerHeight;

const map = new spline.Application(mapCanvas);

await map.load("https://prod.spline.design/EaimB9ms4DH6wWiU/scene.splinecode");

const movePixel = 50;

const directions = {
    UP: "ArrowUp",
    DOWN: "ArrowDown",
    RIGHT: "ArrowRight",
    LEFT: "ArrowLeft"
}

const fatCat = map.findObjectByName('Cat');

let catYCoordinate = 292;
let catXCoordinate = 434;

const moveUp = () => {
    fatCat.position.x += movePixel;
    fatCat.position.z -= (movePixel * 2 / 5);
    catYCoordinate -= (movePixel * 1 / 5);
}

const moveDown = () => {
    fatCat.position.x -= movePixel;
    fatCat.position.z += (movePixel * 2 / 5);
    catYCoordinate += (movePixel * 1 / 5);
}

const moveLeft = () => {
    fatCat.position.z -= movePixel;
    fatCat.position.x -= (movePixel * 2 / 5);
    catXCoordinate -= (movePixel * 1 / 5);
}

const moveRight = () => {
    fatCat.position.z += movePixel;
    fatCat.position.x += (movePixel * 2 / 5);
    catXCoordinate += (movePixel * 1 / 5);
}

const ArrowUp = document.getElementById("ArrowUp");

ArrowUp.addEventListener("click", (e) => {
    pressButton("ArrowUp");
    moveUp();
});

const ArrowDown = document.getElementById("ArrowDown");

ArrowDown.addEventListener("click", (e) => {
    pressButton("ArrowDown");
    moveDown();
});

const ArrowLeft = document.getElementById("ArrowLeft");

ArrowLeft.addEventListener("click", (e) => {
    pressButton("ArrowLeft");
    moveLeft();
});


const ArrowRight = document.getElementById("ArrowRight");

ArrowRight.addEventListener("click", (e) => {
    pressButton("ArrowRight");
    moveRight();
});

const PIN_COORDINATE = {
    "Singapore": {
        x: 2377.54,
        z: 7060.55
    },
    "Jakarta": {
        x: 2160.54,
        z: 7260.55
    },
    "Dubai": {
        x: 3277.54,
        z: 5250.55
    }
}

const isAroundLocationPin = (location) => {

    const x = PIN_COORDINATE[location].x;
    const z = PIN_COORDINATE[location].z;

    const aroundRadius = 1 / 40;

    return fatCat.position.x >= (x - (x * aroundRadius))
        && fatCat.position.x <= (x + (x * aroundRadius))
        && fatCat.position.z >= (z - (z * aroundRadius))
        && fatCat.position.z <= (z + (z * aroundRadius))
}

const checkLocationPin = () => {

    const areas = ["Singapore", "Jakarta", "Dubai"];

    for (let i = 0; i < areas.length; i++) {
        const pin = document.getElementById(areas[i]);

        if (isAroundLocationPin(areas[i])) {
            pin.style.display = "block";
        } else {
            pin.style.display = "none";
        }
    }
}

document.onkeydown = (e) => {

    pressButton(e.key);

    checkLocationPin();

    if (e.key === directions.UP) {
        moveUp();
    } else if (e.key === directions.DOWN) {
        moveDown();
    } else if (e.key === directions.LEFT) {
        moveLeft();
    } else if (e.key === directions.RIGHT) {
        moveRight();
    }

};

const pressButton = (direction) => {
    const element = document.getElementsByClassName(direction)[0];
    if (element) {
        element.classList.add("pressed");
        setTimeout(() => {
            element.classList.remove("pressed");
        }, 200);
    }

};

document.onwheel = (event) => {
    event.preventDefault();
};

document.onmousewheel = (event) => {
    event.preventDefault();
};
