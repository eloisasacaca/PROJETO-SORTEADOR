


function generateNumber(){
    const min = Math.ceil(document.querySelector("#inicial").value)
    const max = Math.floor(document.querySelector("#final").value)
    const resultTela = document.querySelector(".result")
    
    
    
    if (min >= max){
        resultTela.style.color = "red"
        resultTela.innerHTML = "Não é possível sortear um número, verifique se o intervalo está correto"
    } else{
     resultTela.style.color = "#343674"
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    resultTela.innerHTML = "O número sorteado é " + result
    }

}

