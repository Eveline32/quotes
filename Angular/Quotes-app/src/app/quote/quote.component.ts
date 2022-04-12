import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1,'Peter', 'First Quote', 'Kofi Anan', new Date(2012, 3, 12), 0,0),
    new Quote(2,'Esther', 'Second Quote', 'Barack Obama', new Date(2013, 5, 13), 0,0),
    new Quote(3,'Getrude', 'Third Quote', 'KNelson Mandela', new Date(2021, 9, 1), 0,0),  ]

    arr:number[] = this.quotes.map(quote=>quote.upVotes)
    highest =Math.max(...this.arr)
 
  constructor() { }

  ngOnInit(): void {
  }

}
