export function validateTitle(title) {
    if (title.trim() === "") {
        return {
            status: false,
            message: "Title can't be empty.",
        };
    }

    if (title.length > 20) {
        return {
            status: false,
            message: "Title can't be more than 20 characters!",
        };
    }

    return { status: true };
}
