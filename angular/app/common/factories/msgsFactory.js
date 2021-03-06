(function() {
    app.factory('msgs', [
        'toastr',
        MsgsFactory])

    function MsgsFactory(toastr) {
        function addMsgs(msgs, title, method) {
            if (msgs instanceof Array){
                msgs.forEach(msg => toastr[method](msg, title));
            } else {
                toastr[method](msgs, title);
            }
        }

        function addSuccess(msgs) {
            addMsgs(msgs, 'Sucesso', 'success');
        }

        function addError(msgs) {
            addMsgs(msgs, 'Erro', 'error');
        }

        function addWarning(msgs) {
            addMsgs(msgs, 'Alerta', 'warning');
        }

        return { addSuccess, addError, addWarning }
    }
})();