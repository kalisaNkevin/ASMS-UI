import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  slides = [
    {
      src: 'assets/images/slide1.png',
      title: 'We bring you excellence Towards a cashless economy',
      subtitle: 'Tigersoft brings unlimited ability to improve the quality of people`s lives',
    },
    {
      src: 'assets/images/slide2.png',
      title: 'Tigersoft More than just an IT Company',
      subtitle: 'Big ideas start here',
    },
    {
      src: 'assets/images/slide3.png',
      title: 'Accelerate Your Business Growth With Us',
      subtitle: 'Tigersoft believes in growth by the result of forces working together',
    },
  ];


  currentSlideIndex = 0;

  nextSlide() {
    if (this.currentSlideIndex < this.slides.length - 1) {
      this.currentSlideIndex++;
    }
  }

  prevSlide() {
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
    }
  }

  goToSlide(index: number) {
    if (index >= 0 && index < this.slides.length) {
      this.currentSlideIndex = index;
    }
  }
}
