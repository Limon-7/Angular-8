import { ErrorHandler } from '@angular/core';

export class AppErrorHandler extends ErrorHandler {
  handleError(error) {
    alert('Unexpeted Error occoured');
    console.log(error);
  }
}
