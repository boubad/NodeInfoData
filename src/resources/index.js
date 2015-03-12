// index.js
//
import {DateFormatValueConverter} from './date-format';

export function install(aurelia) {
  // register the value converters globally.
  aurelia.withResources(
    DateFormatValueConverter);
}
