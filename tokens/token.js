import jwt from 'jsonwebtoken';

const chaveSecreta = 'chave super secreta';
const token = jwt.sign({
    name: "Lucas Rocha dos Santos",
    curso: "NodeJS Segurança",
}, chaveSecreta );

console.log(token);

// Decodificar Token

const tokenDecodificado = jwt.verify(token, chaveSecreta);
console.log(tokenDecodificado);