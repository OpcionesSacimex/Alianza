const inputDiasMes = document.getElementById('días-mes');
const botonMasDias = document.getElementById('boton-mas-dias');
const botonMenosDias = document.getElementById('boton-menos-dias');

//const tasa = 0.022;
const iva = 1.16;
const maximoPermitido = 150000;
const tasaIva = tasa * iva;

const calcularCreditoMaximo = ({tasa=0.022}) => {
    const meses = parseFloat(inputNumberMeses.value);
    const pagoQuincenal = parseFloat(inputNumberRange.value);
    const pagoMensual = pagoQuincenal * 2;
    const potencia = Math.pow(1 + tasaIva, meses);
    const va = parseInt(pagoMensual * ((potencia - 1) / (tasaIva * potencia)));

    if (va > maximoPermitido){
        va = maximoPermitido;
    };

    return va;
};