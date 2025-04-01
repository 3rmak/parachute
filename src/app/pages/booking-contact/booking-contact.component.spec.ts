import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingContactComponent } from './booking-contact.component';

describe('BookingContactComponent', () => {
  let component: BookingContactComponent;
  let fixture: ComponentFixture<BookingContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
