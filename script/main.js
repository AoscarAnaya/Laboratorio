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

confirm( "este programa te ayudara a saber que look puedes vestir, sigue las instrucciones")
var tipoDesexo = prompt("Eres mujer o hombre? Por favor escribe 'M' si eres mujer y 'H' si eres hombre");
var diaOnoche = prompt("Es de día o de noche? Escribe 'N' si es de noche y 'D' si es de día");
var tipoDeclima = prompt("¿El clima es frío o caliente? Teclea 'F' para frío y 'C' para calor");

tipoDesexo = tipoDesexo.toLowerCase(); // Convertir a minúsculas para hacer comparaciones más fáciles
diaOnoche = diaOnoche.toLowerCase();
tipoDeclima = tipoDeclima.toLowerCase();
var imageTag ="<img src='%s' style='display: block; margin: 0 auto; max-width: 100%; height: auto; margin-top: 20px;'>";
if (tipoDesexo === "h" || tipoDesexo === "hombre") {
    if (diaOnoche === "d" || diaOnoche === "dia") {
        if (tipoDeclima === "f"|| tipoDeclima === "frio") {
            console.log("Ponte traje con saco");h
            document.write(imageTag.replace('%s', './img/hdf.jpeg'));
        } else if (tipoDeclima === "c" || tipoDeclima === "calor") {
            console.log("Ponte short con playera");
            document.write("<img src='./img/hdc.jpeg' style='display: block; margin: 0 auto; max-width: 100%; height: auto; margin-top: 20px;'>");
        }
    } else if (diaOnoche === "n" || diaOnoche === "noche") {
        if (tipoDeclima === "f" || tipoDeclima === "frio") {
            
            document.write(imageTag.replace("<img src='./img/abrigo.jpeg' style='display: block; margin: 0 auto; max-width: 100%; height: auto; margin-top: 20px;'>"));
        } else if (tipoDeclima === "c" || tipoDeclima ==="calor") {
            
            document.write("<img src='./img/hdt.jpeg' style='display: block; margin: 0 auto; max-width: 100%; height: auto; margin-top: 20px;'></img>");
        }
    }
} else if (tipoDesexo === "m") {
    if (diaOnoche === "d" || diaOnoche === "dia") {
        if (tipoDeclima === "f" || tipoDeclima === "frio") {
            
            document.write("<img src='./img/mnf.jpeg' style='display: block; margin: 0 auto; max-width: 100%; height: auto; margin-top: 20px;'></img>");
        } else if (tipoDeclima === "c" || tipoDeclima === "caliente") {
            
            document.write("<img src='./img/mnc.jpeg' style='display: block; margin: 0 auto; max-width: 100%; height: auto; margin-top: 20px;'></img>");
        }
    } else if (diaOnoche === "n" || diaOnoche === "noche") {
        if (tipoDeclima === "f" || tipoDeclima === "frio") {
           
            document.write("<img src='./img/mnf.jpeg'  style='display: block; margin: 0 auto; max-width: 100%; height: auto; margin-top: 20px; background-color: #0f0e0e;'></img>");
        } else if (tipoDeclima === "c" || tipoDeclima === "caliente") {
            
            document.write("<img src='./img/mdc.jpeg' style='display: block; margin: 0 auto; max-width: 100%; height: auto; margin-top: 20px;'></img>");
        }
    }
}