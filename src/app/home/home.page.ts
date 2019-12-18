import { Component } from '@angular/core';

import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

import { ModalController } from '@ionic/angular';
import { ModalPage } from './modal/modal.page';


@Component({
  selector: 'app-home',
  styleUrls: ['home.page.scss'],
  templateUrl: 'home.page.html'
})


export class HomePage {
  c = 0


  @ViewChild('slides', {static:true}) slides: Slides;
  
  slideOpts = {
    autoHeight: true,
    pager: true,
    speed: 500
  };


  slideChanged() {
    this.slides.getActiveIndex().then(data => {
      console.log(data)
    })
  }

  slideHasChanged(i) {
    console.log(i)
    console.log(document.getElementsByTagName("ion-segment-button")[i])
    document.getElementsByTagName("ion-segment-button")[i].setAttribute("checked", "true")
  }
  
  constructor(public modalController: ModalController) {
    console.log("llllalal")
   }
  
  segmentChanged(i: any) {
    this.slides.slideTo(i, 500)
    this.c = i
  }
  
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage
    });
    return await modal.present();
  }

}