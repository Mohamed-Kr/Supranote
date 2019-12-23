import { Component } from '@angular/core';

import { AlertController } from '@ionic/angular';



@Component({
  selector: 'notes',
  templateUrl: 'notes.page.html',
  styleUrls: ['notes.page.scss']
})

export class NotesPage {

  constructor(public alertController: AlertController) { }

  dropped = [false, false, false];
  t = 1;

  change(v) { this.dropped[v] = !this.dropped[v]}

  d(v) {
    if (v) {return 'dropdown';}
    return 'dropright';
  }

  c(p) {
    console.log(p)
  }


  async selectT() {
    const alert = await this.alertController.create({
      header: 'Timestres',
      inputs: [
        {
          name: 't1',
          type: 'radio',
          label: 'Trimestre 1',
          value: '1',
          checked: this.t === 1,
          handler: () => { this.t = 1; }
        },
        {
          name: 't2',
          type: 'radio',
          label: 'Trimestre 2',
          value: '2',
          checked: this.t === 2,
          handler: () => { this.t = 2; }
        },
        {
          name: 't3',
          type: 'radio',
          label: 'Trimestre 3',
          value: '3',
          checked: this.t === 3,
          handler : () => {this.t = 3;}
        }
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Ok'
        }
      ]
    });

    await alert.present();
  }


  async noteInfo() {
    const alert = await this.alertController.create({
      header: 'DM4',
      message: "<br/>note+: 19.5<br/>moy: 3.5<br/>note-: ta note lol",
      buttons: [
        {
          text: 'Ok',
        }
      ],
      subHeader: 'coeff: 7, tist',
    });
    await alert.present();
  }
}
