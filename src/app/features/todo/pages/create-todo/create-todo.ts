import { NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';;
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-todo',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './create-todo.html',
  styleUrl: './create-todo.scss',
})
export class CreateTodo {

  public isLoading = signal(false);
  private readonly formBuilder = inject(FormBuilder);
  private readonly toastr = inject(ToastrService);

  public todoForm = this.formBuilder.group({
    'title': ['', [Validators.required, Validators.minLength(4)]],
    'description': ['', Validators.required]
  });

  onSubmit() {
    if ( this.todoForm.invalid ) {
      this.todoForm.markAllAsTouched();
      console.log(this.todoForm.get(''));

      return;
    }
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.todoForm.get(fieldName);
    return !!(
      field &&
      field.invalid &&
      (field.dirty || field.touched)
    );
  }
}
