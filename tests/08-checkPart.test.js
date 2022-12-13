import { describe, expect, it } from "vitest";
import { checkPart } from "../src/08-checkPart";

describe("given the checkPart function", () => {
    it("should be a function", () => {
        expect(typeof checkPart).toBe("function");
    });

    it("should throw an error if not provider parameter", () => {
        expect(() => checkPart()).toThrow();
    });

    it("should throw an error if parameter is not a string", () => {
        expect(() => checkPart(123)).toThrow();
    });

    it("given an uwu parameter should return true", () => {
        expect(checkPart("uwu")).toEqual(true);
    });
});