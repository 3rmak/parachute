import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

import { SocialLinksComponent } from "./social-links/social-links.component";
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-booking-contact',
  standalone: true,
  imports: [SocialLinksComponent, ReactiveFormsModule],
  templateUrl: './booking-contact.component.html',
  styleUrl: './booking-contact.component.scss'
})
export class BookingContactComponent {
  bookingForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      contact: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.bookingForm.invalid) return;

    const formValues = this.bookingForm.value;

    const templateParams = {
      from_name: formValues.name,
      name: formValues.name,
      time: new Date().toISOString(),
      email: environment.emailjsReceiverEmail,
      message: `
        My contancts: "${formValues.contact}"
        Book date: ${formValues.date}
      `
    };

    emailjs.send(
      environment.emailjsServiceId,
      environment.emailjsTemplateId,
      templateParams,
      environment.emailjsPublicKey,
    )
    .then(() => {
      alert('Лист надіслано успішно!');
      this.bookingForm.reset();
    })
    .catch(error => {
      console.error('Помилка надсилання листа:', error);
      alert('Сталася помилка. Спробуйте ще раз.');
    });
  }
}
