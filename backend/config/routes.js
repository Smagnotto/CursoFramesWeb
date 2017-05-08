const express = require('express');

/* Declarando funções no exports é a forma que voce usa para passar parametros para outro modulos. */
module.exports = function(server) {

    //API Routes
    const router = express.Router();
    server.use('/api', router);

    //rotas da API
    const billingCyclesService = require('../api/billingCycles/billingCyclesService');
    billingCyclesService.register(router, '/billingCycles');

    /* Mapeando a rota manualmente */
    const billingSummaryService = require('../api/billingSummary/billingSummaryService'); 
    router.route('/billingSummary').get(billingSummaryService.getSummary)
}