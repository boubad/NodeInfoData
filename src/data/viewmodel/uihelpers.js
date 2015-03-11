// uihelpers.js
export class UIHelpers {
  static confirm(message) {
    return window.alert(message);
  }
  static alert(message) {
    window.alert(message);
  }
  static prompt(message, response) {
    return window.prompt(message, response);
  }
} // class UIHelpers
