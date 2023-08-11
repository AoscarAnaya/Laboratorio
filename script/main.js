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
var tipoDesexo = prompt( "eres  mujer o hombre, por favor escribe M(si eres mujer) y H ( si eres hombre")


var diaOnoche = prompt ("es de dia o de noche: Escribre N(si es de noche) y D(si es de dia)")

var tipoDeclima = prompt(" tipo de clima es frio o caliente")


if (tipoDesexo.toLowerCase() == "h" && diaOnoche.toLowerCase() == "d" && tipoDeclima.toLowerCase() == "c"){
    /* if (diaOnoche.toLowerCase() == "d"){
        if (tipoDeclima.toLowerCase() == "c"){

        }
        /* ponte un saco de dia */
        console.log("ponte pantalon")
    
  

}else (tipoDesexo.toLowerCase == "m")
    console.log ("ponte vestido")
