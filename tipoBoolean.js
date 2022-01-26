let total = 13

//for que checa se as duas variáveis tem o mesmo valor, caso não, a variável i é incrementada até que os numeros sejam iguais

for(let i = 0; i <= 20; i++){
    
    let result = i == total
    console.log("Número: " + i)
    console.log("Resultado: ", result)

    if(result == true){
        break
    }

}