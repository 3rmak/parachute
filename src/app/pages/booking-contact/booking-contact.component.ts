import { Component } from '@angular/core';
import { SocialLinksComponent } from "./social-links/social-links.component";

@Component({
  selector: 'app-booking-contact',
  standalone: true,
  imports: [SocialLinksComponent],
  templateUrl: './booking-contact.component.html',
  styleUrl: './booking-contact.component.scss'
})
export class BookingContactComponent {

}
