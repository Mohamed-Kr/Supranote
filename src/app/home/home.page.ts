import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AgendaPage } from '../agenda/agenda.page';
import { NotesPage } from '../notes/notes.page';
import { AlertController } from '@ionic/angular';
import { PopoverController } from 'ionic-angular';

@Component({
  selector: 'home',
  styleUrls: ['home.page.scss'],
  templateUrl: 'home.page.html'
})


export class HomePage {

  m1 = false;
  m2 = false;
  m3 = false;

  constructor(public alertController: AlertController) { }



  async presentNotesInfos() {
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

  async presentAlertHomeworks() {
    const alert = await this.alertController.create({
      header: 'Devoirs',
      inputs: [
        {
          name: 'd1',
          type: 'checkbox',
          label: 'Pleurer',
          value: 'value1',
          checked: true,
        },

        {
          name: 'checkbox2',
          type: 'checkbox',
          label: 'Pleurer encore plus',
          value: 'value2',
        },

        {
          name: 'checkbox2',
          type: 'checkbox',
          label: 'Dm que je ne rammasserai pas lol',
          value: 'value2',
        },

      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

}