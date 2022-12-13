import { describe, expect, it } from "vitest";
import { countTime } from "../src/09-countTime";

describe("given the cuntTime function", () => {
    it("should be a function", () => {
        expect(typeof countTime).toBe("function");
    });

    it("should throw an error if not provider parameter", () => {
        expect(() => countTime()).toThrow();
    });

    it("should throw an error if parameter is an empty array", () => {
        expect(() => countTime([])).toThrow();
    });

    it("should throw an error if the data in the array is not a number", () => {
        expect(() => countTime(["countTime", true])).toThrow();
    });

    it("should throw an error if the data in the array is another like 1 or 0", () => {
        expect(() => countTime([1, 2])).toThrow();
    });

    it("given an array [0, 0, 0, 1] should return 21", () => {
        expect(countTime([0, 0, 0, 1])).toEqual(21);
    });
});