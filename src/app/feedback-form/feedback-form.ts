import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedback-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './feedback-form.html',
  styleUrl: './feedback-form.css'
})
export class FeedbackFormComponent {
  feedbackForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.feedbackForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      feedback: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() { return this.feedbackForm.controls; }

  onSubmit(): void {
    this.submitted = true;
    if (this.feedbackForm.invalid) {
      return;
    }
    console.log('Form Submitted!', this.feedbackForm.value);
    alert('Thank you for your feedback!');
    this.feedbackForm.reset();
    this.submitted = false;
  }
}
