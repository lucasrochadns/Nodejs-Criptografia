const mensagemSecreta = 'LUCAS ROCHA DOS SANTOS';

function cifraMensagem(mensagem, movimento){
    const mensagemCifrada = mensagem.split('').map( caractere => {
        const codigoCaractere = caractere.charCodeAt(0);
        return String.fromCharCode(codigoCaractere + movimento);
    });
    return mensagemCifrada.join('');
}


function decifraMensagem(mensagem, movimento){
    const mensagemCifrada = mensagem.split('').map( caractere => {
        const codigoCaractere = caractere.charCodeAt(0);
        return String.fromCharCode(codigoCaractere - movimento);
    });
    return mensagemCifrada.join('');
}

const msg = cifraMensagem(mensagemSecreta, 3);


console.log(mensagemSecreta);
console.log(cifraMensagem(mensagemSecreta, 3));
console.log(decifraMensagem(msg, 3));