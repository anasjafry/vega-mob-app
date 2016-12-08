import { Component } from '@angular/core';

import { PendingPage } from '../pending/pending';
import { ConfirmedPage } from '../confirmed/confirmed';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = PendingPage;
  tab2Root: any = ConfirmedPage;
  tab3Root: any = SettingsPage;

  constructor() {

  }
}
