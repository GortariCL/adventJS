import { describe, expect, it } from "vitest";
import { distributeGifts } from "../src/03-distributeGifts";

describe("given the distributeGifts function", () => {
    it("should be a function", () => {
        expect(typeof distributeGifts).toBe("function");
    });

    it("should throw an error if not array is provider as packOfGifts parameter", () => {
        expect(() => distributeGifts("Gift", [])).toThrow();
    });

    it("should throw an error if not array is provider as reindeers parameter", () => {
        expect(() => distributeGifts([], true)).toThrow();
    });

    it("should throw an error if arrays are empty", () => {
        expect(() => distributeGifts(["hola"], [])).toThrow();
    });

    it("should throw an error if arrays are empty", () => {
        expect(() => distributeGifts([], ["hola"])).toThrow();
    });

    it("should throw an error if the data in the packOfGifts array is not a string", () => {
        expect(() => distributeGifts([1, {}, true], ["hola"])).toThrow();
    });
    it("should throw an error if the data in the reindeers array is not a string", () => {
        expect(() => distributeGifts(["hola"], [1, {}, true])).toThrow();
    });

    it("", () => {
        expect(distributeGifts(["book", "doll", "ball", "football"], ["dasher", "dancer", "cupid"])).toEqual(1);
    });

    it("", () => {
        expect(distributeGifts(["book", "doll", "ball"], ["dasher", "dancer"])).toEqual(2);
    })
});