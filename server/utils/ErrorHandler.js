export const ErrorHandler = (status, message) => {
    const err = new Error();
        err.status;
        err.message=message;
        return err;
};

