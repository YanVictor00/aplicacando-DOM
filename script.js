function exercicio01(){
    let resposta01 = document.getElementById('resposta01')
    let valorResposta01 = resposta01.value.trim()
    console.log(valorResposta01)
    let mensagem = document.getElementById('mensagem')

    if(valorResposta01 == '15'){
        mensagem.style.fontSize = '30px'
        mensagem.textContent = 'PARABÉNS, VOCÊ ACERTOU! :)'
        resposta01.value = ""
    }else{
        mensagem.style.fontSize = '20px'
        mensagem.textContent = 'VOCÊ ERROU! KSKSKS BURRRROOOOOOOO!'
        resposta01.value = ""
    }
}

function exercicio02(){
    let resposta02 = document.getElementById('resposta02')
    let valorResposta02 = resposta02.value.trim()
    console.log(valorResposta02)
    let mensagem2 = document.getElementById('mensagem2')

    if(valorResposta02 == '0'){
        mensagem2.style.fontSize = '30px'
        mensagem2.textContent = 'PARABÉNS, VOCÊ ACERTOU! :)'
        resposta02.value = ""
    }else{
        mensagem2.style.fontSize = '20px'
        mensagem2.textContent = 'VOCÊ ERROU! KSKSKS BURRRROOOOOOOO!'
        resposta02.value = ""
    }
}