import moment from "moment";
const iva = 1.16;

//permite calcular el monto maximo que se le puede prestar a un cliente
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

//prestamo solicitado, un mes con interes, plazo
export const calcularQuincena = (prestamo,plazo)=>{
    return (prestamo/(plazo*2))
}


export const calcularINT = (monto, taza,plazo) =>{
    //360 año fiscal
    //0.16 IVA
    //15 quincena
    const tazaPerido = ((taza/100)*(1+0.16)*15)/360
    const pago = monto * tazaPerido* Math.pow((1+tazaPerido),(plazo*2))/(Math.pow((1+tazaPerido),plazo*2)-1)
    return (pago * (plazo*2))
}

export const redondeoToC = (monto)=>{
    const pesos = parseFloat(parseFloat(monto).toFixed(2))
    const base = (Math.trunc(pesos))
    

    if(parseFloat(base) === parseFloat(pesos)){
        return base
    }
    const redondo = base+.50
    if(redondo>monto){
        return redondo
    }else if(redondo === pesos){
        return redondo
    }else if(redondo<pesos){
        return base + 1
    }  
}

export const cobertura_riesgo = (monto,plazo)=>{
    const hoy = moment()
    const fin = hoy.add(plazo,"months")
    const diff = -Math.round(moment().diff(fin,"days",true))
    const fd = Math.pow(0.999997,(2*diff)-1)
    const fr = 0.0273857860
    const cr = fd * fr * (monto / 1000) * diff
    return redondeoToC(cr)
}