import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services = [
    { name: 'Тандемний політ', description: 'Політ із досвідченим пілотом.', image: 'assets/images/service1.jpg' },
    { name: 'Фото та відео', description: 'Збережіть свої враження на все життя.', image: 'assets/images/service2.jpg' }
  ];
}
