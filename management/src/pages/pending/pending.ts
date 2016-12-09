import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { VieworderPage } from '../vieworder/vieworder';

@Component({
  selector: 'page-pending',
  templateUrl: 'pending.html'
})
export class PendingPage {
  constructor(
  public alerCtrl: AlertController,
  public navCtrl: NavController) {
  this.navCtrl = navCtrl; 
  }

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

  doPrompt() {
    let prompt = this.alerCtrl.create({
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
          text: 'OK',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  SecondPage() {
    console.log("Second Page Called");
    this.navCtrl.push(VieworderPage);
  }
  

}