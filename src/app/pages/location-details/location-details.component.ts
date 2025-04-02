import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../..//environments/environment';

interface Location {
  id: number;
  name: string;
  duration: string;
  height: number;
  image: string;
  coordinates: { lat: number; lng: number };
}

@Component({
  selector: 'app-location-details',
  standalone: true,
  templateUrl: './location-details.component.html',
  styleUrl: './location-details.component.scss',
  imports: [CommonModule]
})
export class LocationDetailsComponent implements OnInit {
  location!: Location;
  googleMapsApiKey: string = environment.googleMapsApiKey;

  get API_URL() {
    return`https://www.google.com/maps/embed/v1/place?key=${this.googleMapsApiKey}&q=${this.location.coordinates.lat},${this.location.coordinates.lng}`
  }

  constructor(private route: ActivatedRoute, private router: Router) {}

  goToAllLocations() {
    this.router.navigate(['/locations']); // Replace with your actual route
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    fetch('assets/data/locations.json')
      .then(res => res.json())
      .then((data: Location[]) => {
        this.location = data.find(loc => loc.id === id)!;
      });
  }
}
