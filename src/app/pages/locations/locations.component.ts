import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

interface Location {
  id: number;
  name: string;
  description: string;
  duration: string;
  height: number;
  image: string;
  coordinates: { lat: number; lng: number };
}

@Component({
  selector: 'app-locations',
  standalone: true,
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss',
  imports: [CommonModule, RouterModule]
})
export class LocationsComponent implements OnInit {
  locations: Location[] = [];

  constructor(private router: Router, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    fetch('assets/data/locations.json')
      .then(res => res.json())
      .then(data => this.locations = data);
  }

  openLocation(id: number) {
    this.router.navigate(['/locations', id]);
  }
}
