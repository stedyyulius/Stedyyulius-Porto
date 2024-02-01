const pressButton = (direction) => {
    const element = document.getElementsByClassName(direction)[0];
    element.classList.add("pressed");
    setTimeout(() => {
        element.classList.remove("pressed");
    }, 200);
};

document.onkeydown = (e) => {
    e = e || window.event;
    if (e.keyCode === 38) {
        pressButton("up");
    } else if (e.keyCode === 40) {
        pressButton("bottom");
    } else if (e.keyCode === 37) {
        pressButton("left");
    } else if (e.keyCode === 39) {
        pressButton("right");
    }
};

const map = document.getElementById("map");

map.onwheel = (event) => {
    event.preventDefault();
};

map.onmousewheel = (event) => {
    event.preventDefault();
};
