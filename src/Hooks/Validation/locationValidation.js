export function validateLocation(location) {
    const regex = /^[A-Za-z0-9,. ]*$/; //regex means regular expression
    const isValid = regex.test(location);

    if (location.trim() === "") {
        return {
            status: false,
            message: "Location address can't be empty.",
        };
    }

    if (!isValid) {
        return {
            status: false,
            message:
                "Please enter a valid location address! (Cannot contain symbols or brackets)",
        };
    }

    return { status: true };
}
