import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NavController, MenuController } from "ionic-angular";

import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from "../pages/settings/settings";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabsPage = TabsPage;
  settingsPage = SettingsPage;

  // uses the nav tag to get reference to it from the html page -- <ion-nav [root]="tabsPage" #nav></ion-nav>
  @ViewChild('nav') nav: NavController;

  onLoad(page: any){
    // replace currently active root page
    // the <ion-nav [root]="tabsPage" #nav></ion-nav> from app.html
    // to do this will also need to inject menu controller below in constructor
    this.nav.setRoot(page);

    // when you select an item the menu does not close automatically unless below
    this.menuCtrl.close();
  }

  constructor(platform: Platform, statusBar: StatusBar, 
    splashScreen: SplashScreen, private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

