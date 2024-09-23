import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css',
})
export class ReactiveFormsComponent {
  myForm: FormGroup;
  constructor() {
    this.myForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.maxLength(5),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onFormSubmit() {}
}
