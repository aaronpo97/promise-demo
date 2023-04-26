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
 * Changes the background color of the document body in sequence using async/await.
 */
const usingAsyncAwait = async () => {
  await delayedColorChange("red", 1000);
  await delayedColorChange("orange", 1000);
  await delayedColorChange("yellow", 1000);
  await delayedColorChange("green", 1000);
  await delayedColorChange("blue", 1000);
  await delayedColorChange("indigo", 1000);
  await delayedColorChange("violet", 1000);
  await delayedColorChange("white", 1000);
};

export default usingAsyncAwait;
