import { Component, inject, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormError } from '@shared/components/form-error/form-error';
import { InvalidClass } from '@shared/directives/invalid-class';
import { ToastrService } from 'ngx-toastr';
import { finalize, map } from 'rxjs';
import { TodoService } from '@features/todo/services/todo-service';
import { ErrorMessage } from '@shared/components/form-error/types/error-message';

@Component({
  selector: 'app-create-todo',
  imports: [
    ReactiveFormsModule,
    InvalidClass,
    FormError
  ],
  templateUrl: './todo-component.html'
})
export class TodoComponent implements OnInit {

  public readonly isLoading = signal(false);

  private readonly formBuilder = inject(FormBuilder);
  private readonly toastr = inject(ToastrService);
  private readonly todoService = inject(TodoService);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly router = inject(Router);

  public readonly todoId = toSignal(
    this.activatedRoute.params.pipe(
      map(params => params['id'])
    )
  );

  public readonly todoForm = this.formBuilder.group({
    id: [''],
    title: ['', [Validators.required, Validators.minLength(4)]],
    description: ['', Validators.required]
  });

  errorsModel: ErrorMessage = {
    title: {
      required: 'Debe digitar el título de la tarea',
      minlength: 'El título debe tener mínimo 3 caracteres'
    },
    description: {
      required: 'Debe digitar la descripción de la tarea'
    }
  };

  ngOnInit(): void {
    this.loadTodo();
  }

  private loadTodo(): void {
    const id = this.todoId();

    if (!id) {
      return;
    }

    this.todoService.getById(id).subscribe({
      next: ({ todo = {} }) => {
        this.todoForm.reset(todo);
      },
      error: ({ statusText }) => {
        this.toastr.error(statusText, 'Error');
      }
    });
  }

  onSubmit(): void {

    if (this.todoForm.invalid) {
      this.todoForm.markAllAsTouched();
      return;
    }

    const id = this.todoId();
    const request = this.todoForm.getRawValue();

    this.isLoading.set(true);

    const request$ = id
      ? this.todoService.updateTodo(id, request)
      : this.todoService.createTodo(request);

    request$
      .pipe(
        finalize(() => this.isLoading.set(false))
      )
      .subscribe({
        next: ({ message, todo }) => {
          this.toastr.success(message, 'Hecho');

          setTimeout(() => {
            this.router.navigate([
              '/main/todo',
              todo?.id
            ]);
          }, 1500);
        },
        error: ({ statusText }) => {
          this.toastr.error(statusText, 'Error');
        }
      });
  }

  newTodo() {
    this.router.navigate(['/main/todo']);
  }
}
