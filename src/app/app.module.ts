import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { FavoritesPage } from '../pages/favorites/favorites';
import { LibraryPage } from '../pages/library/library';
import { QuotePage } from '../pages/quote/quote';
import { QuotesPage } from '../pages/quotes/quotes';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';
import { QuotesService } from "../services/quotes";

@NgModule({
  declarations: [
    MyApp,
    FavoritesPage,
    QuotePage,
    QuotesPage,
    SettingsPage,
    TabsPage,
    LibraryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavoritesPage,
    QuotePage,
    QuotesPage,
    SettingsPage,
    TabsPage,
    LibraryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuotesService // providing this service application wide so where ever we use it we use this instance
  ]
})
export class AppModule {}
