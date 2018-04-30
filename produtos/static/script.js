function mudarBg(valor, idImg) {

    document.getElementById(idImg).src = valor;
}
window.onload = function() {
    document.getElementsByName('bgradio1')[0].click();
    document.getElementsByName('bgradio2')[0].click();
}
with open("data.json","r") as f:
produto = json.load(f))