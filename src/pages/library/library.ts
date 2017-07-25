import { Component, OnInit } from '@angular/core';

import { Quote } from "../../data/quote.interface";
import quotes from '../../data/quotes';
import { QuotesPage } from "../quotes/quotes";

@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})
export class LibraryPage implements OnInit{
  // not a single object but an array of so need to add the [] at the end
  quoteCollection: {category: string, quotes: Quote[], icon: string}[];
  quotesPage = QuotesPage;

  ngOnInit(){
    this.quoteCollection = quotes;
  }
}
