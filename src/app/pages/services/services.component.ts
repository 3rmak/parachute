import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2 } from '@angular/core';

interface ServiceInterface {
  icon: string,
  title: string,
  description: string,
  image: string,
  details: string,
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services: ServiceInterface[] = [];
  flippedCards: boolean[] = [];
  
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  
  ngOnInit() {
    fetch('assets/data/services.json')
      .then(res => res.json())
      .then(data => this.services = data)
      .then(() => this.flippedCards = new Array(this.services.length).fill(false))
  }
  
  ngAfterViewInit() {
    const cards = this.el.nativeElement.querySelectorAll('.card-back');
      cards.forEach((card: HTMLElement, index: number) => {
        const imgSrc = '/assets/images/not-found.png'; // або service.imageUrl
        this.renderer.setStyle(card, 'backgroundImage', `url(${imgSrc})`);
        this.renderer.setStyle(card, 'backgroundSize', 'cover');
        this.renderer.setStyle(card, 'backgroundPosition', 'center');
      });
  }
  
  toggleFlip(index: number) {
    this.flippedCards[index] = !this.flippedCards[index];
  }
}
