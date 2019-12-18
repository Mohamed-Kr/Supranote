import { Component } from '@angular/core';

import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

import { ModalController } from '@ionic/angular';
import { ModalPage } from './modal/modal.page';

import { ActionSheetController } from '@ionic/angular';

import { AlertController } from '@ionic/angular';

import  axios  from 'axios';


@Component({
  selector: 'app-home',
  styleUrls: ['home.page.scss'],
  templateUrl: 'home.page.html'
})


export class HomePage {
  c = 0

  constructor(public actionSheetController: ActionSheetController, public alertController: AlertController) { }

  @ViewChild('slides', {static:true}) slides: Slides;
  
  slideOpts = {
    autoHeight: true,
    pager: true,
    speed: 500
  };


  slideChanged() {
    this.slides.getActiveIndex().then(data => {
      console.log(data)
      this.c=data
    })
  }

  slideHasChanged(i) {
    console.log(i)
    console.log(document.getElementsByTagName("ion-segment-button")[i])
    document.getElementsByTagName("ion-segment-button")[i].setAttribute("checked", "true")
  }
  
  
  segmentChanged(i: any) {
    this.slides.slideTo(i, 500)
    this.c = i
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
          name:'ac',
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
          label: 'Fait',
          value: 'value1',
          checked: true,
        },

        {
          name: 'checkbox2',
          type: 'checkbox',
          label: 'Checkbox 2',
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