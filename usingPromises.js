/**
 * Changes the background color of the document body after a delay using Promises.
 *
 * @param {string} color - The color to change the background to.
 * @param {number} delay - The delay in milliseconds before changing the color.
 * @returns {Promise} A Promise that resolves once the background color has been changed.
 */
const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

/**
 * Changes the background color of the document body in sequence using Promises.
 */
const usingPromises = () => {
  const DELAY = 1000;

  delayedColorChange("red", DELAY)
    .then(() => delayedColorChange("orange", DELAY))
    .then(() => delayedColorChange("yellow", DELAY))
    .then(() => delayedColorChange("green", DELAY))
    .then(() => delayedColorChange("blue", DELAY))
    .then(() => delayedColorChange("indigo", DELAY))
    .then(() => delayedColorChange("violet", DELAY))
    .then(() => delayedColorChange("white", DELAY));
};

export default usingPromises;
