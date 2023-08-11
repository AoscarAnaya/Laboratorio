/*
1 es de no o de dia 
2.esta caliente o frio
3. pronostican lluvia
*/
/* 
hombre
si es de dia   y con clima  frio un traje de saco 
si es de dia   y con clima  caliente ponte uno  short  con playera
si es de noche y con clima  frio ponte un abrigo
si es de noche y con clima caliente  ponte un  short con tank

----------
si es  dia y con clima   frio ponte un vestido con saco
si es  dia y con clima caliente ponte un vestido  fresco
si es de noche  y con clima frio  ponte una pants y sueter
si es de noche y con clima caliente ponte un unos short 
*/

//alert( "este programa te ayudara a saber que te pones")
var tipoDesexo = prompt("eres  mujer o hombre, por favor escribe M(si eres mujer) y H ( si eres hombre")


var diaOnoche = prompt("es de dia o de noche: Escribre N(si es de noche) y D(si es de dia)")

var tipoDeclima = prompt(" tipo de clima es frio o caliente: Teclea F para frio y C para caliente")


if (tipoDesexo.toLowerCase() == "h") {
    if (diaOnoche.toLowerCase() == "d") {
        if (tipoDeclima.toLowerCase() == "f") {
            console.log("ponte traje con saco")
        } else if (tipoDeclima.toLowerCase() == "c")
            console.log("ponte short con playera")

    } else if (diaOnoche.toLowerCase() == "n") {
        if (tipoDeclima.toLowerCase() == "f") {
            console.log("ponte un abrigo")
        } else (tipoDeclima.toLowerCase() == "c")
            console.log("ponte un  short con tank")
        }


} else (tipoDesexo.toLowerCase == "m");{
   if (diaOnoche.toLowerCase() == "d") {
        if (tipoDeclima.toLowerCase() == "f") {
            console.log("ponte vestido con saco")
        } else if (tipoDeclima.toLowerCase() == "c")
            console.log("ponte un vestido  fresco")
   
        }else if (diaOnoche.toLowerCase() == "n"){
        if (tipoDeclima.toLowerCase() == "f"){
            console.log("ponte una pants y sueter")
        
        } else (tipoDeclima.toLowerCase() == "c")
            console.log("ponte un unos short ")
    }
}