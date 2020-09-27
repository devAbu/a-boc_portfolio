if (screen && screen.width <= 600) {
    document.getElementsByTagName("circle")[0].setAttribute("r", "150");
    document.getElementsByClassName("circle")[0].style.marginTop = "10%";
} else if (screen && screen.width <= 769) {
    document.getElementsByTagName("circle")[0].setAttribute("r", "150");
}