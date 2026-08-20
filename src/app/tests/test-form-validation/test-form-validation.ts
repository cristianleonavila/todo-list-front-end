import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormError } from '@shared/components/form-error/form-error';
import { ErrorMessage } from '@shared/components/form-error/types/error-message';
import { InvalidClass } from '@shared/directives/invalid-class';

@Component({
  selector: 'app-test-form-validation',
  imports: [ReactiveFormsModule, FormError, InvalidClass],
  templateUrl: './test-form-validation.html',
  styleUrl: './test-form-validation.scss',
})
export default class TestFormValidation {

  private formBuilder = inject(FormBuilder);

  errorsModel: ErrorMessage = {
    'name': {
      required: 'Debe especificar el nombre',
      minlength: 'El nombre debe tener mínimo 3 caracteres'
    },
    'age': {
      required: 'Debe especificar la edad'
    }
  }

  testForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    age: ['', [Validators.required]]
  });

  onSubmit() {

  }
}
