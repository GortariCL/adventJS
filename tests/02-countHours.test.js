import { describe, expect, it } from "vitest";
import { countHours } from "../src/02-countHours";

describe("given the function wrapping", () => {
  it("should be a function", () => {
    expect(typeof countHours).toBe("function");
  });

  it("should throw an error if first parameter is not a number", () => {
    expect(() => countHours("", 2)).toThrow();
  });

  it("should throw an error if second parameter is not an array", () => {
    expect(() => countHours("hola", 3)).toThrow();
  });

  it("should throw an error if array is empty", () => {
    expect(() => countHours(2, [])).toThrowError();
  });

  it("should throw an error if the data in the array is not a string", () => {
    expect(() => countHours(2, [3, {}, true])).toThrowError();
  });

  it("given the year 2022 and an array ['01/06', '04/30', '12/23'] should return 4", () => {
    expect(countHours(2022, ["01/06", "04/30", "12/23"])).toEqual(4);
  });
});
