


function generateNumber(){
    const min = Math.ceil(document.querySelector("#inicial").value)
    const max = Math.floor(document.querySelector("#final").value)
    const resultTela = document.querySelector(".result")
    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    resultTela.innerHTML = "O número sorteado é " + result



}

