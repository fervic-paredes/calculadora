var operandoa;
var operandob;
var operation;
var memories;
var state = true; 
var copy;

function calculadora(){

    //variables
    var calculator__display = document.getElementById("calculator__display");
    var off = document.getElementById("off");
    var percent = document.getElementById("%");
    var raiz = document.getElementById("squareroot");
    var flecha = document.getElementById("flecha");
    var reset__encendido = document.getElementById("ON/C");
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
    var period = document.getElementById("punto");
    var igual = document.getElementById("igual");
    var plus__memories = document.getElementById("M+");
     
  
 //000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 
    //buttons

    
        uno.onclick = function(e){
            if (state){
                calculator__display.textContent = calculator__display.textContent + "1";
                copy = "fervic paredes";
                console.log("fervic paredes".substr(copy.indexOf("e"), copy.length));

                
            }
        }

        dos.onclick = function(e){
            if (state){
                calculator__display.textContent = calculator__display.textContent + "2";
            }
        }

        tres.onclick = function(e){
            if (state){
                calculator__display.textContent = calculator__display.textContent + "3";
            }
        }

        cuatro.onclick = function(e){
            if (state){
                calculator__display.textContent = calculator__display.textContent + "4";
            }
        }

        cinco.onclick = function(e){
            if (state){
                calculator__display.textContent = calculator__display.textContent + "5";
            }
        }

        seis.onclick = function(e){
            if (state){
                calculator__display.textContent = calculator__display.textContent + "6";
            }
        }

        siete.onclick = function(e){
            if (state){
                calculator__display.textContent = calculator__display.textContent + "7";
            }
        }

        ocho.onclick = function(e){
            if (state){
                calculator__display.textContent = calculator__display.textContent + "8";
            }
        }

        nueve.onclick = function(e){
            if (state){
                calculator__display.textContent = calculator__display.textContent + "9";
            }
        }

        cero.onclick = function(e){
            if (state){
                calculator__display.textContent = calculator__display.textContent + "0";
            }
        }

        period.onclick = function(e){
            if (state){
                calculator__display.textContent = calculator__display.textContent + ".";
            }
        }

        MRC.onclick = function(e){
            if (state){
                calculator__display.textContent = memories;
            }
        }

        less__memories.onclick = function(e){
            if (state){
                memories = -(calculator__display.textContent);
                limpiar();
            }
        }

        plus__memories.onclick = function(e){
            if (state){
                memories = calculator__display.textContent;
                limpiar();
            }
        }

        flecha.onclick = function(e){
            if (state){
                calculator__display.textContent = calculator__display.textContent.slice(1);
            }
        }
    

    reset__encendido.onclick = function(e){
        if (state){
            limpiar();
            clear__all();
            state = true;
        }
    }

    off.onclick = function(e){
        if (state){
            limpiar();
            clear__all();
            state = false;
        }
    } 
    
    
 //000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    //operationes
    suma.onclick = function(e){
        operandoa = calculator__display.textContent;
        operation = "+";
        limpiar();
    }
 
    menos.onclick = function(e){
        operandoa = calculator__display.textContent;
        operation = "-";
        limpiar();
    }
 
    division.onclick = function(e){
        operandoa = calculator__display.textContent;
        operation = "/";
        limpiar();
    }
 
    multiplicacion.onclick = function(e){
        operandoa = calculator__display.textContent;
        operation = "*";
        limpiar();
    }
 
    raiz.onclick = function(e){
        operandoa = calculator__display.textContent;
        operation = "raiz";
        limpiar();
        resolver();
    }

    percent.onclick = function(e){
        operandoa = calculator__display.textContent;
        calculator__display.textContent = calculator__display.textContent + "%";
        copy = calculator__display.textContent;
        operation = "%";
    }
 
    igual.onclick = function(e){
        operandob = calculator__display.textContent;
        resolver();
    }
 
    
 //000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    //funciones
    function limpiar(){
        calculator__display.textContent = "";
    }
 
    function clear__all(){
        operandoa = 0;
        operandob = 0;
        operation = "%";
    }
     
    function resolver(){
        var res = 0;
        switch(operation){
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
            
            case "%":
                operandob = calculator__display.textContent.substr(copy.indexOf("%") + 1, copy.length);
                res = (parseFloat(operandoa) / 100) * parseFloat(operandob);
        }
        clear__all();
        calculator__display.textContent = res;
    }
}