var random = Math.random();
var random = random * 100;
var random = Math.floor(random);
var contador = 0;
var pr = new Date();
var presentes = pr.getSeconds();
var presenten = pr.getMinutes();
do {
    var jugador = 0;
    var jugador = prompt("Di un numero entre el 0 y el 100")
    contador++
    if (random > jugador) {
        alert("es mas grande")

    }
    else if (random < jugador) {
        alert("es mas pequeño")
    }
    else {
        alert("Has ganado!!");
    }
} while (random != jugador)
var fu = new Date();
var futuros = fu.getSeconds(futuros);
var futuron = fu.getMinutes(futuron);
var segundos = futuros - presentes;
var minutos = futuron - presenten;
document.write("Intentos: " + contador)
document.write("Tiempo: " + minutos + "min y " + segundos + "s");
document.write(" El Número era: " + random)