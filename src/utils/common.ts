export function memoize(fn: Function): Function {
  const cache: Record<string, any> = {};
  return function (...args: any[]) {
    const key = JSON.stringify(args);
    if (cache[key] === undefined) {
      cache[key] = fn(...args);
    }
    return cache[key];
  };
}

export function checkUniqueValues(obj: Record<string, string>): void {
  const totalValueLength = Object.values(obj).length;
  const uniqueValuesLength = [...new Set(Object.values(obj))].length;
  if (totalValueLength !== uniqueValuesLength) {
    throw new Error("Duplicate value found in service list");
  }
}
