
function converter(){
let opcoes = document.getElementById('opcoes');
let opcoes2 = document.getElementById('opcoes2');
let quantia = parseFloat(document.getElementById('quantia').value);

let valorOpcoes = opcoes.value;
let valorOpcoes2 = opcoes2.value;

if(isNaN(quantia)){
     alert('ERRO: a algo de errado!!');
     return;
}




if(valorOpcoes === 'REAL' &&  valorOpcoes2 === 'DOLAR'){
    let resultadoREALDOLAR = quantia * 0.18;
    let moedaConvertida = document.getElementById('moedaConvertida');
    moedaConvertida.textContent = `${resultadoREALDOLAR.toFixed(2)} Dolares`;
}else if(valorOpcoes === 'REAL' && valorOpcoes2 === 'EURO'){
    let resultadoREALEURO = quantia * 0.16;
    let moedaConvertida = document.getElementById('moedaConvertida');
    moedaConvertida.textContent = `${resultadoREALEURO.toFixed(2)} Euros`;
}else if(valorOpcoes === 'DOLAR' && valorOpcoes2 === 'EURO'){
    let resultadoDOLAREURO = quantia * 0.90;
    let moedaConvertida = document.getElementById('moedaConvertida');
    moedaConvertida.textContent = `${resultadoDOLAREURO.toFixed(2)} Euros`;
}else if(valorOpcoes === 'EURO' && valorOpcoes2 === 'DOLAR'){
    let resultadoEURODOLAR = quantia * 1.11;
    let moedaConvertida = document.getElementById('moedaConvertida');
    moedaConvertida.textContent = `${resultadoEURODOLAR.toFixed(2)} Dolares`;
}else if(valorOpcoes === 'EURO' && valorOpcoes2 === 'REAL'){
    let resultadoEUROREAL = quantia * 6.30;
    let moedaConvertida = document.getElementById('moedaConvertida');
    moedaConvertida.textContent = `${resultadoEUROREAL.toFixed(2)} Reais`;
}else if(valorOpcoes === 'DOLAR' && valorOpcoes2 === 'REAL'){
    let resultadoDOLAREAL = quantia * 5.67;
    let moedaConvertida = document.getElementById('moedaConvertida');
    moedaConvertida.textContent = `${resultadoDOLAREAL.toFixed(2)} Reais`;
}else{
    alert('ERRO: a algo de errado!!');
}

document.getElementById('quantia').value = '';
}