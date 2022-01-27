// truthy e falsy

console.log("Zero == false, false ou true: ", 0 == false)
console.log("1 == true, false ou true: ", 1 == true)

//conversão implícita

const numero = 456
const texto = "456 "

//numero é convertido em String e concatenado com texto
console.log(numero + texto)

//conversão explícita

const nome = "Gustavo"
let idade = 26
let idadeEmTexto = String(idade)
let celular = 111123411234
let celularEmTexto = celular.toString()
console.log("Pessoa:", nome, idadeEmTexto, celularEmTexto)