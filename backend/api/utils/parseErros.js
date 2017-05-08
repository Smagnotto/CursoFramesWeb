const _ = require('lodash');

function sendErrorsOrNext(req, res, next) {
    const bundle = res.locals.bundle; //Retorna os erros que deram no banco.

    console.log(bundle);

    if (bundle.errors) {
        var errors = parseErrors(bundle.errors);
        res.status(500).json({ errors });
    } else {
        next();
    }
}

function parseErrors(nodeRestfulErrors) {
    const errors = [];
    _.forIn(nodeRestfulErrors, error => errors.push(error.message));
    return errors;
}


module.exports = sendErrorsOrNext;