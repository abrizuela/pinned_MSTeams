let modifiers = ["Alt", "Control", "Shift", "Command"]
let shortcutArray = [];
let count = 0;
let shortcut = document.querySelector("#shortcut");

function captureKeys() {
  shortcutArray = [];
  count = 0;
}

function startCaptureShortcut(e) {
  e.preventDefault();
  e.stopPropagation();
  console.log(count+" "+e.key+" "+shortcutArray);
  switch (count) {
    case 0:
      shortcut.value = "";
      shortcutArray[count] = e.key;
      count ++;
      console.log(count+" "+e.key+" "+shortcutArray);
    case 1:
    case 2:
      shortcutArray[count] = e.key;
      count ++;
      break;
    default:
      console.log("more than 3 keys pressed");
      break;
  }
  console.log(count+" "+e.key+" "+shortcutArray);
}

function isValidateShortcut() {
  var isValid = false;
  console.log(shortcutArray.count);
  switch (shortcutArray.count) {
    case 2:
      isValid = (
        modifiers.includes(shortcutArray[0]) && 
        (48 <= shortcutArray[1] && shortcutArray[1] <= 123)
        ) ? true : false;
      break;
    case 3:
      isValid = (
        Modifiers.includes(shortcutArray[0]) && 
        modifiers.includes(shortcutArray[1]) && 
        (48 <= shortcutArray[2] && shortcutArray[2] <= 123)
      ) ? true : false;
      break;
    default:
      console.log("not valid shortcut");
      break;
  }
  return isValid;
}

function endCaptureShortcut() {
  if (isValidateShortcut()) {
    switch (shortcutArray.count) {
      case 1:
        shortcut.value = `${shortcutArray[0]}+${shortcutArray[1]}`
        break;
      case 2:
        shortcut.value = `${shortcutArray[0]}+${shortcutArray[1]}+${shortcutArray[2]}`
        break;
    }
  }
}