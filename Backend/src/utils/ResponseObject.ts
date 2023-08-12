const SuccessResObj = (data: Object, message: string) => {
    return {
        data: data,
        status: 200,
        message: message,
    };
};

const ErrorResObj = (status: number, message: string) => {
    return {
        error: "Error",
        status: status,
        message: message,
    };
};

const NotificationObj = (status: number, message: string) => {
    return {
        status: status,
        message: message,
    };
};

module.exports = { SuccessResObj, ErrorResObj, NotificationObj };  