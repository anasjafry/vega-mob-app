import { Component } from '@angular/core';

import { PendingPage } from '../pending/pending';
import { DeliveredPage } from '../delivered/delivered';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = PendingPage;
  tab2Root: any = DeliveredPage;
  tab3Root: any = SettingsPage;

  constructor() {

  }
}
