import { describe, expect, it } from "vitest";
import { getGiftsToRefill } from "../src/07-getGiftsToRefill";

describe("given the getGiftsToRefill function", () => {
  it("should be a funtion", () => {
    expect(typeof getGiftsToRefill).toBe("function");
  });

  it("should throw an error if not provider parameter", () => {
    expect(() => getGiftsToRefill()).toThrow();
  });

  it("should throw an error if one parameter is not an array", () => {
    expect(() => getGiftsToRefill({}, "gift", "gift")).toThrow();
  });

  it("should throw an error if one parameter is an empty array ", () => {
    expect(() => getGiftsToRefill(["gift"], ["gift"], [])).toThrow();
  });

  it("should throw an error if the data in the array is not a string", () => {
    expect(() => getGiftsToRefill(["gift"], ["gift"], [3])).toThrow();
  });

  it("", () => {
    expect(getGiftsToRefill(["a", "a"], ["b", "b"], ["c", "c"])).toEqual([
      "a",
      "b",
      "c",
    ]);
  });

  it("", () => {
    expect(
      getGiftsToRefill(
        ["bici", "coche", "bici", "bici"],
        ["coche", "bici", "muñeca", "coche"],
        ["bici", "pc", "pc"]
      )
    ).toEqual(["muñeca", "pc"]);
  });
});
