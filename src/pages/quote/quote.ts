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


  ionViewDidLoad() {
    this.person = this.navParams.get('person');
    this.text = this.navParams.get('text');
  }

  // view controller controls the currently active view
  // nav controller controls the navigation stack
  onClose(){
    // deletes the page (modal) gets rid of the overlay then view the top most page of the nav stack
    // so have something to display instead so if using nav controller and you want to dismiss and you do this,
    // and you do not have a page below your pop then you're fucked
    this.viewCtrl.dismiss();
  }
}
