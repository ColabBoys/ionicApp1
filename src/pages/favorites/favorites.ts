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

    constructor (private quotesService: QuotesService, private modalCtrl: ModalController) {}

    ionViewWillEnter() {
      this.quotes = this.quotesService.getFavoriteQuotes();
    }

    onViewQuote(quote: Quote) {
      // modal create needs a page to load as an argument make sure to import it
      // second argument you can pass any data so in this case its the quote
      // passes the selected quote in the modal
      const modal = this.modalCtrl.create(QuotePage, quote);
      
      // to present to user
      modal.present();
    }
}
