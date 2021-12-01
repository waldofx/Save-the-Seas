import { renderHook } from "@testing-library/react-hooks";
import { validateTitle } from "./titleValidation";

describe("when empty", () => {
    it("returns status false, error message", () => {
        const { result } = renderHook(() => validateTitle(""));

        expect(result.current).toEqual({
            status: false,
            message: "Title can't be empty.",
        });
    });
});

describe("when title more than 20 chars", () => {
    it("returns status false, error message", () => {
        const { result } = renderHook(() =>
            validateTitle(
                "Testttttttttttttttttttt titleeeeeeeeeeeeeeeeeeeeeeee"
            )
        );

        expect(result.current).toEqual({
            status: false,
            message: "Title can't be more than 20 characters!",
        });
    });
});

describe("when valid", () => {
    it("returns status true", () => {
        const { result } = renderHook(() => validateTitle("Test title"));

        expect(result.current).toEqual({
            status: true,
            message: undefined,
        });
    });
});
