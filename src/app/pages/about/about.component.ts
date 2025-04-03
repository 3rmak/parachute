import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  instructors = [
    {
      name: 'Peter A.',
      description: 'Майстер спорту з парапланеризму, 15 років досвіду, більше 5000 успішних польотів.',
      photo: 'assets/images/instructor1.jpg'
    },
    {
      name: 'Maria L.',
      description: 'Сертифікований інструктор, експерт з аеродинаміки, спеціаліст з екстремальних польотів.',
      photo: 'assets/images/instructor2.jpeg'
    },
    {
      name: 'Taylor S.',
      description: 'Тренер з міжнародним досвідом, проводить навчання в різних країнах світу.',
      photo: 'assets/images/instructor3.jpeg'
    }
  ];
}
