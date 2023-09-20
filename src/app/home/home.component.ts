import { Component, OnInit} from '@angular/core';
import { appPath } from '../app-path.const';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
  path = appPath;

  private slideIndex = 1;

  constructor(){ }

  ngOnInit(){
    this.showSlides(1);
  }

  // Next/previous controls
  plusSlides(n: number):void {
    this.showSlides(this.slideIndex += n);
  }

  // Thumbnail image controls
  currentSlide(n: number): void {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n: number):void {
    let i;
    let slides = document.getElementsByClassName("mySlides")as HTMLCollectionOf<HTMLElement>;
    let dots = document.getElementsByClassName("dot")as HTMLCollectionOf<HTMLElement>;
    if (n > slides.length) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex-1].style.display = "block";
    dots[this.slideIndex-1].className += " active";
    // setInterval( () => {
    //   this.plusSlides(1);
    // }, 3000);
  }
}

