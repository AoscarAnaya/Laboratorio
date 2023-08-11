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

//confirm( "este programa te ayudara a saber que look puedes vestir, sigue las instrucciones")
var tipoDesexo = prompt("eres  mujer o hombre, por favor escribe M(si eres mujer) y H ( si eres hombre")


var diaOnoche = prompt("es de dia o de noche: Escribre N(si es de noche) y D(si es de dia)")

var tipoDeclima = prompt(" tipo de clima es frio o caliente: Teclea F para frio y C para caliente")


if (tipoDesexo.toLowerCase() == "h" || tipoDesexo.toLowerCase() == "hombre") {
    if (diaOnoche.toLowerCase() == "d" || diaOnoche.toLowerCase() == "dia") {
        if (tipoDeclima.toLowerCase() == "f" || tipoDeclima.toLowerCase()== "frio" ) {
            console.log("ponte traje con saco")
            document.write("<img src='./img/hdf.jpeg'></img>");
        } else if (tipoDeclima.toLowerCase() == "c")
            console.log("ponte short con playera")
            document.write("<img src='./img/hdc.jpeg'></img>")
            

    } else if (diaOnoche.toLowerCase() == "n" || diaOnoche.toLowerCase() =="noche") {
        if (tipoDeclima.toLowerCase() == "f" || tipoDeclima.toLowerCase() == "frio") {
            console.log("ponte un abrigo")
            document.write("<img src='./img/abrigo.jpeg'></img>")
        } else (tipoDeclima.toLowerCase() == "c" || tipoDeclima.toLowerCase() == "caliente")
            console.log("ponte un  short con tank")
            document.write("<img src='./img/hdt.jpeg'></img>")
        }


} else (tipoDesexo.toLowerCase == "m" || tipoDesexo.toLowerCase() == "mujer");{
   if (diaOnoche.toLowerCase() == "d" || diaOnoche.toLowerCase() == "dia") {
        if (tipoDeclima.toLowerCase() == "f" || tipoDeclima.toLowerCase() == "frio") {
            console.log("ponte vestido con saco")
            document.write("<img src='./img/mnf.jpeg'></img>")
        } else if (tipoDeclima.toLowerCase() == "c" || tipoDeclima.toLowerCase() == "caliente")
            console.log("ponte un vestido  fresco")
            document.write("<img src='./img/mnc.jpeg'></img>")
        }else if (diaOnoche.toLowerCase() == "n" || diaOnoche.toLowerCase() == "noche"){
        if (tipoDeclima.toLowerCase() == "f" || tipoDeclima.toLowerCase() == "frio"){
            console.log("ponte una pants y sueter")
            document.write("<img src='./img/mnf.jpeg'></img>")
        } else (tipoDeclima.toLowerCase() == "c" || tipoDeclima.toLowerCase() =="caliente")
            console.log("ponte un unos short ")
            document.write("<img src='./img/mdc.jpeg'></img>")
    }
}