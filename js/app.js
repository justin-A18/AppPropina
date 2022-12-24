function propinaPrimerPorcentaje1(){
    
    let precio = document.getElementById('service').value;
    let resultado  = (parseFloat(precio) * 5 / 100).toFixed(2);
    let total = "$" + resultado;
    
    document.getElementById('propina').innerHTML = total;

    total = resultado;

    let pagoTotal = (parseFloat(precio) + parseFloat(total)).toFixed(2);
    let pagoTotalR = "$" + pagoTotal;
    document.getElementById('total').innerHTML = pagoTotalR;
}

let btn1 = document.getElementById('propina-1');
btn1.onclick = propinaPrimerPorcentaje1;


function propinaPrimerPorcentaje2(){
    
    let precio = document.getElementById('service').value;
    
    let resultado  = (parseFloat(precio) * 10 / 100).toFixed(2);

    let total = "$" + resultado;
    
    document.getElementById('propina').innerHTML = total;
    
    total = resultado;

    let pagoTotal = (parseFloat(precio) + parseFloat(total)).toFixed(2);

    let pagoTotalR = "$" + pagoTotal;

    document.getElementById('total').innerHTML = pagoTotalR;
}

let btn2 = document.getElementById('propina-2');
btn2.onclick = propinaPrimerPorcentaje2;


function propinaPrimerPorcentaje3(){
    
    let precio = document.getElementById('service').value;
    
    let resultado  = (parseFloat(precio) * 15 / 100).toFixed(2);

    let total = "$" + resultado;
    
    document.getElementById('propina').innerHTML = total;

    total = resultado;

    let pagoTotal = (parseFloat(precio) + parseFloat(total)).toFixed(2);

    let pagoTotalR = "$" + pagoTotal;

    document.getElementById('total').innerHTML = pagoTotalR;
    
}

let btn3 = document.getElementById('propina-3');
btn3.onclick = propinaPrimerPorcentaje3;




function propinaPrimerPorcentaje4(){
    
    let precio = document.getElementById('service').value;
    
    let resultado  = (parseFloat(precio) * 25 / 100).toFixed(2);

    let total = "$" + resultado;
    
    document.getElementById('propina').innerHTML = total;

    total = resultado;

    let pagoTotal = (parseFloat(precio) + parseFloat(total)).toFixed(2);

    let pagoTotalR = "$" + pagoTotal;

    document.getElementById('total').innerHTML = pagoTotalR;
    
    
}

let btn4 = document.getElementById('propina-4');
btn4.onclick = propinaPrimerPorcentaje4;




function propinaPrimerPorcentaje5(){
    
    let precio = document.getElementById('service').value;
    
    let resultado  = (parseFloat(precio) * 50 / 100).toFixed(2);

    let total = "$" + resultado;
    
    document.getElementById('propina').innerHTML = total;

    total = resultado;

    let pagoTotal = (parseFloat(precio) + parseFloat(total)).toFixed(2);

    let pagoTotalR = "$" + pagoTotal;

    document.getElementById('total').innerHTML = pagoTotalR;
    
}

let btn5 = document.getElementById('propina-5');
btn5.onclick = propinaPrimerPorcentaje5;


function reset(){
    document.getElementById('service').value = "";
    document.getElementById('propina').innerHTML = "-";
    document.getElementById('total').innerHTML = "-";
}

let resetear = document.getElementById('resetear');

resetear.onclick = reset;