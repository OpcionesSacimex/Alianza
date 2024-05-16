export function trunc (x, posiciones = 0) {
    var s = x.toString()
    var l = s.length
    var decimalLength = s.indexOf('.') + 1
  
    if (l - decimalLength <= posiciones){
      return x
    }
    // Parte decimal del número
    var isNeg  = x < 0
    var decimal =  x % 1
    var entera  = isNeg ? Math.ceil(x) : Math.floor(x)
    // Parte decimal como número entero
    // Ejemplo: parte decimal = 0.77
    // decimalFormated = 0.77 * (10^posiciones)
    // si posiciones es 2 ==> 0.77 * 100
    // si posiciones es 3 ==> 0.77 * 1000
    var decimalFormated = Math.floor(
      Math.abs(decimal) * Math.pow(10, posiciones)
    )
    // Sustraemos del número original la parte decimal
    // y le sumamos la parte decimal que hemos formateado
    var finalNum = entera + 
      ((decimalFormated / Math.pow(10, posiciones))*(isNeg ? -1 : 1))
    
    return finalNum
  }