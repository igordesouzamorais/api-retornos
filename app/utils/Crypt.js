const CryptoJS = require("crypto-js");

//chave de criptografia
const KEY_CRYPTO = "pao de batata";

const DADOS_CRIPTOGRAFAR = {
    algoritmo : "aes256",
    segredo : KEY_CRYPTO,
    tipo : "hex"
};

exports.criptografar = async (senha) => {

    return CryptoJS.AES.encrypt(senha, DADOS_CRIPTOGRAFAR.segredo);
};

exports.descriptografar = async (senha) => {
    
    let bytes = CryptoJS.AES.decrypt(senha, DADOS_CRIPTOGRAFAR.segredo);
    return bytes.toString(CryptoJS.enc.Utf8);
};