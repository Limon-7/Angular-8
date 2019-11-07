import { AbstractControl, ValidationErrors } from '@angular/forms';
import { promise } from 'protractor';
import { reject } from 'q';
import { resolve } from 'path';

export class SignupValidator {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if (( control.value as string).indexOf(' ') >= 0) {
      return { cannotContainSpace: true };
    }
    return null;
  }
  static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (control.value === 'mosh') {
              resolve({ shouldBeUnique: true });
            } else {
                resolve(null);
            }
        }, 2000);
    });
}
  // static shouldBeUnique(control: AbstractControl): Promise <ValidationErrors | null> {
  //   // tslint:disable-next-line:no-shadowed-variable
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       if (control.value === 'limon') {
  //         resolve( { shouldBeUnique: true });
  //       } else {
  //         resolve(null);
  //       }
  //     }, 2000);
  //   });
  // }
}
