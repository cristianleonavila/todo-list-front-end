import { Component, input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorMessage } from './types/error-message';

@Component({
  selector: 'div[app-form-error]',
  imports: [],
  templateUrl: './form-error.html',
  styleUrl: './form-error.scss',
  host: {
    class: 'invalid-feedback'
  }
})
export class FormError {

  control = input.required<FormControl>();
  messages = input.required<ErrorMessage>();
  controlName = input.required<string>();

  isInvalid() {
    return !!(
      this.control() &&
      this.control().invalid &&
      (this.control().dirty || this.control().touched)
    );
  }

  get message(): string | null {
    const control = this.control();

    if (!control.invalid || !control.errors) {
      return null;
    }

    const fieldMessages = this.messages()[this.controlName()];

    if (!fieldMessages) {
      return null;
    }

    const error = Object.keys(control.errors)[0];

    return fieldMessages[error] ?? null;
  }
}
