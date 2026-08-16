import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Pipe({
  name: 'fieldClass',
  standalone: true
})
export class FieldClassPipe implements PipeTransform {
  transform(control: AbstractControl | null): string {
    return !!(control && control.invalid && (control.dirty || control.touched))
      ? ''
      : 'is-invalid';
  }
}
