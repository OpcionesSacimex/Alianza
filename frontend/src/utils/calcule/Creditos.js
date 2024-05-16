import moment from "moment";
import {trunc} from "./Calcule"
const iva = 1.16;

//permite calcular el monto maximo que se le puede prestar a un cliente
export const calcularCredito = ({tasa=0.022,meses=3.0,pagoQuincenal,max=100000}) => {
    const tasaIva = tasa * iva;
    const pagoMensual = pagoQuincenal * 2;
    const potencia = Math.pow(1 + tasaIva, meses);
    let va = parseInt(pagoMensual * ((potencia - 1) / (tasaIva * potencia)));
    if (va > max){
        va = max;
    };

    return va;
};

//prestamo solicitado, un mes con interes, plazo
export const calcularQuincena = (prestamo,plazo)=>{
    return (prestamo/(plazo*2))
}


export const calcularINT = (monto, taza,plazo) =>{
    //360 año fiscal
    //0.16 IVA
    //30 dias (un mes)
    const tazaPerido = ((taza/100)*(1+0.16)*30)/360
    const pago = monto * tazaPerido* Math.pow((1+tazaPerido),(plazo))/(Math.pow((1+tazaPerido),plazo)-1)
    return (pago * (plazo))
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

    //algoritmo 1
    
    //const hoy = moment()
    //const fin = hoy.add(plazo,"months")
    //const diff = -Math.round(moment().diff(fin,"days",true))
    //const fd = Math.pow(0.999997,(2*diff)-1)
    //const fr = 0.0273857860
    //const cr = fd * fr * (monto / 1000) * diff
    
//algoritmo 2
    const df2 = -Math.round(moment().diff(moment().add((plazo*30),"days"),"days",true))
    const cr_cal = new CR({dias:df2,monto:monto})


    //console.log(cr_cal.calcular_cobertura_riesgo())
   //algoritmo 2
   /*const hoy = moment()
    const fin = hoy.add((plazo*30),"days")
    const diff = -Math.round(moment().diff(fin,"days",true))*/
    return redondeoToC(cr_cal.calcular_cobertura_riesgo())
}
//=REDOND.MULT(C16*C21*C20/1000,0.5)
class CR {
    constructor({dias=1,monto=1}){
        let a=0; //FO
        let b=0; //OO
        let d=0; //dias
        if(dias>0 && dias<90){a=1;b=0.042857143;d=dias;}
        else if(dias>=90 && dias<216){a=0.9764832910;b=0.0418492440; d=dias-90;}
        else if(dias>=216 && dias<342){a=0.944132574;b=0.040462728; d=dias-216;}
        else if(dias>=342 && dias<468){a= 0.912853625;b=0.039122142; d=dias-342;}
        else if(dias>=468 && dias<594){a=0.882610943;b=0.037825971; d=dias-468;}
        else if(dias>=594 && dias<720){a=a= 0.853370190;b=0.036572744;d=dias-594;}
        else if(dias>=720 && dias<846){a= 0.8250981730;b=0.0353610340; d=dias-720;}
        else if(dias>=846 && dias<972){a=0.7977628050;b=0.0341894710; d=dias-846;}
        else if(dias>=972 && dias<1098){a= 0.7713330490;b=0.0330567180; d=dias-972;}
        else if(dias>=1098 && dias<1224){a= 0.7457789100;b= 0.0319614930; d=dias-1098;}
        else if(dias>=1224){a=0.7210713710;b=  0.0309025500; d=dias-1224;}
        this.FD_OO =  new FD_OO(a,b,d);
        this.dias=dias;
        this.monto=monto;
    }
    calcular_cobertura_riesgo(){
        const fr = this.FD_OO.getResult()
        return redondeoToC((this.monto*fr*this.dias)/1000)
    }
}

class FD_OO {
    constructor (a,b,d){
        this.ADEC= 199.9732647;// El valor que decrece A
        this.BDEC= 199.97326465;// El valor que decrece B

        this.a=a;
        this.b=b;
        this.d=d;
        this.setAB()
    }
    setAB(){
        //TRUNCAR(ABS(B3-(B3*($I$2/100))),9)
        
        for(let i=0;i<this.d;i++){
            this.a= trunc(Math.abs(this.a-(this.a*(this.ADEC/100))),9)
            this.b= trunc(Math.abs(this.b-(this.b*(this.BDEC/100))),9)
        }
    }
    getResult(){
        return this.a*this.b
    }
}
