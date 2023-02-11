import { createHash } from 'crypto';


function criaHash(senha){
    return createHash('sha256').update(senha).digest('hex');
}

class Usuario{
    constructor(nome, senha){
        this.nome = nome;
        this.hash = criaHash(senha);
    }

    autenticar(nome, senha){
        if(nome  === nome && this.hash === criaHash(senha)){
            console.log("Usuário autenticado com sucesso !");
            return true;
        }

        console.log("Usuário ou senha incorretos");
        return false;
    }
}

const usuario = new Usuario('whoami', 'ASdf&&98611314');
console.log(usuario);

usuario.autenticar('whoami', 'ASdf&&98611314');
usuario.autenticar('lucasrocha', 'Asdf&&98611314');
usuario.autenticar('whoami', 'FDsa&&98611314');