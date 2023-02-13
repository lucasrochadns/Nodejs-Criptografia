import { scryptSync, randomBytes, timingSafeEqual } from "crypto";

function criaHashComSal(senha){
    const sal = randomBytes(16).toString('hex');
    const senhaHashheada = scryptSync(senha, sal, 64).toString('hex');
    return `${sal}:${senhaHashheada}`;
}

class Usuario{
    constructor(nome, senha){
        this.nome = nome;
        [this.sal, this.hash] = criaHashComSal(senha).split(':');
    }
    
    autentica(nome, senha){
        if(nome === this.nome ){
            const testHash = scryptSync(senha, this.sal, 64);
            const hashReal = Buffer.from(this.hash, 'hex');

            const hashesCorrespondem = timingSafeEqual(testHash, hashReal);

            if(hashesCorrespondem){
                console.log('Usuário autenticado com sucesso');
                return true;
            }
        }
        console.log('Usuário o senha incorreta');
        return false;
    }

}

const jm = new Usuario('lucasrocha', 'senha852369');
console.log(jm);

// TestSucess
jm.autentica('lucasrocha', 'senha852369');
console.log(jm);