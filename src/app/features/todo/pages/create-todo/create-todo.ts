import { NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';import { FormError } from '@shared/components/form-error/form-error';
import { InvalidClass } from '@shared/directives/invalid-class';
;
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-todo',
  imports: [ReactiveFormsModule, InvalidClass, FormError],
  templateUrl: './create-todo.html',
  styleUrl: './create-todo.scss',
})
export class CreateTodo {

  public isLoading = signal(false);
  private readonly formBuilder = inject(FormBuilder);
  private readonly toastr = inject(ToastrService);
  errorsModel = {
    title: {
      required: "Debe digitar el título de la tarea",
      minlength: "El título debe tener minimo 3 caracteres"
    },
    description: {
      required: "Debe digitar la descripción de la tarea"
    }
  };

  public todoForm = this.formBuilder.group({
    'title': ['', [Validators.required, Validators.minLength(4)]],
    'description': ['', Validators.required]
  });

  onSubmit() {
    if ( this.todoForm.invalid ) {
      this.todoForm.markAllAsTouched();
    }
  }
}
