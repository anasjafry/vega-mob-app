import { Component } from '@angular/core';

import { AlertController } from 'ionic-angular';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-pending',
  templateUrl: 'pending.html'
})
export class PendingPage {

  constructor(public alerCtrl: AlertController) { }

  doConfirm() {
    let confirm = this.alerCtrl.create({
      title: 'Reject Order',
      message: 'Are you sure you want to reject this order?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present()
  }

}