// const usingCallbacks = () => {
//   setTimeout(() => {
//     document.body.style.backgroundColor = "red";
//     setTimeout(() => {
//       document.body.style.backgroundColor = "orange";
//       setTimeout(() => {
//         document.body.style.backgroundColor = "yellow";
//         setTimeout(() => {
//           document.body.style.backgroundColor = "green";
//           setTimeout(() => {
//             document.body.style.backgroundColor = "blue";
//             setTimeout(() => {
//               document.body.style.backgroundColor = "indigo";
//               setTimeout(() => {
//                 document.body.style.backgroundColor = "violet";
//               }, 1000);
//             }, 1000);
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// };

/**
 * Changes the background color of the document body after a delay using a callback.
 *
 * @param {string} newColor - The color to change the background to.
 * @param {number} delay - The delay in milliseconds before changing the color.
 * @param {function} callback - A function to be called once the background color has been changed.
 */
const delayedColorChange = (newColor, delay, callback) => {
  setTimeout(() => {
    document.body.style.backgroundColor = newColor;
    if (!callback) return;
    callback();
  }, delay);
};

/**
 * Changes the background color of the document body in sequence using callbacks.
 */
const usingCallbacks = () => {
  delayedColorChange("red", 1000, () => {
    delayedColorChange("orange", 1000, () => {
      delayedColorChange("yellow", 1000, () => {
        delayedColorChange("green", 1000, () => {
          delayedColorChange("blue", 1000, () => {
            delayedColorChange("indigo", 1000, () => {
              delayedColorChange("violet", 1000, () => {
                delayedColorChange("white", 1000);
              });
            });
          });
        });
      });
    });
  });
};

export default usingCallbacks;
