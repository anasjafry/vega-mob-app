import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-vieworder',
  templateUrl: 'vieworder.html'
})
export class VieworderPage {
	items;
  constructor() {
  this.initializeItems();
  }

  initializeItems() {
    this.items = [
	  'Order# 112233',
      'Order# 112234',
      'Order# 112235',
      'Order# 112236',
      'Order# 112237',
      'Order# 112238',
      'Order# 112239',
      'Order# 112240',
      'Order# 112241',
      'Order# 112242',
      'Order# 112243',
      'Order# 112244',
      'Order# 112245',
      'Order# 112246',
      'Order# 112247',
      'Order# 112248',
      'Order# 112249',
      'Order# 112250',
      'Order# 112251',
      'Order# 112252',
      'Order# 112253',
      'Order# 112254',
      'Order# 112255',
      'Order# 112256',
      'Order# 112257',
      'Order# 112258',
      'Order# 112259',
      'Order# 112260',
      'Order# 112261',
      'Order# 112262',
      'Order# 112263',
      'Order# 112264',
      'Order# 112265'
    ];
    }

    getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
