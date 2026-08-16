import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Pipe({
  name: 'isInvalid',
  standalone: true
})
export class IsInvalidFieldPipe implements PipeTransform {
  transform(control: AbstractControl | null): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}
