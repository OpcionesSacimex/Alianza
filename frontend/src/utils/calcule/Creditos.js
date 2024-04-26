//const inputDiasMes = document.getElementById('días-mes');
//const botonMasDias = document.getElementById('boton-mas-dias');
//const botonMenosDias = document.getElementById('boton-menos-dias');

const iva = 1.16;

export const calcularCredito = ({tasa=0.022,meses=3.0,pagoQuincenal}) => {
    console.log({tasa,meses,pagoQuincenal})
    const tasaIva = tasa * iva;
    const pagoMensual = pagoQuincenal * 2;
    const potencia = Math.pow(1 + tasaIva, meses);
    const va = parseInt(pagoMensual * ((potencia - 1) / (tasaIva * potencia)));

    /*if (va > montoPermitido){
        va = montoPermitido;
    };*/

    return va;
};