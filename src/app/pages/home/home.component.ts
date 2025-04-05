import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  homeContent: any = {}

  constructor(private router: Router) {}

  ngOnInit() {
    fetch('assets/data/home.json')
      .then(res => res.json())
      .then(data => this.homeContent = data);
  }

  navigate() {
    this.router.navigateByUrl('/booking-contact');
  }
}
