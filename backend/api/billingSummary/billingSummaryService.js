/* Criação de um serviço e mapeamento manual pelo express */

const _ = require('lodash');
const BillingCycles = require('../billingCycles/billingCycles')

//middleware responsavel por todos os sumarizar todos os nossos ciclos de pagamentos
function getSummary(req, res) {
    BillingCycles.aggregate({
        $project: { 
            credit: { $sum: "$credits.value" }, 
            debt: { $sum: "$debts.value" }
        }
    }, {
        $group: { 
            _id: null, 
            credit: { $sum: "$credit" }, 
            debt: { $sum: "$debt" } 
        }
    }, {
        $project: { _id: 0, credit: 1, debt: 1 } //Mostra apenas o credito e o debito
    }, function (error, result) {
        if (error) {
            res.status(500).json({ errors: [error] });
        } else {
            res.json(_.defaults(result[0], { credit: 0, debt: 0 })); //define um valor padrão para o retorno do objeto
        }
    });
}

module.exports = { getSummary };