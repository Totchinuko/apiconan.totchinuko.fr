function OnScreenshotClicked(event) {
    visualizer = document.getElementById("visualizer");
    visualizer.style.backgroundImage = "url(" + event.target.src + ")";
    visualizer.classList.add("show");
}

function OnVisualizerClicked(event) {
    event.target.classList.remove("show");
}

function OnMobileMenuClicked(event) {
    document.getElementById("menu").classList.toggle("show");
}


window.onload = function () {
    document.getElementById("mobilemenu").addEventListener("click", OnMobileMenuClicked);
    visualizer = document.createElement("div");
    visualizer.id = "visualizer";
    document.body.appendChild(visualizer);
    document.getElementById("visualizer").addEventListener("click", OnVisualizerClicked);

    var elements = document.getElementsByClassName("screenshot");
    for(var i=0; i < elements.length; i++) {
        elements[i].addEventListener("click", OnScreenshotClicked);
    }
}