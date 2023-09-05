export default class Validator {
  validateUsername(username) {
    this.pattern = /^[a-zA-Z][a-zA-Z0-9_-]*[a-zA-Z0-9]$/;

    if (this.pattern.test(username)) {
      if (!/\d{4,}/.test(username)) {
        if (!/^[0-9_-]|[0-9_-]$/.test(username)) {
          return true;
        }
      }
    }
    return false;
  }
}
