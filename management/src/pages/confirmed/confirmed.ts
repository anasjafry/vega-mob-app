import { Component } from '@angular/core';

import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-confirmed',
  templateUrl: 'confirmed.html'
})
export class ConfirmedPage {

  testRadioOpen: boolean;
  testRadioResult;

  constructor(public alerCtrl: AlertController) { }

  doConfirm() {
    let confirm = this.alerCtrl.create({
      title: 'Cancel Order',
      message: 'Are you sure you want to cancel the order?',
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

  doRadio() {
    let alert = this.alerCtrl.create();
    alert.setTitle('Assign Delivery Agent');

    alert.addInput({
      type: 'radio',
      label: 'Balu',
      value: 'balu',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Ramu',
      value: 'ramu'
    });

    alert.addInput({
      type: 'radio',
      label: 'Chotu',
      value: 'chotu'
    });

    alert.addInput({
      type: 'radio',
      label: 'Munna',
      value: 'munna'
    });


    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });

    alert.present().then(() => {
      this.testRadioOpen = true;
    });
  }
}
