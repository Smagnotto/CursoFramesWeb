(function () {
    app.factory('handleResponseError', [
        '$q',
        '$window',
        'consts',
        HandleResponseErrorFactory
    ])

    function HandleResponseErrorFactory($q, $window, consts) {
        function responseError(errorResponse) {
            if (errorResponse.status === 403) {
                localStorage.removeItem(consts.userKey)
                $window.location.href = '/'

                //msgs.addWarning('Faça login novamente.')
            }
            return $q.reject(errorResponse)
        }

        return { responseError }
    }
})()