import { describe, expect, it } from "vitest";
import { createCube } from "../src/06-createCube";

describe("given createCube function", () => {
  it("should be a function", () => {
    expect(typeof createCube).toBe("function");
  });

  it("should throw an error if not provider parameter", () => {
    expect(() => createCube()).toThrow();
  });

  it("should throw an error if provided parameter is not a number", () => {
    expect(() => createCube("3")).toThrow();
  });

  it("should throw an error if provided parameter is less than 0", () => {
    expect(() => createCube(-1)).toThrow();
  });

  it("", () => {
    expect(createCube(1)).toEqual("/\\_\\\n\\/_/");
  });
});
