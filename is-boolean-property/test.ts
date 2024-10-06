import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import isBooleanProperty from "./index.ts"; // Update with the correct path

const BAD_DATA_ERROR_MESSAGE =
  'isBooleanProperty: The "data" parameter must be an object.';
const isBooleanPropertyTest = describe("isBooleanProperty");

it(
  isBooleanPropertyTest,
  "returns true when the property value is boolean true",
  () => {
    const obj = { isActive: true };

    expect(isBooleanProperty(obj, "isActive")).toBe(true);
  },
);

it(
  isBooleanPropertyTest,
  "returns true when the property value is boolean false",
  () => {
    const obj = { isActive: false };

    expect(isBooleanProperty(obj, "isActive")).toBe(true);
  },
);

it(
  isBooleanPropertyTest,
  "returns false when the property value is not boolean",
  () => {
    const obj = { count: 5 };

    expect(isBooleanProperty(obj, "count")).toBe(false);
  },
);

it(
  isBooleanPropertyTest,
  "returns false when the property does not exist",
  () => {
    const obj = { count: 5 };

    // @ts-expect-error - Testing invalid data type
    expect(isBooleanProperty(obj, "isActive")).toBe(false);
  },
);

it(isBooleanPropertyTest, "throws TypeError when data is null", () => {
  // @ts-expect-error - Testing invalid data type
  expect(() => isBooleanProperty(null, "isActive")).toThrow(TypeError);
});

it(isBooleanPropertyTest, "throws TypeError when data is not an object", () => {
  // @ts-expect-error - Testing invalid data type
  expect(() => isBooleanProperty(42, "isActive")).toThrow(TypeError);
});

it(
  isBooleanPropertyTest,
  "throws TypeError with correct message when data is null",
  () => {
    // @ts-expect-error - Testing invalid data type
    expect(() => isBooleanProperty(null, "isActive")).toThrow(
      BAD_DATA_ERROR_MESSAGE,
    );
  },
);

it(isBooleanPropertyTest, "handles symbol keys correctly", () => {
  const sym = Symbol("isActive");
  const obj = { [sym]: true };

  expect(isBooleanProperty(obj, sym)).toBe(true);
});
