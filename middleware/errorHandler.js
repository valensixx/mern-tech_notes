const {logEvents} = require('./logger')

const errorHandler = (err, req, res, next) => {
    logEvents(`${err.name}: ${err.message}\t${req.method}\t{req.url}\t${req.handlers.origin}`, 'errLog.log')
}