import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-social-links',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-links.component.html',
  styleUrl: './social-links.component.scss'
})
export class SocialLinksComponent {
  socialLinks = [
    { name: 'YouTube', icon: 'assets/icons/youtube.png', url: 'https://youtube.com' },
    { name: 'Instagram', icon: 'assets/icons/instagram.png', url: 'https://instagram.com' },
    { name: 'WhatsApp', icon: 'assets/icons/whatsapp.png', url: 'https://wa.me/' }
  ];
}
