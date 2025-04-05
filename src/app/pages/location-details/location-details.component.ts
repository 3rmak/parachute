import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { environment } from '../../../environments/environment';

interface Location {
  id: number;
  name: string;
  description: string;
  duration: string;
  height: number;
  image: string;
  carousel: string[];
  coordinates: { lat: number; lng: number };
}

@Component({
  selector: 'app-location-details',
  standalone: true,
  templateUrl: './location-details.component.html',
  styleUrl: './location-details.component.scss',
  imports: [CommonModule, RouterModule]
})
export class LocationDetailsComponent implements OnInit {
  location!: Location;
  googleMapsApiKey: string = environment.googleMapsApiKey;
  currentImageIndex = 0;
  touchStartX = 0;
  touchEndX = 0;

  get API_URL() {
    return`https://www.google.com/maps/embed/v1/place?key=${this.googleMapsApiKey}&q=${this.location.coordinates.lat},${this.location.coordinates.lng}`
  }

  constructor(private route: ActivatedRoute, private router: Router) {}

  goToAllLocations() {
    this.router.navigate(['/locations']); // Replace with your actual route
  }

  prevImage() {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    } else {
      this.currentImageIndex = this.location.carousel.length - 1;
    }
  }

  nextImage() {
    if (this.currentImageIndex < this.location.carousel.length - 1) {
      this.currentImageIndex++;
    } else {
      this.currentImageIndex = 0;
    }
  }

  onTouchStart(event: TouchEvent | MouseEvent) {
    this.touchStartX = 'touches' in event ? event.touches[0].clientX : (event as MouseEvent).clientX;
  }
  
  onTouchEnd(event: TouchEvent | MouseEvent) {
    this.touchEndX = 'changedTouches' in event ? event.changedTouches[0].clientX : (event as MouseEvent).clientX;
    this.handleSwipe();
  }
  
  handleSwipe() {
    const deltaX = this.touchEndX - this.touchStartX;
    const threshold = 50; // Мінімальна відстань для свайпу
  
    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        this.prevImage();
      } else {
        this.nextImage();
      }
    }
  }

  goToImage(index: number) {
    this.currentImageIndex = index;
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
