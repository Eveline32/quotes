import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Eveline','First Quote','Peter', 0, 0),
    new Quote(2, 'John','Second Quote', 'Susan',0, 0),
    new Quote(3, 'Elizabeth','Third Quote','Mandela', 0, 0)

  ]

  arr:number[] =this.quotes.map(quote=>quote.upvotes)
  highest = Math.max( ...this.arr)
  constructor() { }

  ngOnInit(): void{
  }

}
