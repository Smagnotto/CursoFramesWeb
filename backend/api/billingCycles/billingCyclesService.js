const BillingCycles = require('./billingCycles');
const parseErros = require('../utils/parseErros.js');

BillingCycles.methods(['get', 'post', 'put', 'delete']);

/* 
    new: true - Sempre que der um update no objeto, retorna o objeto novo e não antigo (antigo é o padrão)
    runValidators: true - Força a rodar as validações definidas no mapeamento no Update também e não só na inserção
*/

BillingCycles.updateOptions({ new: true, runValidators: true })  

/* Faz a Uniformizando as mensagens de erros */
BillingCycles.after('post', parseErros.sendErrorsOrNext).after('put', parseErros.sendErrorsOrNext); //intercepta o evento e depois de executar chama a função

/* Cria o método count (responsável por retornar a quantidade de documentos do MongoDB) */ 
BillingCycles.route('count', function(req, res, next) {
    BillingCycles.count(function(error, value) {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json({ value });
        }
    });
})

module.exports = BillingCycles;