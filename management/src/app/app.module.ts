import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ConfirmedPage } from '../pages/confirmed/confirmed';
import { SettingsPage } from '../pages/settings/settings';
import { PendingPage } from '../pages/pending/pending';
import { TabsPage } from '../pages/tabs/tabs';
import { VieworderPage } from '../pages/vieworder/vieworder';
import { SearchPage } from '../pages/search/search';

@NgModule({
  declarations: [
    MyApp,
    PendingPage,
    SettingsPage,
    ConfirmedPage,
    VieworderPage,
    SearchPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PendingPage,
    SettingsPage,
    ConfirmedPage,
    VieworderPage,
    SearchPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
