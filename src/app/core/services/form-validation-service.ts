import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormValidationService {

  private formGroup: FormGroup;

  constructor(form: FormGroup) {
    this.formGroup = form;
  }

  get(fieldName: string) {
    return this.formGroup.get(fieldName);
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.formGroup.get(fieldName);

    return !!(
      field &&
      field.invalid &&
      (field.dirty || field.touched)
    );
  }
}
