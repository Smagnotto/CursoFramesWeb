(function() {
    app.controller('BillingCycleController', [
        '$http',
        'msgs',
        'tabs',
        BillingCycleController
    ])

    function BillingCycleController($http, msgs, tabs) {
        const vm = this;

        vm.refresh = function () {
             const url = 'http://localhost:3003/api/billingCycles';

             $http.get(url).then(function(response) {
                vm.billingCycle = {};
                vm.billingCycles = response.data;

                tabs.show(vm, { tabList: true, tabCreate: true })
             }).catch(function(response) {
                 msgs.addError(response.data.errors);
             })
        }

        vm.create = function () {
            const url = 'http://localhost:3003/api/billingCycles';

            $http.post(url, vm.billingCycle).then(function(response) {
                vm.refresh();
                msgs.addSuccess('Registro gravado com sucesso!');
            }).catch(function(response) {
                msgs.addError(response.data.errors);
            });
        }

        vm.refresh();
    }    
})();