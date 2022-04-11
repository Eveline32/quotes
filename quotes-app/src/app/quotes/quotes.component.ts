import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'First Quote', 0, 0),
    new Quote(2, 'Second Quote', 0, 0),
    new Quote(3, 'Third Quote', 0, 0)
  //  {id:1,quote:'First Quote',upvotes: 0, downvotes:0},
  //   {id:2, quote:'Second Quote', upvotes:0, downvotes:0},
  //   {id:3,quote:'Third Quote', upvotes:0, downvotes:0},
  //  {id:4,quote:'Forth Quote', upvotes:0, downvotes:0},
  //   {id:5,quote:'Fifth Quote',upvotes: 0, downvotes:0}

  ]

  constructor() { }

  ngOnInit(): void{
  }

}
