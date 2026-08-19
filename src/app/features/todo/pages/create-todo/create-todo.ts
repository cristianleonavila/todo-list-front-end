import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-todo',
  imports: [ReactiveFormsModule],
  templateUrl: './create-todo.html',
  styleUrl: './create-todo.scss',
})
export class CreateTodo {

  public isLoading = signal(false);
  private readonly formBuilder = inject(FormBuilder);
  private readonly toastr = inject(ToastrService);
  public todoForm = this.formBuilder.group({
    'title': ['', [Validators.required]],
    'description': [Validators.required]
  });

  onSubmit() {
    
  }
}
