import { Component } from '@angular/core';
import { SearchPage } from '../search/search';
import { VieworderPage } from '../vieworder/vieworder';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public navCtrl: NavController) {

  }

  SecondPage() {
    console.log("Second Page Called");
    this.navCtrl.push(VieworderPage);
  }
  
  SearchPage() {
    console.log("Search Page Called");
    this.navCtrl.push(SearchPage);
  }
}
