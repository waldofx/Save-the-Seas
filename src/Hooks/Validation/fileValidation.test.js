import { renderHook } from "@testing-library/react-hooks";
import { validateFile } from "./fileValidation";

describe("when empty", () => {
    it("returns status false, error message", () => {
        const { result } = renderHook(() => validateFile(""));

        expect(result.current).toEqual({
            status: false,
            message: "Image can't be empty.",
        });
    });
});

describe("when valid", () => {
    it("returns status true", () => {
        const { result } = renderHook(() => validateFile("beach.jpg"));

        expect(result.current).toEqual({
            status: true,
            message: undefined,
        });
    });
});
