// authorizestep.js
//
import {
  UserInfo
}
from './userinfo';
import {Redirect} from 'aurelia-router';
//
export class AuthorizeStep {
  static inject() {
    return [UserInfo];
  }
  constructor(userInfo) {
    this.userInfo = userInfo;
  }

  run(routingContext, next) {
    // Check if the route has an "auth" key
    // The reason for using `nextInstructions` is because
    // this includes child routes.
    if (routingContext.nextInstructions.some(i => i.config.auth)) {
      let isLoggedIn = false;
      if ((this.userInfo !== undefined) && (this.userInfo !== null)) {
        isLoggedIn = this.userInfo.is_connected;
      }
      if (!isLoggedIn) {
        return next.cancel(new Redirect('login'));
      }
      return next();
    } else {
      return next();
    }
  }
}
