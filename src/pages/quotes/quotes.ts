import { Component, OnInit } from '@angular/core';

import { AlertController } from "ionic-angular";
import { NavParams } from "ionic-angular";
import { Quote } from "../../data/quote.interface";
import { QuotesService } from "../../services/quotes";

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html'
})
export class QuotesPage implements OnInit {
  quoteGroup: {category: string, quotes: Quote[], icon: string};

  //retrieve value to populate the quoteGroup variable via NavParams
  constructor(
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private quotesService: QuotesService
  ) {}
  
  ngOnInit(){
    this.quoteGroup = this.navParams.data;
  }

  // if cached and page loaded no need to fetch the data again
  // but will fail because the template is created before the did load
  // add elvis operator (?) in template to use this approach
  // ionViewDidLoad(){
  //   this.quoteGroup = this.navParams.data;
  // }

  onAddToFavorites(selectedQuote: Quote) {
    // the create method take a JS object as an argument
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?', // can leave this out
      message: 'Are you sure you would like to favorite the quote?',
      // can pass either ['Ok'] or whole JS object
      buttons: [
      {
        text: 'Yes',
        handler: () => {
          this.quotesService.addQuoteToFavorites(selectedQuote);
          console.log('Ok clicked');
        }
      },
      {
        text: 'Cancel',
        role: 'cancel', // role tells ionic that if the alert is dismissed execute the handler, if you dont have role the handler will only get executed if the button is selected but not if you tap the background
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
    });

    alert.present();
  }

  // to show unfavorite if the quote is already in favorites page
  onRemoveFromFavorites(quote: Quote)
  {
    this.quotesService.removeQuoteFromFavorites(quote);
  }

  // helper method that checks with the service if the quote is fav then returns the value
  isFavorite(quote: Quote){
    return this.quotesService.isQuoteFavorite(quote);
  }
}
