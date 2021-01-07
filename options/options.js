const commandName = '_execute_browser_action';

/**
 * Update the UI: set the value of the shortcut textbox.
 */
async function updateUI() {
  let commands = await browser.commands.getAll();
  for (command of commands) {
    if (command.name === commandName) {
      document.querySelector('#shortcut').value = command.shortcut;
    }
  }
}

/**
 * Show and hide a message when the changes are saved
 */
async function msgUpdated() {
  var updatedMessage = document.querySelector("#updatedMessage");
  updatedMessage.classList.replace("hidden", "shown");
  //console.log("Shortcut Updated");
  setTimeout(function(){ updatedMessage.classList.replace("shown", "hidden"); }, 3000);
}

/**
 * Update the shortcut based on the value in the textbox.
 */
async function updateShortcut() {
  await browser.commands.update({
    name: commandName,
    shortcut: document.querySelector('#shortcut').value
  });
  msgUpdated();
}

/**
 * Reset the shortcut and update the textbox.
 */
async function resetShortcut() {
  await browser.commands.reset(commandName);
  updateUI();
  msgUpdated();
}

/**
 * Update the UI when the page loads.
 */
document.addEventListener('DOMContentLoaded', updateUI);

/**
 * Handle update and reset
 */
document.querySelector('#shortcut').addEventListener('change', updateShortcut);
document.querySelector('#reset').addEventListener('click', resetShortcut);
/**
 * Handle the keyboard shortcut capture events
 */
document.querySelector('#shortcut').addEventListener('focus', captureKeys);
document.querySelector('#shortcut').addEventListener('keydown', startCaptureShortcut);
document.querySelector('#shortcut').addEventListener('keyup', endCaptureShortcut);
