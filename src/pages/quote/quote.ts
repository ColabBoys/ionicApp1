import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  // person and text to add to
  person: string;
  text: string;

  constructor(public viewCtrl: ViewController, private navParams: NavParams) {
  }

  // ion view did load is only executed if the data is NOT gotten from the cache
  ionViewDidLoad() {
    this.person = this.navParams.get('person');
    this.text = this.navParams.get('text');
  }

  // view controller controls the currently active view
  // nav controller controls the navigation stack
  onClose(remove = false){
    // deletes the page (modal) gets rid of the overlay then view the top most page of the nav stack
    // so have something to display instead so if using nav controller and you want to dismiss and you do this,
    // and you do not have a page below your pop then you're fucked
    // in the dismiss the argument passed is any data we want to pass to the next view or view beneath
    // dismiss was empty before .dismiss()
    // also pass remove = false as argument for onClose() to pass a default FALSE for not to remove the quote from fav
    // also need to add a click handler in the button in the html (on close)
    this.viewCtrl.dismiss(remove);
  }
}
