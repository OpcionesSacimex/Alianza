
export const xpfrom=({value=0,porcentaje=0,decimales=2})=>{
    return parseFloat(parseFloat((porcentaje*value)/100).toFixed(decimales))
}