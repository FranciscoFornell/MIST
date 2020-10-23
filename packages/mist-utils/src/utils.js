/**
 * Utils module.
 * @module Utils
 */
/**
 * Takes an object and a whitelist of properties names, and returns a new object with only the whitelisted properties
 * @param {Object} obj - The origin object
 * @param {...string} property - a property name to be picked
 * @returns {Object} Result object
 */
const pick = (obj, ...whiteList) =>
  whiteList.reduce(
    (prev, key) => (obj[key] ? { ...prev, [key]: obj[key] } : prev),
    {}
  );

export { pick };
