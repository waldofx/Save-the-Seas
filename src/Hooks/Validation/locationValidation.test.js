import { renderHook } from "@testing-library/react-hooks";
import { validateLocation } from "./locationValidation";

describe("when empty", () => {
    it("returns status false, error message", () => {
        const { result } = renderHook(() => validateLocation(""));

        expect(result.current).toEqual({
            status: false,
            message: "Location address can't be empty.",
        });
    });
});

describe("when location more than 20 chars", () => {
    it("returns status false, error message", () => {
        const { result } = renderHook(() =>
            validateLocation("Indonesia, Bali!!!???")
        );

        expect(result.current).toEqual({
            status: false,
            message:
                "Please enter a valid location address! (Cannot contain symbols or brackets)",
        });
    });
});

describe("when valid", () => {
    it("returns status true", () => {
        const { result } = renderHook(() => validateLocation("Indonesia"));

        expect(result.current).toEqual({
            status: true,
            message: undefined,
        });
    });
});
