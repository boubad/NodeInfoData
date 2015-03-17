//date-format.js

import moment from 'moment';

export class DateFormatValueConverter {
  toView(value, format) {
    if ((value == undefined) || (value === null)) {
      return moment().format(format);
    } else {
      return moment(value).format(format);
    }
  }
  fromView(value, format) {
    try {
      return moment(value, format);
    } catch (e) {
      return moment();
    }
  }
}
