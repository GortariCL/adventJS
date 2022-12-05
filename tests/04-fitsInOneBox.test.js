import { describe, expect, it } from "vitest";
import { fitInOneBox } from "../src/04-fitsInOneBox";

describe("given the fitInOneBox function", () => {
  it("should be a function", () => {
    expect(typeof fitInOneBox).toBe("function");
  });

  it("should throw an error if not array is provider as parameter", () => {
    expect(() => fitInOneBox()).toThrow();
  });

  it("should throw an error if array is empty", () => {
    expect(() => fitInOneBox([])).toThrow();
  });

  it("should throw an error if the data in the array is not a string", () => {
    expect(() => fitInOneBox([{}, true])).toThrow();
  });

  it("", () => {
    expect(
      fitInOneBox([
        { l: 1, w: 1, h: 1 },
        { l: 2, w: 2, h: 2 },
        { l: 3, w: 3, h: 3 },
      ])
    ).toEqual(true);
  });

  it("", () => {
    expect(
      fitInOneBox([
        { l: 1, w: 1, h: 1 },
        { l: 2, w: 2, h: 2 },
        { l: 3, w: 1, h: 3 },
      ])
    ).toEqual(false);
  });

  it("", () => {
    expect(
      fitInOneBox([
        { l: 7, w: 1, h: 2 },
        { l: 4, w: 2, h: 2 },
      ])
    ).toEqual(false);
  });
});
