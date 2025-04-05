import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true, 
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [CommonModule, RouterModule]
})
export class HeaderComponent implements OnInit {
  isMobileMenuOpen = false;
  isScrolled = false;
  lastScrollTop = 0;
  isHeaderVisible = true;

  constructor() { }

  ngOnInit(): void {
    // Перевіряємо початковий скрол сторінки
    this.checkScroll();
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (this.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'; // Запобігає прокрутці сторінки
    } else {
      document.body.style.overflow = ''; // Відновлює прокрутку
    }
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    document.body.style.overflow = '';
  }

  checkScroll(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Умова для класу scrolled
    if (scrollTop > 50) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();

    // Додаткова логіка для ховання хедера при скролі вниз
    const st = window.pageYOffset || document.documentElement.scrollTop;
    const header = document.querySelector('.main-header') as HTMLElement;
    
    if (st > this.lastScrollTop && st > 150) {
      // Скрол вниз
      if (this.isHeaderVisible && !this.isMobileMenuOpen) {
        header.style.transform = 'translateY(-100%)';
        this.isHeaderVisible = false;
      }
    } else {
      // Скрол вгору
      if (!this.isHeaderVisible) {
        header.style.transform = 'translateY(0)';
        this.isHeaderVisible = true;
      }
    }
    
    // Для маленьких скролів не оновлюємо lastScrollTop
    if (Math.abs(st - this.lastScrollTop) > 5) {
      this.lastScrollTop = st <= 0 ? 0 : st;
    }
  }

  @HostListener('window:resize', [])
  onWindowResize() {
    if (window.innerWidth > 768 && this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
  }
}