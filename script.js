//uma função chamada exercicio01
function exercicio01(){
    //criei uma variável que recebe o Input com id "resposta 01"
    let resposta01 = document.getElementById('resposta01')
    //criei uma variável que recebe o valor de "resposta01"
    let valorResposta01 = resposta01.value.trim()
    //debugei para testar o valor
    console.log(valorResposta01)
    //criei uma variável para mostrar uma mensagem no parágrafo 
    let mensagem = document.getElementById('mensagem')

    //se a varável "valorResposta01" for igual a 15
    if(valorResposta01 == '15'){
        //aumentar o tamanho da mensagem
        mensagem.style.fontSize = '30px'
        //mensagem receber um texto
        mensagem.textContent = 'PARABÉNS, VOCÊ ACERTOU! :)'
        //exclui os caracteres resposta do input
        resposta01.value = ""
    }
    //se não
    else{
        //aumentar o tamanho da mensagem
        mensagem.style.fontSize = '20px'
        //mensagem receber um texto
        mensagem.textContent = 'VOCÊ ERROU! KSKSKS BURRRROOOOOOOO!'
        //exclui os caracteres resposta do input
        resposta01.value = ""
    }
}

//uma função chamada exercicio02
function exercicio02(){
    //criei uma variável que recebe o Input com id "resposta 02"
    let resposta02 = document.getElementById('resposta02')
    //criei uma variável que recebe o valor de "resposta02"
    let valorResposta02 = resposta02.value.trim()
    //debugei para testar o valor
    console.log(valorResposta02)
    //criei uma variável para mostrar uma mensagem no parágrafo 
    let mensagem2 = document.getElementById('mensagem2')

    //se a varável "valorResposta02" for igual a 0
    if(valorResposta02 == '0'){
        //aumentar o tamanho da mensagem2
        mensagem2.style.fontSize = '30px'
        //mensagem2 receber um texto
        mensagem2.textContent = 'PARABÉNS, VOCÊ ACERTOU! :)'
        //exclui os caracteres resposta do input
        resposta02.value = ""
    }
    //se não
    else{
        //aumentar o tamanho da mensagem2
        mensagem2.style.fontSize = '20px'
        //mensagem2 receber um texto
        mensagem2.textContent = 'VOCÊ ERROU! KSKSKS BURRRROOOOOOOO!'
        //exclui os caracteres resposta do input
        resposta02.value = ""
    }
}