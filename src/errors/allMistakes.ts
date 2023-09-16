
// esse arquivo serve para colocar os erros chamando com o comando throw

//404
function notFound(item: string) {
    return {
        type: "notFound",
        message: `${item}`
    };
};

//409
function conflict(item: string = "conflito") {
    return {
        type: "conflict",
        message: `${item}`
    }
};


export const errors = {
    notFound, conflict
};

