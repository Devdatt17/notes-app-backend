const validateRequestId = function (requestId) {
    const regexForRequestId = /^[a-zA-Z0-9-]+$/
    return regexForRequestId.test(requestId) || new Error("ERROR: _id is not valid must contain aplhanumeric characters");
}

const validateRequestTitle = function (requestTitle) {
    const regexForRequestTitle = /^[a-zA-Z0-9+==<>]+$/
    return regexForRequestTitle.test(requestTitle) || new Error("ERROR: title contains some invalid characters")
}

const validation = function (req, res, next) {
    validateRequestId()
    validateRequestTitle()
    next()
}

module.exports = validation