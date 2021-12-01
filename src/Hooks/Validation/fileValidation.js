export function validateFile(file) {
    if (file === "") {
        return {
            status: false,
            message: "Image can't be empty.",
        };
    }

    return {
        status: true,
    };
}
