function attachGradientEvents() {
    let mouseSection = document.getElementById("gradient")
    mouseSection.addEventListener("mousemove", mouseMoving);
    let result = document.getElementById("result");

    function mouseMoving(ev){
        result.textContent = Math.floor(ev.offsetX / mouseSection.clientWidth * 100) + "%";
    }
}
