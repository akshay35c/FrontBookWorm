import { Component, OnInit, ViewChild } from '@angular/core';
import {NgbModule, NgbCarousel, NgbSlideEvent, NgbSlideEventSource, NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  
  
  
  constructor(config: NgbCarouselConfig) { 
config.interval = 3000;
  config.wrap = true;
  config.keyboard = false;
  config.pauseOnHover = true;

  }


images : String[] = ['/assets/Images/c1.jpg', '/assets/Images/c2.jpg', 
'/assets/Images/c3.jpg', '/assets/Images/c4.png','/assets/Images/c5.webp'];





ngOnInit() {
}

}


