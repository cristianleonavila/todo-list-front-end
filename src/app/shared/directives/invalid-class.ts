import { Directive, HostBinding, inject } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appInvalidClass]',
  standalone: true
})
export class InvalidClass {

  private control = inject(NgControl);

  @HostBinding('class.is-invalid')
  get isInvalid(): boolean {
    const control = this.control.control;

    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched)
    );
  }
}
