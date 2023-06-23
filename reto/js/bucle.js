var random = Math.random();
var random = random * 100;
var random = Math.floor(random);
    var contador = 0;
    var pr = new Date();
    var presentes = pr.getSeconds();
    var presenten = pr.getMinutes();
do
{
var jugador = 0;
var jugador = prompt("Di un numero del 1 al 100")
    contador++
if(random > jugador)
{
	alert ("El numero es mas grande")
	
}
else if(random < jugador)
{
	alert ("El numero es mas pequeño")
}
else 
{
    alert("Has ganado!!");
}
}while(random != jugador)
    var fu = new Date();
    var futuros = fu.getSeconds(futuros);
    var futuron = fu.getMinutes(futuron);
    var segundos = futuros - presentes;
    var minutos = futuron - presenten;
    document.write("Intentos: " + contador)
    
    document.write("   Tiempo: " + minutos + "min y " + segundos + "s");


/* El juego va de que tu, el usuario, tienes de adivinar el numero random que elige el ordenador siguiendo sus pistas. 
EL UNICO ERROR ES QUE EL JUEGO NO SE PARARA HASTA QUE LO ACABES.*/