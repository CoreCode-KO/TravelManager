import { Component, Input, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'place-card',
  templateUrl: './place-card.component.html',
  styleUrls: ['../styles/card.scss']
})
export class PlaceCardComponent {

  @Input() eventData: any[] = [];

  constructor() { }

  config: SwiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.next-photo',
      prevEl: '.prev-photo'
    }
  };

}
