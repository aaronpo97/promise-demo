/**
 * Imports the usingAsyncAwait, usingCallbacks, and usingPromises functions and sets up event listeners on buttons to call them.
 */
import usingAsyncAwait from "./usingAsyncAwait";
import usingCallbacks from "./usingCallbacks";
import usingPromises from "./usingPromises";

/**
 * The button element for triggering the usingCallbacks function.
 * @type {HTMLButtonElement}
 */
const callbackButton = document.querySelector("#callback");
callbackButton.addEventListener("click", usingCallbacks);

/**
 * The button element for triggering the usingPromises function.
 * @type {HTMLButtonElement}
 */
const promiseButton = document.querySelector("#promise");
promiseButton.addEventListener("click", usingPromises);

/**
 * The button element for triggering the usingAsyncAwait function.
 * @type {HTMLButtonElement}
 */
const asyncAwaitButton = document.querySelector("#async");
asyncAwaitButton.addEventListener("click", usingAsyncAwait);
