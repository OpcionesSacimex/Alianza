const iva = 1.16;

export const calcularCredito = ({tasa=0.022,meses=3.0,pagoQuincenal}) => {
    const tasaIva = tasa * iva;
    const pagoMensual = pagoQuincenal * 2;
    const potencia = Math.pow(1 + tasaIva, meses);
    const va = parseInt(pagoMensual * ((potencia - 1) / (tasaIva * potencia)));

    /*if (va > montoPermitido){
        va = montoPermitido;
    };*/

    return va;
};
//total del prestamo solicitado, meses a pagar y taza mensual
export const calcularInteres = (monto,tazaMens,plazo) =>{
    console.log(monto,tazaMens,plazo)
    //return (monto * tazaMens)/100
    const vf =monto * parseFloat(Math.pow((1 + tazaMens/(plazo*2)),(plazo*2)).toFixed(3))
    console.log(parseFloat(Math.pow((1 + tazaMens/(plazo*2)),plazo).toFixed(3)))
    return vf
}
//prestamo solicitado, un mes con interes, plazo
export const calcularQuincena = (prestamo,plazo)=>{
    return (prestamo/(plazo*2))
}