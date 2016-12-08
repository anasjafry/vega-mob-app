import { Component } from '@angular/core';

import { AlertController } from 'ionic-angular';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-pending',
  templateUrl: 'pending.html'
})
export class PendingPage {

  constructor(public alertCtrl: AlertController) { }

  doPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Delivery Confirmation',
      inputs: [
        {
          name: 'otp',
          placeholder: 'Enter OTP'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

}