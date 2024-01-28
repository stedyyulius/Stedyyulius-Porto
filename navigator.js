const canvas = document.getElementById("canvas3d");

const navigating = (e) => {
    if (e.key === "ArrowUp") {
        canvas.scale(-4, -4)
    }
}


canvas.addEventListener('keydown', navigating);
canvas.addEventListener('keyup', navigating);
