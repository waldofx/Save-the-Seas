export function validateFile(file) {
    if (file.trim() === "") {
        return {
            status: false,
            message: "Image can't be empty.",
        };
    }

    return {
        status: true,
    };
}
