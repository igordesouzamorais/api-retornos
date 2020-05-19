const crypto = require("crypto");
//chave de criptografia
const KEY_CRYPTO = "pao de batata";

const DADOS_CRIPTOGRAFAR = {
    algoritmo : "aes256",
    segredo : KEY_CRYPTO,
    tipo : "hex"
};

exports.criptografar = (senha) => {
    const cipher = crypto.createCipher(DADOS_CRIPTOGRAFAR.algoritmo, DADOS_CRIPTOGRAFAR.segredo);
    cipher.update(senha);
    return cipher.final(DADOS_CRIPTOGRAFAR.tipo);
};

exports.descriptografar = (senha) => {
    const decipher = crypto.createDecipher(DADOS_CRIPTOGRAFAR.algoritmo, DADOS_CRIPTOGRAFAR.segredo);
    decipher.update(senha, DADOS_CRIPTOGRAFAR.tipo);

    return decipher.final();
};