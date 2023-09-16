
// esse arquivo serve para colocar os erros chamando com o comando throw

//404
function notFound(item: string) {
    return {
        type: "notFound",
        message: `${item} não encontrado(a)`
    };
};

//409
function conflict(item = "conflito") {
    return {
        type: "conflict",
        message: `${item}`
    }
};

//422
function UnprocessableEntity(item: string) {
    return {
        type: "Unprocessable Entity",
        message: `${item}`
    };
};

//400
function BadRequest(item: string) {
    return {
        type: "Bad request",
        message: `${item}`
    };
};

//500
function intervalServerError(item: string) {
    return {
        type: "internal server error",
        message: `${item}`
    };
};

export const errors = {
    notFound, conflict, UnprocessableEntity,
    BadRequest, intervalServerError
};

