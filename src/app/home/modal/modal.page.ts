import { Component, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';

import { Components } from '@ionic/core';

import { ModalController } from '@ionic/angular';

@Component({
	selector: 'modal-page',
	templateUrl: 'modal-page.html'
})
export class ModalPage {
	// modal is available here where created with:
	// modalController.create({ component: SomeModalComponent})
	@Input() modal: Components.IonModal;

	onCancel = () =>
		this.modal.dismiss();
}