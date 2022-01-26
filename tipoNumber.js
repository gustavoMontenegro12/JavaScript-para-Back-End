const pi = Math.pi
const idade = 26

const double = 2.89

const somaDoubleComInt = idade + double
console.log("Soma: " + somaDoubleComInt)

const multiplicaDoubleInt = idade * double
console.log("Multiplicação: " + multiplicaDoubleInt)

//Arredondando números 

const numeroInt = 2
const numeroDouble = 7.5659

console.log("------Arredondando Números---------")
const arredondando = numeroInt * numeroDouble
console.log("Sem Math.round: " + arredondando)
console.log("Com Math.round: " + Math.round(arredondando))

//Formatando Números

console.log("-------Formatando Números---------")
console.log("Sem toFixed: " + arredondando)
console.log("Com toFixed: " + arredondando.toFixed(2))
console.log("note as duas casas após a virgula")