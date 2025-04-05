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
  socialLinks: any = {};

  ngOnInit() {
    fetch('assets/data/social.json')
      .then(res => res.json())
      .then(data => this.socialLinks = data);
  }
}
