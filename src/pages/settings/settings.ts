import { Component } from '@angular/core';
import { Toggle } from "ionic-angular";
import { SettingsService } from "../../services/settings";

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(private settingsService: SettingsService){}

  // when toggled do below
  onToggle(toggle: Toggle){
    // use below to view the properties of the toggle event
    //console.log(toggle);
    this.settingsService.setBackground(toggle.checked);
  }

  // call is altBackground and return it to display current setting
  checkAltBackground(){
    return this.settingsService.isAltBackground();
  }

  // this is boiler plate for logging and can be deleted
  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
}
