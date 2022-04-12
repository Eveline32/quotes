import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1,'Peter', 'First Quote', 'Kofi Anan', new Date(2012, 3, 12), 0,0),
    new Quote(2,'Esther', 'Second Quote', 'Barack Obama', new Date(2013, 5, 13), 0,0),
    new Quote(3,'Getrude', 'Third Quote', 'KNelson Mandela', new Date(2021, 9, 1), 0,0),  ]
  constructor() { }

  ngOnInit(): void {
  }

}
