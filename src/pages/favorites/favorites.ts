import { Component } from '@angular/core';
import { Quote } from "../../data/quote.interface";
import { QuotesService } from "../../services/quotes";
import { ModalController } from "ionic-angular";
import { QuotePage } from "../quote/quote";

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes: Quote[];

  constructor(private quotesService: QuotesService, private modalCtrl: ModalController) { }

  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  // remove via sliding
  onRemoveFromFavorites(quote: Quote) {
    // remove from fav
    this.quotesService.removeQuoteFromFavorites(quote);

    // also this.. can do the same as below and above
    // this.quotes = this.quotesService.getFavoriteQuotes();
    // remove and reload
    const position = this.quotes.findIndex((quoteEl: Quote) => {
      return quoteEl.id == quote.id;
    });
    this.quotes.splice(position, 1);
  }

  onViewQuote(quote: Quote) {
    // modal create needs a page to load as an argument make sure to import it
    // second argument you can pass any data so in this case its the quote
    // passes the selected quote in the modal
    const modal = this.modalCtrl.create(QuotePage, quote);

    // to present to user
    modal.present();

    //modal is just a view so can execute all the methods that you can with a view controller
    // can actually dismiss the modal from here too
    // on did dismiss takes a function as an argument which is executed whenever the view is dismissed -- callback function
    modal.onDidDismiss((remove: boolean) => {
      // if remove is true from the unfav button then remove it using the Service function
      // then reload the favorites page full of quotes (2) methods the first one is shorter
      if (remove) {
        // remove from fav
        this.onRemoveFromFavorites(quote);
      }
      console.log(remove);
    });

    // // before its about to leave but right before leaving so can track the before and after
    // didLeave does the same thing but is fired closer to the onDidDismiss but the data will still be before
    // because these functions will not grab the data passed in the dismiss() function 
    // both are OBSERVABLES
    // modal.willLeave.subscribe(
    //   (remove: boolean) => console.log(remove)
    // );
  }
}
