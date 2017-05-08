const mongoose = require('mongoose');
/* 
String de conexão com usuário e senha:
    module.exports = mongoose.connect('mongodb://username:password@localhost:port/name_database');
*/
module.exports = mongoose.connect('mongodb://localhost/db_finances');

/* Formas global da mensagem de erro */
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório.";
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'.";
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'.";
mongoose.Error.messages.String.enum = "O '{VALUE}' não válido para o atributo '{PATH}'.";