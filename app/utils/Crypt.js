const crypto = require("crypto");
//chave de criptografia
const KEY_CRYPTO = "pao de batata";

const DADOS_CRIPTOGRAFAR = {
    algoritmo : "aes256",
    segredo : KEY_CRYPTO,
    tipo : "hex"
};

exports.criptografar = async (senha) => {
    const cipher = crypto.createCipher(DADOS_CRIPTOGRAFAR.algoritmo, DADOS_CRIPTOGRAFAR.segredo);
    cipher.update(senha);
    return await cipher.final(DADOS_CRIPTOGRAFAR.tipo);
};

exports.descriptografar = async (senha) => {
    const decipher = crypto.createDecipher(DADOS_CRIPTOGRAFAR.algoritmo, DADOS_CRIPTOGRAFAR.segredo);
    decipher.update(senha, DADOS_CRIPTOGRAFAR.tipo);

    return await decipher.final();
};