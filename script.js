function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    var element2 = document.getElementById("button")
    element2.classList.toggle("light-mode");

    var element3 = document.getElementById("button");
    if (element3.innerHTML === "Cambiar a tema oscuro") {
        element3.innerHTML = "Cambiar a tema claro";
    } else {
        element3.innerHTML = "Cambiar a tema oscuro";
    }

    var element4 = document.getElementById("title");
    if (element4.innerHTML === "Modo claro") {
        element4.innerHTML = "Modo oscuro";
    } else {
        element4.innerHTML = "Modo claro";
    }

}