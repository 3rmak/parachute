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
      description: 'Master of Sports in paragliding, 15 years of experience, more than 5000 successful flights.',
      photo: 'assets/images/instructor1.jpg'
    },
    {
      name: 'Maria L.',
      description: 'He is a certified instructor, aerodynamics expert, and extreme flight specialist.',
      photo: 'assets/images/instructor2.jpeg'
    },
    {
      name: 'Taylor S.',
      description: 'Trainer with international experience, conducts training in different countries of the world.',
      photo: 'assets/images/instructor3.jpeg'
    }
  ];
}
