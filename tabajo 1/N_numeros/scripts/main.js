"use strict";
function findMinMax() {
    const input = document.getElementById("inputNumbers").value;
    const numbers = input.split(",").map(num => parseInt(num.trim(), 10));
    
    if (numbers.length === 0) {
        const seccion4 = document.createElement("section");
        seccion4.textContent = "Hola, Los valores ingresados no son validos!";
        seccion4.id = "sec4";
        seccion4.className = "seccion4";
        document.body.appendChild(seccion4);
      return;
    }
    const maxNumber = Math.max(...numbers);
    const minNumber = Math.min(...numbers);
    document.getElementById("maxNumber").textContent = maxNumber;
    document.getElementById("minNumber").textContent = minNumber;
    
    const seccion2 = document.createElement("section");
    seccion2.textContent =  id="maxNumber";
    seccion2.textContent =  id="minNumber";
    seccion2.id = "sec2";
    seccion2.className = "seccion2";

  }