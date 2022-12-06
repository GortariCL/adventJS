import { describe, expect, it } from "vitest";
import { getMaxGifts } from "../src/05-getMaxGifts";

describe("given the getMaxGifts function", () => {
  it("hould be a function", () => {
    expect(typeof getMaxGifts).toBe("function");
  });

  it("should throw an error if not provider parameter", () => {
    expect(() => getMaxGifts()).toThrow();
  });

  it("should throw an error if first parameter is not an array, second and third parameters are not a number", () => {
    expect(() => getMaxGifts(10, true, {})).toThrow();
  });

  it("should throw an error if first parameter is an empty array", () => {
    expect(() => getMaxGifts([], true, {})).toThrow();
  });

  it("should throw an error if the data in the array is not a number", () => {
    expect(() => getMaxGifts([10, true], 3, 10)).toThrow();
  });

  it("should throw an error if second parameter less than 1", () => {
    expect(() => getMaxGifts([10], 0, {})).toThrow();
  });

  it("should throw an error if third parameter less than 1", () => {
    expect(() => getMaxGifts([10], 3, 0)).toThrow();
  });

  it("", () => {
    expect(getMaxGifts([12, 3, 11, 5, 7], 20, 3)).toEqual(20);
  });

  it("", () => {
    expect(getMaxGifts([50, 70, 30], 100, 3)).toEqual(100);
  });

  it("", () => {
    expect(getMaxGifts([50], 15, 1)).toEqual(0);
  });
});
