export function validateDate(number) {
    if (number.trim() === "") {
        return {
            status: false,
            message: "Date can't be empty.",
        };
    }

    return {
        status: true,
    };
}
