import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['../styles/card.scss']
})
export class CardComponent implements OnInit {

  @Input() cardType: string = '';
  @Input() cardData: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
