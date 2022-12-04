import { describe, expect, it } from "vitest";
import { wrapping } from "../src/01-wrapping";

describe("given the function countHours", () => {
  it("should be a function", () => {
    expect(typeof wrapping).toBe("function");
  });

  it("should throw an error if not array is provider as parameter", () => {
    expect(() => wrapping()).toThrow();
  });

  it("should throw an error if array is empty", () => {
    expect(() => wrapping([])).toThrow();
  });

  it("should throw an error if the data in the array is not a string", () => {
    expect(() => wrapping([1, {}, true])).toThrow();
  });

  it(`given an array ['book', 'game', 'socks'] should return [
    '*****\n*cat*\n*****',
    '******\n*game*\n******',
    '*******\n*socks*\n*******',
  ]`, () => {
    expect(wrapping(["cat", "game", "socks"])).toEqual([
      "*****\n*cat*\n*****",
      "******\n*game*\n******",
      "*******\n*socks*\n*******",
    ]);
  });
});
