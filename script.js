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
}