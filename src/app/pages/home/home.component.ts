import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  heroContent = {
    title: 'Тандемні польоти на параплані',
    subtitle: 'Незабутні емоції в найкращих локаціях Європи',
    background: 'assets/images/hero-bg.jpg'
  };
}
