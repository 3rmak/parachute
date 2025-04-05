import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
   services = [
    {
      icon: '/assets/images/not-found.png',
      title: 'Тандемний політ',
      description: 'Політ з професійним інструктором з найвищих вершин Альп.',
      image: '/assets/images/not-found.png',
      details: 'Доступно на різних локаціях в Альпах. Тривалість від 15 до 45 хв.'
    },
    {
      icon: '/assets/images/not-found.png',
      title: 'Фотозйомка та відео',
      description: 'Захоплюючі кадри з польоту, щоб залишити спогади назавжди.',
      image: '/assets/images/not-found.png',
      details: 'Професійна 4K зйомка з повітря та з рук. Готові матеріали за 24 години.'
    },
    {
      icon: '/assets/images/not-found.png',
      title: 'Подарункові сертифікати',
      description: 'Найкращий подарунок — емоції. Даруйте незабутні враження.',
      image: '/assets/images/not-found.png',
      details: 'Цифрові або фізичні сертифікати з персональним дизайном.'
    },
    {
      icon: '/assets/images/not-found.png',
      title: 'Навчальні курси',
      description: 'Почніть власний шлях у парапланеризмі з нашими інструкторами.',
      image: '/assets/images/not-found.png',
      details: 'Курси для початківців та просунутих з сертифікацією.'
    }
  ];
  flippedCards: boolean[] = [];
  
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  
  ngOnInit() {
    this.flippedCards = new Array(this.services.length).fill(false);
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
