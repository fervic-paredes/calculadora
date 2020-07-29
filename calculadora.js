var operandoa;
var operandob;
var operacion;
var memories;

function calculadora(){
    
 //variables
 var calculator__display = document.getElementById("calculator__display");
 var off = document.getElementById("off");
 var porcentaje = document.getElementById("%");
 var raiz = document.getElementById("squareroot");
 var flecha = document.getElementById("flecha");
 var reset = document.getElementById("ON/C");
 var siete = document.getElementById("siete");
 var ocho = document.getElementById("ocho");
 var nueve = document.getElementById("nueve");
 var multiplicacion = document.getElementById("X");
 var division = document.getElementById("/");
 var cuatro = document.getElementById("cuatro");
 var cinco = document.getElementById("cinco");
 var seis = document.getElementById("seis");
 var menos = document.getElementById("menos");
 var MRC = document.getElementById("MRC");
 var uno = document.getElementById("uno");
 var dos = document.getElementById("dos");
 var tres = document.getElementById("tres");
 var suma = document.getElementById("suma");
 var less__memories = document.getElementById("M-");
 var cero = document.getElementById("cero");
 var punto = document.getElementById("punto");
 var igual = document.getElementById("igual");
 var plus__memories = document.getElementById("M+");
  
     
 //eventos
    uno.onclick = function(e){
        calculator__display.textContent = calculator__display.textContent + "1";
        console.log("hola mundo");
    }

    dos.onclick = function(e){
        calculator__display.textContent = calculator__display.textContent + "2";
    }

    tres.onclick = function(e){
        calculator__display.textContent = calculator__display.textContent + "3";
    }

    cuatro.onclick = function(e){
        calculator__display.textContent = calculator__display.textContent + "4";
    }

    cinco.onclick = function(e){
        calculator__display.textContent = calculator__display.textContent + "5";
    }

    seis.onclick = function(e){
        calculator__display.textContent = calculator__display.textContent + "6";
    }

    siete.onclick = function(e){
        calculator__display.textContent = calculator__display.textContent + "7";
    }

    ocho.onclick = function(e){
        calculator__display.textContent = calculator__display.textContent + "8";
    }

    nueve.onclick = function(e){
        calculator__display.textContent = calculator__display.textContent + "9";
    }

    cero.onclick = function(e){
        calculator__display.textContent = calculator__display.textContent + "0";
    }

    reset.onclick = function(e){
        calculator__display.textContent = "";
        operandoa = 0;
        operandob = 0;
        operacion = "";
    }

    MRC.onclick = function(e){
        calculator__display.textContent = memories;
    }

    less__memories.onclick = function(e){
        memories = -(calculator__display.textContent);
        limpiar();
    }

    plus__memories.onclick = function(e){
        memories = calculator__display.textContent;
        limpiar();
    }

    flecha.onclick = function(e){
        calculator__display.textContent = calculator__display.textContent.slice(1);
    }

    off.onclick = function(e){
        reset();
        while (true){
            limpiar();
            if (reset.onclick){
                break;
            }
        }
    } 
 
 
 
 
 
 
 
     
 
 //000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    //operaciones
    suma.onclick = function(e){
        operandoa = calculator__display.textContent;
        operacion = "+";
        limpiar();
    }
 
    menos.onclick = function(e){
        operandoa = calculator__display.textContent;
        operacion = "-";
        limpiar();
    }
 
    division.onclick = function(e){
        operandoa = calculator__display.textContent;
        operacion = "/";
        limpiar();
    }
 
    multiplicacion.onclick = function(e){
        operandoa = calculator__display.textContent;
        operacion = "*";
        limpiar();
    }
 
    raiz.onclick = function(e){
        operandoa = calculator__display.textContent;
        operacion = "raiz";
        limpiar();
        resolver();
    }
 
    reset.onclick = function(e){
        calculator__display.textContent = "";
        operandoa = 0;
        operandob = 0;
        operacion = "";
    }
         
    igual.onclick = function(e){
        operandob = calculator__display.textContent;
        resolver();
    }
  
 
    //funciones
    function limpiar(){
        calculator__display.textContent = "";
    }
 
    function reset(){
        operandoa = 0;
        operandob = 0;
        operacion = "";
    }
     
    function resolver(){
        var res = 0;
        switch(operacion){
            case "+":
                res = parseFloat(operandoa) + parseFloat(operandob);
                break;
     
            case "-":
                res = parseFloat(operandoa) - parseFloat(operandob);
                break;
 
            case "*":
                res = parseFloat(operandoa) * parseFloat(operandob);
                break;

            case "/":
                res = parseFloat(operandoa) / parseFloat(operandob);
                break;
            case "raiz":
                res = parseFloat(operandoa)**(1/2);
                break;
        }
        reset();
        calculator__display.textContent = res;
    }
}