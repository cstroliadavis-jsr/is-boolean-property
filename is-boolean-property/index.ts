const BAD_DATA_ERROR_MESSAGE =
  'isBooleanProperty: The "data" parameter must be an object.';

/**
 * Determines if the value of a specified property on an object is a boolean.
 * @param data - The object containing the property.
 * @param key - The key of the property to check.
 * @returns True if the property value is a boolean; otherwise, false.
 * @throws {TypeError} If the `data` parameter is not a non-null object.
 * @example
 * const obj = { isActive: true, count: 5 };
 * isBooleanProperty(obj, 'isActive'); // Returns: true
 * isBooleanProperty(obj, 'count');    // Returns: false
 * // Throws TypeError: isBooleanProperty: The "data" parameter must be a non-null object.
 * isBooleanProperty(null, 'isActive');
 * isBooleanProperty(42, 'isActive');
 */
export default function isBooleanProperty(data: object, key: PropertyKey): boolean {
  if (!data || typeof data !== "object") {
    throw new TypeError(BAD_DATA_ERROR_MESSAGE);
  }

  const value: unknown = data[key as keyof typeof data];

  return typeof value === "boolean";
}
