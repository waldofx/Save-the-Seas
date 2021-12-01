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

describe("when valid", () => {
    it("returns status true", () => {
        const { result } = renderHook(() => validateTitle("2022/02/22"));

        expect(result.current).toEqual({
            status: true,
            message: undefined,
        });
    });
});
