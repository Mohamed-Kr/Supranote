import { Component } from '@angular/core';


import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


import axios from 'axios';

@Component({
  selector: 'agenda',
  templateUrl: 'agenda.page.html',
  styleUrls: ['agenda.page.scss']
})

export class AgendaPage {

  constructor(public actionSheetController: ActionSheetController, public alertController: AlertController, public toastController: ToastController) { }



  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'bonjour coordialement',
      message: 'mange du chocolat',
      position: 'bottom',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'mdr jpp',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'lol',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }


  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Paramètres',
      buttons: [{
        text: 'Delete',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Partager',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Personaliser',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Se déconnecter',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }


  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Compte',
      inputs: [
        {
          name: 'id',
          type: 'text',
          placeholder: 'Identifiant habituel'
        },
        {
          name: 'pass',
          type: 'password',
          placeholder: 'Mot de passe habituel'
        },
        {
          name: 'ac',
          type: 'text',
          placeholder: 'Académie en minuscule'
        }
      ],
      buttons: [
        {
          text: 'Confirmer',
          role: 'cancel',
          cssClass: 'success',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Annuler',
          cssClass: 'danger',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
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